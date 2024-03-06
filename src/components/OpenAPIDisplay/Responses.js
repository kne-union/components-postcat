import {createWithRemoteLoader} from "@kne/remote-loader";
import {Card} from 'antd';
import style from "./style.module.scss";
import get from 'lodash/get';
import SchemaTable from './SchemaTable';

const Responses = createWithRemoteLoader({
    modules: ["components-core:InfoPage.Collapse"]
})(({remoteModules, data}) => {
    const [Collapse] = remoteModules;
    return <Card title="Responses" size="small" type="inner" className={style["collapse-wrapper"]}>
        {<Collapse defaultActiveKey={get(data, [0, 'statusCode'])}
                   items={data.map(({statusCode, description, content}) => {
                       return {
                           key: statusCode,
                           label: `${statusCode} ${description}`,
                           children: content.map(({type, schema}) => {
                               return <SchemaTable label={type} key={type} data={schema}/>;
                           })
                       };
                   })}/>}

    </Card>
});

export default Responses;
