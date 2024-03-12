
# Project


### 概述

项目管理页


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _Project(@components/Project),remoteLoader(@kne/remote-loader),lodash(lodash)

```jsx
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


```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

