import {createWithRemoteLoader} from '@kne/remote-loader';
import style from './style.module.scss';
import {Breadcrumb, Space} from "antd";
import {useBaseUrl, useProps} from '../../commons/context';
import {useNavigate, useParams, Routes, Route, Navigate} from "react-router-dom";
import Api from './Api';
import Env from '@components/Env';
import Setting from './Setting';
import Fetch from '@kne/react-fetch';

const MainPage = createWithRemoteLoader({
    modules: ['components-core:Menu', 'components-core:Icon', 'components-core:Global@usePreset']
})(({remoteModules, baseUrl: propsBaseUrl, ...props}) => {
    const [Menu, Icon, usePreset] = remoteModules;
    const baseUrl = useBaseUrl(propsBaseUrl);
    const {apis: propsApis} = useProps();
    const navigate = useNavigate();
    const params = useParams();
    const {apis} = usePreset();

    const {getProjectDetail} = Object.assign({}, apis.postcat, propsApis);

    return <Fetch {...Object.assign({}, getProjectDetail)} params={{id: params.id}} render={({data}) => {
        const titleLeftExtra = <Breadcrumb className={style['header']}
                                           items={[{
                                               title: (<Space
                                                   size={4}
                                                   onClick={() => {
                                                       navigate(baseUrl);
                                                   }}
                                               >
                                                   <Icon type="icon-fanhui"/>
                                                   <span>返回</span>
                                               </Space>),
                                           }, {
                                               title: data.name,
                                           },]}
        />;

        const menu = <Menu items={[{
            path: `${baseUrl}/${data.id}/api`, label: "API", iconType: "icon-woshoudaode"
        }, {
            path: `${baseUrl}/${data.id}/env`, label: "环境", iconType: "icon-fujian"
        }, {
            path: `${baseUrl}/${data.id}/setting`, label: "设置", iconType: "icon-shezhi"
        }]}/>;

        return <Routes>
            <Route path="api" element={<Api {...props} data={data} menu={menu}
                                            titleLeftExtra={titleLeftExtra}/>}/>
            <Route path="env" element={<Env {...props} data={data} menu={menu}
                                            titleLeftExtra={titleLeftExtra}/>}/>
            <Route path="setting"
                   element={<Setting {...props} data={data} apis={propsApis} menu={menu}
                                     titleLeftExtra={titleLeftExtra}/>}/>
            <Route path="*" element={<Navigate to={`${baseUrl}/${data.id}/api`} replace/>}/>
        </Routes>;
    }}/>;
});

export default MainPage;
