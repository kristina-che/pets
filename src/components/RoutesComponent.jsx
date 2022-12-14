import {Route, Routes} from "react-router-dom";
import PetPageContainer from '../pages/PetPageContainer';
import BlogPageContainer from '../pages/BlogPageContainer';
import BlogItemPageContainer from '../pages/BlogItemPageContainer';
import PetsPageContainer from '../pages/PetsPageContainer';
import UserPageContainer from '../pages/UserPageContainer';
import ProfilePageContainer from '../pages/ProfilePageContainer';
import LoginPage from '../pages/LoginPage';


import HomePage from '../pages/HomePage';

const RoutesComponent = () => {
    return(
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/pets" element={<PetsPageContainer />} />
            <Route path="/pets/:id" element={<PetPageContainer />} />
            <Route path="/charity" element={<UserPageContainer />} />
            <Route path="/charity/:id" element={<ProfilePageContainer />} />
            <Route path="/blog" element={<BlogPageContainer />} />
            <Route path="/blog/:id" element={<BlogItemPageContainer />} />

            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}

export default RoutesComponent;