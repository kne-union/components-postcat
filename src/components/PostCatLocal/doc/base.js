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
