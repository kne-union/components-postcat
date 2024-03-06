import {createWithRemoteLoader} from "@kne/remote-loader";
import {useRef} from 'react';
import {Space, Button, App} from "antd";
import getColumns from './getColumns';
import FormInner from './FormInner';

const Env = createWithRemoteLoader({
    modules: ['components-core:Layout@TablePage', 'components-core:Global@usePreset', 'FormInfo@useFormModal']
})(({remoteModules}) => {
    const [TablePage, usePreset, useFormModal] = remoteModules;
    const {ajax, apis} = usePreset();
    const formModal = useFormModal();
    const {message} = App.useApp();
    const ref = useRef();
    return <TablePage {...apis.postcat.getEnvList} ref={ref} name="env" page={{
        title: "环境", titleExtra: <Space>
            <Button type="primary" onClick={() => {
                const formModalApi = formModal({
                    title: "添加环境", size: 'small', formProps: {
                        onSubmit: async (formData) => {
                            const {data: resData} = await ajax(Object.assign({}, apis.postcat.doAddEnv, {
                                data: formData
                            }));

                            if (resData.code !== 0) {
                                return;
                            }
                            message.success('添加成功');
                            formModalApi.close();
                            ref.current.reload();
                        }
                    }, children: <FormInner/>
                });
            }}>添加</Button>
        </Space>
    }} columns={[...getColumns(), {
        name: "options", title: "操作", type: "options", fixed: "right", valueOf: (item) => [{
            onClick: () => {
                const formModalApi = formModal({
                    title: "编辑环境", size: 'small', formProps: {
                        data: item, onSubmit: async (formData) => {
                            const {data: resData} = await ajax(Object.assign({}, apis.postcat.doEditEnv, {
                                data: Object.assign({}, formData, {id: item.id})
                            }));
                            if (resData.code !== 0) {
                                return;
                            }

                            message.success('修改成功');
                            formModalApi.close();
                            ref.current.reload();
                        }
                    }, children: <FormInner/>
                });
            }, children: "编辑"
        }, {
            onClick: async () => {
                const {data: resData} = await ajax(Object.assign({}, apis.postcat.doDeleteEnv, {
                    data: {id: item.id}
                }));
                if (resData.code !== 0) {
                    return;
                }

                message.success('删除成功');
                ref.current.reload();
            }, children: "删除"
        }]
    }]}/>;
});

export default Env;
