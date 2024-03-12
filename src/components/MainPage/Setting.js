import {createWithRemoteLoader} from '@kne/remote-loader';
import {Button, List, Row, Col} from 'antd';
import IncludeApisButton from './IncludeApisButton';
import ExportApisButton from './ExportApisButton';
import ExportProjectButton from './ExportProjectButton';
import IncludeProjectButton from './IncludeProjectButton';
import style from './style.module.scss';
import {useNavigate} from "react-router-dom";
import {useBaseUrl} from "../../commons/context";

const Setting = createWithRemoteLoader({
    modules: ['components-core:Layout@Page', 'components-core:Global@usePreset']
})(({remoteModules, data, apis: propsApis, ...props}) => {
    const [Page, usePreset] = remoteModules;
    const {apis} = usePreset();
    const {doInclude, doDeleteProject} = Object.assign({}, apis.postcat, propsApis);
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
                    <Col><Button danger type="primary">删除项目</Button></Col>
                </Row>
            </List.Item>
        </List>
    </Page>;
});

export default Setting;
