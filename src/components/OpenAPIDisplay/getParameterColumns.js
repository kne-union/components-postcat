const getParameterColumns = () => {
    return [{name: 'name', title: '参数名', type: 'mainInfo', hover: false, primary: false, fixed: 'left'}, {
        name: 'type', title: '类型', type: 'other', valueOf: (item) => {
            return `${item.schema.type}${item.schema.format ? `<${item.schema.format}>` : ''}`
        }
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

export default getParameterColumns;
