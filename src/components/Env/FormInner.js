import {createWithRemoteLoader} from '@kne/remote-loader';

const FormInner = createWithRemoteLoader({
    modules: ['components-core:FormInfo']
})(({remoteModules}) => {
    const [FormInfo] = remoteModules;
    const {TableList} = FormInfo;
    const {Input, TextArea} = FormInfo.fields;
    return <>
        <FormInfo column={1} list={[<Input name="name" label="名称" rule="REQ LEN-0-50"/>,
            <Input name="host" label="HOST" rule="LEN-0-500"/>, <TextArea name="description" label="描述"/>]}/>
        <TableList defaultLength={0}
                   name="variable"
                   title="环境变量"
                   list={[<Input name="name" label="名称" rule="REQ LEN-0-50"/>,
                       <Input name="arg" label="参数" rule="REQ LEN-0-50"/>,
                       <Input name="description" label="描述" rule="LEN-0-50"/>]}
        />
    </>
});

export default FormInner;
