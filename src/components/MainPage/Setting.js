import {createWithRemoteLoader} from '@kne/remote-loader';
import {Button, List, Row, Col, message} from 'antd';
import IncludeApisButton from './IncludeApisButton';
import ExportApisButton from './ExportApisButton';
import ExportProjectButton from './ExportProjectButton';
import IncludeProjectButton from './IncludeProjectButton';
import style from './style.module.scss';
import {useNavigate} from "react-router-dom";
import {useBaseUrl} from "../../commons/context";
import project from "../Project";

const Setting = createWithRemoteLoader({
    modules: ['components-core:Layout@Page', 'components-core:Global@usePreset', 'components-core:ConfirmButton']
})(({remoteModules, data, apis: propsApis, ...props}) => {
    const [Page, usePreset, ConfirmButton] = remoteModules;
    const {ajax, apis} = usePreset();
    const {doDeleteProject} = Object.assign({}, apis.postcat, propsApis);
    const baseUrl = useBaseUrl();
    const navigate = useNavigate();
    return <Page {...props}>
        <List header={<div>{data.name}</div>} bordered>
            <List.Item>
                <Row align="middle" gutter={10} className={style['setting-item']}>
                    <Col>导入项目</Col>
                    <Col flex='auto' className={style['setting-item-col']}>导入项目数据</Col>
                    <Col><IncludeProjectButton projectId={data.id} onSuccess={() => {
                        navigate(`${baseUrl}/${data.id}/api`);
                    }}>导入项目</IncludeProjectButton></Col>
                </Row>
            </List.Item>
            <List.Item>
                <Row align="middle" gutter={10} className={style['setting-item']}>
                    <Col>导出项目</Col>
                    <Col flex='auto' className={style['setting-item-col']}>导出当前项目数据</Col>
                    <Col><ExportProjectButton projectId={data.id}>导出项目</ExportProjectButton></Col>
                </Row>
            </List.Item>
            <List.Item>
                <Row align="middle" gutter={10} className={style['setting-item']}>
                    <Col>导入API</Col>
                    <Col flex='auto' className={style['setting-item-col']}>导入符合open api规范的api文档</Col>
                    <Col><IncludeApisButton projectId={data.id} onSuccess={() => {
                        navigate(`${baseUrl}/${data.id}/api`);
                    }}>导入API</IncludeApisButton></Col>
                </Row>
            </List.Item>
            <List.Item>
                <Row align="middle" gutter={10} className={style['setting-item']}>
                    <Col>导出API</Col>
                    <Col flex='auto' className={style['setting-item-col']}>导出当前项目的api为open api规范数据</Col>
                    <Col><ExportApisButton projectId={data.id}>导出API</ExportApisButton></Col>
                </Row>
            </List.Item>
            <List.Item>
                <Row align="middle" gutter={10} className={style['setting-item']}>
                    <Col>删除项目</Col>
                    <Col flex='auto' className={style['setting-item-col']}>删除当前项目</Col>
                    <Col><ConfirmButton danger type="primary" onClick={async () => {
                        const {data: resData} = await ajax(Object.assign({}, doDeleteProject, {data: {id: data.id}}));
                        if (resData.code === 0) {
                            message.success('删除项目成功');
                            navigate(baseUrl);
                        }
                    }}>删除项目</ConfirmButton></Col>
                </Row>
            </List.Item>
        </List>
    </Page>;
});

export default Setting;
