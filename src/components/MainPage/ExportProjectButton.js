import {createWithRemoteLoader} from '@kne/remote-loader';
import {useProps} from '../../commons/context';
import {App} from 'antd';

const ExportProjectButton = createWithRemoteLoader({
    modules: ['components-core:Global@usePreset', 'components-core:LoadingButton']
})(({remoteModules, projectId, ...props}) => {
    const [usePreset, LoadingButton] = remoteModules;
    const {ajax, apis} = usePreset();
    const {apis: propsApis} = useProps();
    const {excludeProject} = Object.assign({}, apis.postcat, propsApis);
    const {message} = App.useApp();
    return <LoadingButton {...props} onClick={async () => {
        const {data: resData} = await ajax(Object.assign({}, excludeProject, {params: {projectId}}));
        if (resData.code !== 0) {
            return;
        }
        message.success('导出项目成功');
    }}/>
});

export default ExportProjectButton;
