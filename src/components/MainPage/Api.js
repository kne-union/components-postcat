import {createWithRemoteLoader} from '@kne/remote-loader';
import OpenAPIDisplay from '@components/OpenAPIDisplay';
import Fetch from '@kne/react-fetch';
import {useProps} from "../../commons/context";
import {Empty} from "antd";
import IncludeApisButton from './IncludeApisButton';

const Api = createWithRemoteLoader({
    modules: ['components-core:Global@usePreset', 'components-core:Layout@Page']
})(({remoteModules, data, ...props}) => {
    const [usePreset, Page] = remoteModules;
    const {apis} = usePreset();
    const {apis: propsApis} = useProps();
    const {getOpenApiDoc} = Object.assign({}, apis.postcat, propsApis);
    const projectId = data.id;
    return <Page {...props}>
        <Fetch {...Object.assign({}, getOpenApiDoc)} params={{id: projectId}} render={({data, reload}) => {
            if (!(data?.content && data.content.paths && Object.keys(data.content.paths).length > 0)) {
                return <Empty>
                    <IncludeApisButton accept={['.json']} projectId={projectId} onSuccess={() => {
                        reload();
                    }}>导入API</IncludeApisButton>
                </Empty>
            }
            return <OpenAPIDisplay data={data.content}/>;
        }}/>
    </Page>;
});

export default Api;
