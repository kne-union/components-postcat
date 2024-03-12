import PostCat from '@components/PostCat';
import {v4 as uuidv4} from 'uuid';
import {createInstance} from "localforage";
import {createWithRemoteLoader} from "@kne/remote-loader";

const projectStore = createInstance({name: 'postcat-project'}),
    openApiDocStore = createInstance({name: 'postcat-openapi-doc'}), envStore = createInstance({name: 'postcat-env'});

const PostCatLocal = createWithRemoteLoader({
    modules: ['components-core:File@downloadBlobFile']
})(({remoteModules, ...props}) => {
    const [downloadBlobFile] = remoteModules;
    return <PostCat {...props} apis={{
        doAddProject: {
            loader: async ({data}) => {
                const id = uuidv4();
                const project = Object.assign({}, data, {id});
                await projectStore.setItem(id, project);
                return project;
            }
        }, getProjectList: {
            loader: async () => {
                const ids = await projectStore.keys();
                const pageData = await Promise.all(ids.map((id) => projectStore.getItem(id)));
                return {
                    pageData, totalCount: pageData.length
                };
            }
        }, doDeleteProject: {
            loader: async ({data}) => {
                const project = await projectStore.getItem(data.id);
                if (!project) {
                    throw new Error('数据已过期清刷新页面后重试');
                }
                project.openApiDocId && await openApiDocStore.removeItem(project.openApiDocId);
                project.envIds && await Promise.all(project.envIds.map((envId) => envStore.removeItem(envId)));
                await projectStore.removeItem(data.id);

                return {};
            }
        }, doEditProject: {
            loader: async ({data}) => {
                const project = await projectStore.getItem(data.id);
                if (!project) {
                    throw new Error('数据已过期清刷新页面后重试');
                }

                const newProject = Object.assign({}, project, data);

                await projectStore.setItem(newProject.id, newProject);

                return newProject;
            }
        }, getProjectDetail: {
            loader: async ({params}) => {
                return await projectStore.getItem(params.id);
            }
        }, getOpenApiDoc: {
            loader: async ({params}) => {
                const project = await projectStore.getItem(params.id);
                if (!project.openApiDocId) {
                    return null;
                }
                return openApiDocStore.getItem(project.openApiDocId);
            }
        }, doAddOpenApiDoc: {
            loader: async ({data: {projectId, ...data}}) => {
                const project = await projectStore.getItem(projectId);
                if (!project) {
                    throw new Error('数据已过期清刷新页面后重试');
                }
                const id = uuidv4();
                const doc = Object.assign({}, data, {id});
                await openApiDocStore.setItem(id, doc);
                await projectStore.setItem(project.id, Object.assign({}, project, {openApiDocId: id}));
                return doc;
            }
        }, doEditOpenApiDoc: {
            loader: async ({data}) => {
                const doc = await openApiDocStore.getItem(data.id);
                if (!doc) {
                    throw new Error('数据已过期清刷新页面后重试');
                }

                const newDoc = Object.assign({}, doc, data);

                await openApiDocStore.setItem(doc.id, newDoc);

                return newDoc;
            }
        }, getEnvList: {
            loader: async ({params: {projectId}}) => {
                const ids = await envStore.keys();
                const pageData = (await Promise.all(ids.map((id) => envStore.getItem(id)))).filter((item) => item.projectId === projectId);
                return {
                    pageData, totalCount: pageData.length
                };
            }
        }, doAddEnv: {
            loader: async ({data}) => {
                const project = await projectStore.getItem(data.projectId);
                if (!project) {
                    throw new Error('数据已过期清刷新页面后重试');
                }
                const id = uuidv4();
                const env = Object.assign({}, data, {id});
                await envStore.setItem(id, env);
                if (!project.envIds) {
                    project.envIds = [];
                }
                project.envIds.push(id);
                await projectStore.setItem(project.id, Object.assign({}, project));
                return env;
            }
        }, doEditEnv: {
            loader: async ({data}) => {
                const env = await envStore.getItem(data.id);
                if (!env) {
                    throw new Error('数据已过期清刷新页面后重试');
                }

                const newEnv = Object.assign({}, env, data);

                await envStore.setItem(newEnv.id, newEnv);

                return newEnv;
            }
        }, doDeleteEnv: {
            loader: async ({data}) => {
                const env = await envStore.getItem(data.id);
                if (!env) {
                    throw new Error('数据已过期清刷新页面后重试');
                }
                await envStore.removeItem(data.id);
                return null;
            }
        }, excludeApis: {
            loader: async ({params: {projectId}}) => {
                const project = await projectStore.getItem(projectId);
                if (!project.openApiDocId) {
                    throw new Error('数据已过期清刷新页面后重试');
                }
                const apis = await openApiDocStore.getItem(project.openApiDocId);
                if (!(apis && apis.content && apis.content.paths && Object.keys(apis.content.paths).length > 0)) {
                    throw new Error('没有可导出的API');
                }
                await downloadBlobFile(new Blob([JSON.stringify(apis.content)], {type: "text/plain"}), `openapi-${apis.id}.json`);
                return null;
            }
        }, excludeProject: {
            loader: async ({params: {projectId}}) => {
                const project = await projectStore.getItem(projectId);
                if (project.openApiDocId) {
                    project.openApiDoc = await openApiDocStore.getItem(project.openApiDocId);
                }
                if (project.envIds && project.envIds.length > 0) {
                    project.envs = await Promise.all(project.envIds.map((envId) => envStore.getItem(envId)));
                }
                delete project['openApiDocId'];
                delete project['envIds'];
                await downloadBlobFile(new Blob([JSON.stringify(project)], {type: "text/plain"}), `project-${project.id}.json`);
                return null;
            }
        }, includeProject: {
            loader: async ({data: {projectId, data}}) => {
                const project = await projectStore.getItem(projectId);
                // 先清空之前的project数据
                project.openApiDocId && await openApiDocStore.removeItem(project.openApiDocId);
                project.envIds && await Promise.all(project.envIds.map((envId) => envStore.removeItem(envId)));

                const newProject = {
                    id: projectId, name: project.name, description: data.description
                };

                if (data.openApiDoc && data.openApiDoc.content && data.openApiDoc.content.paths && Object.keys(data.openApiDoc.content.paths).length > 0) {
                    const id = uuidv4();
                    newProject.openApiDocId = id;
                    await openApiDocStore.setItem(id, {id, content: data.openApiDoc.content});
                }

                if (data.envs && Array.isArray(data.envs) && data.envs.length > 0) {
                    project.envIds = await Promise.all(data.envs.map(async (item) => {
                        const id = uuidv4();
                        await envStore.setItem(id, Object.assign({}, item, {id, projectId}));
                        return id;
                    }));
                }

                await projectStore.setItem(projectId, newProject);

                return newProject;
            }
        }
    }}/>;
});

export default PostCatLocal;
