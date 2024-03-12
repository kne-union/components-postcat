
# PostCatLocal


### 概述

PostCat的浏览器本地存储版本


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _PostCatLocal(@components/PostCatLocal),remoteLoader(@kne/remote-loader),lodash(lodash),router(react-router-dom)

```jsx
const {default: PostCatLocal} = _PostCatLocal;
const {createWithRemoteLoader} = remoteLoader;
const {useLocation, Routes, Route, Navigate} = router;
const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Layout']
})(({remoteModules}) => {
    const [Layout] = remoteModules;
    const location = useLocation();
    const list = location.pathname.split('/');
    const baseUrl = list.slice(0, list.indexOf('PostCatLocal') + 1).join('/');
    return <Layout navigation={{isFixed: false}}>
        <Routes>
            <Route path={baseUrl + '/*'} element={<PostCatLocal baseUrl={baseUrl} menuFixed={false}/>}/>
            <Route path="*" element={<Navigate to={baseUrl}/>}/>
        </Routes>
    </Layout>;
});

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

