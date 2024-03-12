import {createWithRemoteLoader} from '@kne/remote-loader';
import {useProps} from '../../commons/context';
import {App} from 'antd';

const ExportApisButton = createWithRemoteLoader({
    modules: ['components-core:Global@usePreset', 'components-core:LoadingButton']
})(({remoteModules, projectId, ...props}) => {
    const [usePreset, LoadingButton] = remoteModules;
    const {ajax, apis} = usePreset();
    const {apis: propsApis} = useProps();
    const {excludeApis} = Object.assign({}, apis.postcat, propsApis);
    const {message} = App.useApp();
    return <LoadingButton {...props} onClick={async () => {
        const {data: resData} = await ajax(Object.assign({}, excludeApis, {params: {projectId}}));
        if (resData.code !== 0) {
            return;
        }
        message.success('导出open-api文档成功');
    }}/>
});

export default ExportApisButton;
