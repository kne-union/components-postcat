import {createWithRemoteLoader} from "@kne/remote-loader";
import style from "./style.module.scss";

const DataTable = createWithRemoteLoader({
    modules: ["components-core:Table", "components-core:InfoPage.Collapse"]
})(({remoteModules, label, data, ...props}) => {
    const [Table, Collapse] = remoteModules;
    return <Collapse className={style["collapse-wrapper"]}
                     defaultActiveKey={['current']} items={[{
        label, key: 'current', children: <Table {...props} sticky={false} dataSource={data}/>
    }]}/>
});

export default DataTable;
