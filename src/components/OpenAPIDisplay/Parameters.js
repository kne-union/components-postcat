import DataTable from "./DataTable";
import getParameterColumns from "./getParameterColumns";

const Parameters = ({data, ...props}) => {
    return <DataTable {...props} data={data} columns={getParameterColumns()}/>
};

export default Parameters;
