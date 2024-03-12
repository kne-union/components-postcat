import {createWithRemoteLoader} from '@kne/remote-loader';
import OpenAPIDisplay from '@components/OpenAPIDisplay';
import {App} from 'antd';
import {useProps} from '../../commons/context';
import readJSONFile from './readJSONFile';
import isPlainObject from 'lodash/isPlainObject';
import Fetch from '@kne/react-fetch';
import merge from 'lodash/merge';

const IncludeApisButton = createWithRemoteLoader({
    modules: ['components-core:Common@InputFileButton', 'components-core:Modal@useModal', 'components-core:Global@usePreset']
})(({remoteModules, projectId, onSuccess, ...props}) => {
    const [Upload, useModal, usePreset] = remoteModules;
    const modal = useModal();
    const {ajax, apis} = usePreset();
    const {message} = App.useApp();
    const {apis: propsApis} = useProps();

    const {getOpenApiDoc, doAddOpenApiDoc, doEditOpenApiDoc} = Object.assign({}, apis.postcat, propsApis);

    return <Fetch {...Object.assign({}, getOpenApiDoc)} params={{id: projectId}} render={({data}) => {
        const needMerge = data?.content && data.content.paths && Object.keys(data.content.paths).length > 0;


        return <Upload {...props} onChange={async ([file]) => {
            const content = await readJSONFile(file);
            if (!(content && isPlainObject(content.paths) && Object.keys(content.paths).length > 0)) {
                message.error('文件格式不正确');
                return;
            }
            modal({
                title: '预览', size: 'large', children: <OpenAPIDisplay data={content}/>, footerButtons: needMerge ? [{
                    children: '取消'
                }, {
                    type: 'primary', children: '覆盖', onClick: () => ajax(Object.assign({}, doEditOpenApiDoc, {
                        data: {
                            content, projectId
                        }
                    })).then(({data: resData}) => {
                        if (resData.code === 0) {
                            message.success('API文档覆盖更新成功');
                            onSuccess && onSuccess();
                        }
                    })
                }, {
                    type: 'primary', children: '合并', onClick: () => ajax(Object.assign({}, doEditOpenApiDoc, {
                        data: merge({}, data, {content})
                    })).then(({data: resData}) => {
                        if (resData.code === 0) {
                            message.success('API文档合并成功');
                            onSuccess && onSuccess();
                        }
                    })
                }] : [{
                    children: '取消'
                }, {
                    type: 'primary',
                    children: '导入',
                    onClick: () => ajax(Object.assign({}, doAddOpenApiDoc, {data: Object.assign({}, {content}, {projectId})})).then(({data: resData}) => {
                        if (resData.code === 0) {
                            message.success('API文档导入成功');
                            onSuccess && onSuccess();
                        }
                    })
                }]
            });
        }}/>
    }}/>;
});

export default IncludeApisButton;
