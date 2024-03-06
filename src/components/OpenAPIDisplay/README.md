
# OpenAPIDisplay


### 概述

用于显示open api格式文档


### 示例(全屏)

#### 示例代码

- Format Response
- 格式化OpenApi，显示文档和编辑
- _OpenAPIDisplay(@components/OpenAPIDisplay),reactFetch(@kne/react-fetch),remoteLoader(@kne/remote-loader)

```jsx
const {default: OpenAPIDisplay, parseOpenApiData} = _OpenAPIDisplay;
const {createWithFetch} = reactFetch;
const {getPublicPath} = remoteLoader;
const BaseExample = createWithFetch({
    url: getPublicPath('components-postcat') + '/mock/formatApi/openApi.json', transformResponse: ({data}) => {
        return {data: {code: 200, results: data}};
    }
})(({data}) => {
    console.log(parseOpenApiData(data));
    return <OpenAPIDisplay data={data}/>;
});

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

