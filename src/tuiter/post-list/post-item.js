import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../service/tuits-thunks";

const PostItem = ({
    post = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
                  }) =>{

    const deleteTuitHandler = (id) => {
        const dispatch = useDispatch();
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                        <img alt="" height={50} className="float-end rounded-circle" src={`../../images/${post.image}`}  />
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <span className="fw-bolder">{post.userName}</span>
                    &nbsp;
                    <i className="bi bi-check-circle-fill"></i>&nbsp;
                    <span className="text-secondary">{post.handle} - {post.time}</span>
                    <div>{post.tuit}</div>
                    <TuitStats tuit = {post}></TuitStats>

                </div>
            </div>
        </li>
    );
}
export default PostItem;