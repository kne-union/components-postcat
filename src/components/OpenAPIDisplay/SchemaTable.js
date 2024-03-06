import {transformSchemaToList} from './parseOpenApiData';
import getResponseColumns from "./getResponseColumns";
import DataTable from "./DataTable";

const SchemaTable = ({data, ...props}) => {
    return <DataTable {...props} data={transformSchemaToList(data)} columns={getResponseColumns()}/>;
};

export default SchemaTable;
