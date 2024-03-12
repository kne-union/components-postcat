const {default: Env} = _Env;
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
                getEnvList: {
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
            <Env data={{id:'123'}}/>
        </Layout>

    </PureGlobal>;
});

render(<BaseExample/>);
