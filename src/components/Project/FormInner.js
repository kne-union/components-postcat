import {createWithRemoteLoader} from '@kne/remote-loader';

const FormInner = createWithRemoteLoader({
    modules: ['components-core:FormInfo']
})(({remoteModules}) => {
    const [FormInfo] = remoteModules;

    const {Input, TextArea} = FormInfo.fields;

    return <FormInfo column={1} list={[<Input name="name" label="项目名" rule="REQ LEN-0-50"/>,
        <TextArea name="description" label="描述"/>]}/>
});

export default FormInner;
