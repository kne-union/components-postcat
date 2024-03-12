const getColumns = () => [{
    name: "name", title: "名称", type: "mainInfo", hover: false, primary: false, fixed: "left"
}, {
    name: "host", title: "HOST", type: "other", ellipsis: true
}, {
    name: "description", title: "描述", type: "description", ellipsis: true
}];

export default getColumns;
