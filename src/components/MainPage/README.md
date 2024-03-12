
# MainPage


### 概述

项目主页面


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _MainPage(@components/MainPage),remoteLoader(@kne/remote-loader),lodash(lodash),router(react-router-dom)

```jsx
const {default: MainPage} = _MainPage;
const {createWithRemoteLoader} = remoteLoader;
const {useLocation} = router;
const {getPublicPath} = remoteLoader;
const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Global@PureGlobal', 'components-core:Layout', 'components-core:Global@usePreset']
})(({remoteModules}) => {
    const [PureGlobal, Layout, usePreset] = remoteModules;
    const {ajax} = usePreset();
    const location = useLocation();
    const list = location.pathname.split('/');
    const baseUrl = list.slice(0, list.indexOf('PostCat') + 1).join('/') + '/postcat';
    return <PureGlobal preset={{
        ajax: (params) => {
            if (params.url === getPublicPath('components-postcat') + '/mock/formatApi/openApi.json') {
                console.log(params);
                return ajax(params);
            }
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
                }, getProjectDetail: {
                    loader: async () => {
                        return {
                            id: 'prod', name: '测试项目', description: "我是描述我是描述我是描述我是描述我是描述我是描述"
                        };
                    }
                }, getOpenApiDoc: {
                    url: getPublicPath('components-postcat') + '/mock/formatApi/openApi.json',
                    transformResponse: ({data}) => {
                        return {data: {code: 200, results: data}};
                    }
                }, doEditProject: {}, doDeleteProject: {}, doAddProject: {}, getEnvList: {
                    loader: async () => {
                        return {
                            pageData: [{
                                id: 'prod',
                                name: 'prod',
                                label: "生产环境",
                                description: "我是描述我是描述我是描述我是描述我是描述我是描述",
                            }, {
                                id: 'test',
                                name: 'test',
                                label: "测试环境",
                                description: "我是描述我是描述我是描述我是描述我是描述我是描述",
                            }, {
                                id: 'dev',
                                name: 'dev',
                                label: "开发环境",
                                description: "我是描述我是描述我是描述我是描述我是描述我是描述",
                            }], totalCount: 3
                        };
                    }
                }, doEditEnv: {}, doDeleteEnv: {}, doAddEnv: {}
            }
        }
    }}>
        <Layout navigation={{isFixed: false}}>
            <MainPage menuFixed={false} baseUrl={baseUrl}/>
        </Layout>

    </PureGlobal>;
});

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

