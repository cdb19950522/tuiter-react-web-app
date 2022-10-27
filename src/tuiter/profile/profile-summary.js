import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";

const ProfileSummary= () =>{
    const profile  = useSelector(state=> state.profile)
    const styleObj = {
        fontSize: 20,
        fontWeight: 'bold'
    }
    const smallerfont = {
        fontSize: 12,
    }
    return (<div>
            <div className="row">
                <div className="col-1 ps-2 pt-2" style={styleObj}>
                    <Link to="/tuiter/home">
                        <i className="bi bi-arrow-left"></i>
                    </Link>

                </div>
                <div className="col-11">
                    <div className="align-content-center" style={styleObj}> {profile.name}</div>
                    <div className="text-secondary" style={smallerfont}>{profile.tweets} tweets</div>
                </div>
            </div>
            <div className="position-relative pt-2">
                    <img className="w-100" alt="" style={{
                        height: 200
                    }} src={require(`../../images/${profile.bannerPicture}`)}/>

                    <img className="position-absolute rounded-circle " alt="" style={{
                        height: 100 ,width: 100, top:150, right: 430
                    }} src={require(`../../images/${profile.profilePicture}`)}/>


            </div>
            <div className="position-relative pt-5">
                <div className="align-content-center" style={styleObj}> {profile.name}
                    <Link to="/tuiter/edit-profile">
                        <button type="button" className="btn btn-light float-end pt-2">Edit Profile</button>
                    </Link>


                </div>

                <div className="text-secondary" style={smallerfont}>{profile.handle}</div>
            </div>
            <div className="pt-3 ">
                <span>{profile.bio}</span>
            </div>
            <div className="pt-2 text-secondary">
                <i className="bi bi-geo-alt"></i> {profile.location}
                <i className="bi bi-balloon ps-3"></i> Born {profile.dateOfBirth}
                <i className="bi bi-calendar ps-3"></i> Joined {profile.dateJoined}
            </div>
            <div className="pt-2">
                {profile.followingCount}
                <span className="text-secondary ps-2 pe-2">following</span>
                {profile.followersCount}
                <span className="text-secondary ps-2 pe-2">followers</span>
            </div>
        </div>)
}
export default ProfileSummary;