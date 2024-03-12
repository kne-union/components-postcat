import {createWithRemoteLoader} from "@kne/remote-loader";
import {useNavigate, useLocation} from 'react-router-dom';
import {useRef} from 'react';
import {Space, Button, App} from "antd";
import getColumns from './getColumns';
import FormInner from './FormInner';
import {useProps} from '../../commons/context';

const Project = createWithRemoteLoader({
    modules: ['components-core:Layout@TablePage', 'components-core:Global@usePreset', 'FormInfo@useFormModal']
})(({remoteModules, ...props}) => {
    const [TablePage, usePreset, useFormModal] = remoteModules;
    const {apis: propsApis} = useProps();
    const {ajax, apis} = usePreset();
    const formModal = useFormModal();
    const {getProjectList, doAddProject, doEditProject, doDeleteProject} = Object.assign({}, apis.postcat, propsApis);
    const {message} = App.useApp();
    const ref = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    return <TablePage {...Object.assign({}, getProjectList)} ref={ref} name="env" page={{
        ...props, title: "项目", titleExtra: <Space>
            <Button type="primary" onClick={() => {
                const formModalApi = formModal({
                    title: "添加项目", size: 'small', formProps: {
                        onSubmit: async (formData) => {
                            const {data: resData} = await ajax(Object.assign({}, doAddProject, {
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
            children: '查看', onClick: () => {
                navigate(`${location.pathname}/${item.id}`)
            }
        }, {
            onClick: () => {
                const formModalApi = formModal({
                    title: "编辑项目", size: 'small', formProps: {
                        data: item, onSubmit: async (formData) => {
                            const {data: resData} = await ajax(Object.assign({}, doEditProject, {
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
                const {data: resData} = await ajax(Object.assign({}, doDeleteProject, {
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

export default Project;
