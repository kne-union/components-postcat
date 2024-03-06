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
