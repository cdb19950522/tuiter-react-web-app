import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {editProfileAction} from "../reducers/profile-reducer";


const EditProfileScreen = () =>{
    const dispatch = useDispatch();

    const profile  = useSelector(state=> state.profile);
    let [name, setName] = useState(profile.name);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
    let navigate = useNavigate();
    const saveClickHandler = () => {
        const newProfile = {
            name: name,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        }
        navigate('/tuiter/profile');
        dispatch(editProfileAction(newProfile));

    }
    return(
        <div>
            <div className="row">
                <div className="col-1 pt-2" style={{fontSize:18}}>
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg"></i>
                    </Link>

                </div>
                <div className="col-9 pt-1">
                    <div className="align-content-center"  style={{fontSize:20}}> {profile.name} </div>
                </div>
                <div className="col-2 pt-1">
                    <button className="rounded-pill btn btn-dark "
                            onClick={saveClickHandler}>
                       Save
                    </button>
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
            <div className="pt-5"></div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputName" value={name} onChange={(event) => setName(event.target.value)}
                       placeholder="Name"/>
                    <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="pt-3"></div>
            <div className="form-floating">
                <textarea type="text" style={{height:100}}className="form-control " id="floatingInputBio" value={bio} onChange={(event) => setBio(event.target.value)}
                       placeholder="Bio"/>
                <label htmlFor="floatingInput">Bio</label>
            </div>
            <div className="pt-3"></div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputLocation" value={location} onChange={(event) => setLocation(event.target.value)}
                       placeholder="Location"/>
                <label htmlFor="floatingInput">Location</label>
            </div>
            <div className="pt-3"></div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputWebsite" value={website} onChange={(event) => setWebsite(event.target.value)}
                       placeholder="Website"/>
                <label htmlFor="floatingInput">Website</label>
            </div>
            <div className="pt-3"></div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputDateOfBirth" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)}
                       placeholder="DateOfBirth"/>
                <label htmlFor="floatingInput">DateOfBirth</label>
            </div>

        </div>
    )
}

export default EditProfileScreen;