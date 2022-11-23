import { createSlice } from "@reduxjs/toolkit";

const profiles = {
    firstName: 'Dingbang', lastName: 'Chen', handle: '@dchen',
    profilePicture: 'profile.jpeg', 	bannerPicture: 'banner.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',	dateOfBirth: 'May 22, 1995',	dateJoined: 'April 2009',
    followingCount: 340,	followersCount: 223, tweets: 6334, name: 'Dingbang Chen'
}

const profileSlice = createSlice({
                                 name: "profile",
                                 initialState: profiles,
                                     reducers:{
                                         editProfileAction(state, action) {
                                            return state ={
                                                ...state,
                                                bio: action.payload.bio,
                                                name: action.payload.name,
                                                website:action.payload.website,
                                                location: action.payload.location,
                                                dateOfBirth: action.payload.dateOfBirth
                                            }
                                         }

                                    }
                                 });
export const {editProfileAction} = profileSlice.actions
export default profileSlice.reducer;
