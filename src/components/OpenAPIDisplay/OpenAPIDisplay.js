import {createWithRemoteLoader} from '@kne/remote-loader';
import {useMemo, useState} from 'react';
import uniq from 'lodash/uniq';
import {Row, Col, Space, Badge} from 'antd';
import style from './style.module.scss';
import classnames from "classnames";
import get from 'lodash/get';
import parseOpenApiData from './parseOpenApiData';
import Request from "./Request";
import Responses from "./Responses";

export const OpenAPIMenu = createWithRemoteLoader({
    modules: ['components-core:Menu']
})(({remoteModules, data, ...props}) => {
    const [Menu] = remoteModules;
    const menuList = useMemo(() => {
        const output = [], mapping = {};
        Object.keys(data.paths).forEach((path) => {
            const api = Object.assign({}, data.paths[path])
            Object.keys(api).forEach((method) => {
                const item = Object.assign({}, api[method]);
                const tags = item.tags || [];
                output.push(...tags);
                tags.forEach((tag) => {
                    if (!mapping[tag]) {
                        mapping[tag] = [];
                    }
                    mapping[tag].push({
                        label: <>
                            <span
                                className={classnames(style['request-method'], style[`request-method-${method}`])}>{method.toUpperCase()}</span>
                            <span className={style['menu-url']}>{path}</span>
                        </>, key: `${path}-${method.toLowerCase()}`, data: {
                            path, method
                        }
                    });
                });
            });
        });
        return uniq(output).map((name) => {
            return {
                label: name, key: name, iconType: "icon-wenjianjia", children: mapping[name]
            }
        });
    }, [data]);

    return <Menu {...props} items={menuList}/>;
});

const OpenAPIHeader = createWithRemoteLoader({
    modules: []
})(({data}) => {
    return <Row className={style['header-info']} justify="space-between">
        <Col>{data.info.title}</Col>
        <Col>版本:{data.info.version}</Col>
    </Row>
});

const OpenAPIDisplay = createWithRemoteLoader({
    modules: ['components-core:Menu']
})(({remoteModules, data: originData}) => {
    const data = useMemo(() => {
        return parseOpenApiData(originData);
    }, [originData]);
    const defaultKey = useMemo(() => {
        const paths = Object.assign({}, data.paths);
        const currentPath = Object.keys(paths)[0];
        if (!currentPath) {
            return null;
        }
        const currentItem = Object.assign({}, paths[currentPath]);
        const method = Object.keys(currentItem)[0];
        if (!method) {
            return null;
        }
        return {path: currentPath, method};
    }, [data]);
    const [currentApi, onChange] = useState(defaultKey);
    return <Row gutter={10}>
        <Col span={4}>
            <OpenAPIMenu data={data} currentKey={`${currentApi.path}-${currentApi.method.toLowerCase()}`}
                         onChange={(item, {data}) => {
                             onChange(data);
                         }}/>
        </Col>
        <Col span={20}>
            <OpenAPIHeader data={data}/>
            <OpenAPIDisplayItem data={data} api={currentApi}/>
        </Col>
    </Row>
});

export const OpenAPIDisplayItem = ({data: originData, api}) => {
    const data = get(originData, ['paths', api.path, api.method]);
    return <Space direction="vertical">
        <Space className={style['path-line']}>
            <Badge status={data.deprecated ? 'error' : 'success'}/>
            <div
                className={classnames(style['request-method'], style[`request-method-${api.method}`])}>{api.method.toUpperCase()}</div>
            <div className={style['path-line-url']}>{api.path}</div>
        </Space>
        <div className={style['api-description']}>
            <div>{data.summary}</div>
            <div>{data.description}</div>
        </div>
        <Request data={{headers: data.headers, query: data.query, requestBody: data.requestBody}}/>
        <Responses data={data.responses}/>
    </Space>;
};

export default OpenAPIDisplay;
