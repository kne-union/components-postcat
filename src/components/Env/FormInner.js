import {createWithRemoteLoader} from '@kne/remote-loader';

const FormInner = createWithRemoteLoader({
    modules: ['components-core:FormInfo']
})(({remoteModules}) => {
    const [FormInfo] = remoteModules;

    const {Input, TextArea} = FormInfo.fields;

    return <FormInfo column={1} list={[<Input name="label" label="名称" rule="REQ LEN-0-50"/>,
        <Input name="name" label="KEY" rule="REQ LEN-0-50"/>, <TextArea name="description" label="描述"/>]}/>
});

export default FormInner;
