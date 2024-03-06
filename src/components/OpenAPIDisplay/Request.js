import style from "./style.module.scss";
import Parameters from "./Parameters";
import SchemaTable from './SchemaTable';
import {Card} from 'antd';

const Request = ({data}) => {
    return <Card title="Request" size="small" type="inner" className={style["collapse-wrapper"]}>
        {data.headers && data.headers.length > 0 &&
            <Parameters data={data.headers} rowKey="name" label="Header Parameters"/>}
        {data.query && data.query.length > 0 && <Parameters data={data.query} rowKey="name" label="Query Parameters"/>}
        {data.requestBody && data.requestBody.length > 0 &&
            <Card title="Request Body" size="small" type="inner" className={style["collapse-wrapper"]} bordered={false}>
                {data.requestBody.map((item) => {
                    return <SchemaTable label={`content-type:${item['content-type']}`} key={item['content-type']}
                                        data={item.schema}/>;
                })}
            </Card>}
    </Card>;
};

export default Request;
