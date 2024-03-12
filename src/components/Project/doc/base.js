const {default: Project} = _Project;
const {createWithRemoteLoader} = remoteLoader;
const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Global@PureGlobal', 'components-core:Layout']
})(({remoteModules}) => {
    const [PureGlobal, Layout] = remoteModules;
    return <PureGlobal preset={{
        ajax: async (params) => {
            console.log(params);
            return {
                data: {
                    code: 0, data: {}
                }
            };
        }, apis: {
            postcat: {
                getProjectList: {
                    loader: async () => {
                        return {
                            pageData: [{
                                id: 'prod',
                                name: 'prod',
                                description: "我是描述我是描述我是描述我是描述我是描述我是描述",
                            }, {
                                id: 'test',
                                name: 'test',
                                description: "我是描述我是描述我是描述我是描述我是描述我是描述",
                            }, {
                                id: 'dev', name: 'dev', description: "我是描述我是描述我是描述我是描述我是描述我是描述",
                            }], totalCount: 3
                        };
                    }
                }, doEditProject: {}, doDeleteProject: {}, doAddProject: {}
            }
        }
    }}>
        <Layout navigation={{isFixed: false}}>
            <Project/>
        </Layout>

    </PureGlobal>;
});

render(<BaseExample/>);

