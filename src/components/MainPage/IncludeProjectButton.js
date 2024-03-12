import {createWithRemoteLoader} from "@kne/remote-loader";
import readJSONFile from './readJSONFile';
import {useProps} from "../../commons/context";
import {App} from 'antd';

const IncludeProjectButton = createWithRemoteLoader({
    modules: ["components-core:Common@InputFileButton", 'components-core:Global@usePreset', 'components-core:Modal@useConfirmModal']
})(({remoteModules, projectId, onSuccess, ...props}) => {
    const [Upload, usePreset, useConfirmModal] = remoteModules;
    const {ajax, apis} = usePreset();
    const {apis: propsApis} = useProps();
    const {message} = App.useApp();
    const {includeProject} = Object.assign({}, apis.postcat, propsApis);
    const confirmModal = useConfirmModal();
    return <Upload {...props} onChange={async ([file]) => {
        const content = await readJSONFile(file);
        if (!(content && content.hasOwnProperty('id') && content.hasOwnProperty('name'))) {
            message.error('文件格式不正确');
            return;
        }

        confirmModal({
            danger: true,
            type: "confirm",
            title: "确定要执行项目导入？",
            message: "执行导入后将覆盖该项目的所有数据",
            onOk: async () => {
                const {data: resData} = await ajax(Object.assign({}, includeProject, {
                    data: {
                        projectId, data: content
                    }
                }));

                if (resData.code !== 0) {
                    return;
                }

                message.success('导入项目成功');
                onSuccess && onSuccess();
            }
        });
    }}/>
});

export default IncludeProjectButton;
