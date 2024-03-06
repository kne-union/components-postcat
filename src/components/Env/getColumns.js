const getColumns = () => [{
    name: "label", title: "名称", type: "mainInfo", hover: false, primary: false, fixed: "left"
}, {
    name: "name", title: "KEY", type: "mainInfo", hover: false, primary: false, fixed: "left"
}, {
    name: "description", title: "描述", type: "description", ellipsis: true
}];

export default getColumns;
