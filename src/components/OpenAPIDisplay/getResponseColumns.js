const getDocumentDataColumns = () => {
    return [{
        name: 'name', title: '字段名', type: 'mainInfo', hover: false, primary: false, fixed: 'left'
    }, {
        name: 'type', title: '类型', type: 'other'
    }, {
        name: 'required', title: '必填', type: 'singleRow', valueOf: (value, {name}) => {
            return value[name]?.toString();
        }
    }, {
        name: 'description', title: '说明', type: 'description'
    }, {
        name: 'example', title: '示例', type: 'description'
    }];
};

export default getDocumentDataColumns;
