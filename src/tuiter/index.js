import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

import {Route, Routes} from "react-router-dom";
import HomeComponent from "./home";
import ExploreReactComponent from "./explore";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import ProfileComponent from "./profile";
import ProfileReducer from "./reducers/profile-reducer";
import EditProfileComponent from "./edit-profile";
const store = configureStore({reducer: {who: whoReducer,tuits: tuitsReducer, profile: ProfileReducer}})
function Tuiter() {
    return(
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>

                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreReactComponent/>}/>
                    <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                </Routes>

            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    );
}
export default Tuiter

