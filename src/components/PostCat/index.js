import {Routes, Route, Navigate} from 'react-router-dom';
import {Provider} from '../../commons/context';
import Project from '@components/Project';
import MainPage from "@components/MainPage";

const PostCat = ({baseUrl, menuFixed, ...props}) => {
    return <Provider value={{baseUrl, ...props}}>
        <Routes>
            <Route index element={<Project menuFixed={menuFixed}/>}/>
            <Route path=":id" element={<MainPage menuFixed={menuFixed}/>}/>
            <Route path=":id/*" element={<MainPage menuFixed={menuFixed}/>}/>
            <Route path="*" element={<Navigate to={baseUrl}/>}/>
        </Routes>
    </Provider>;
};

PostCat.defaultProps = {
    baseUrl: '/'
};

export default PostCat;
