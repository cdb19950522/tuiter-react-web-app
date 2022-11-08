import React, {useEffect} from "react";
import PostItem from "./post-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../service/tuits-thunks";

const PostList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)

    useEffect(() => {
        const dispatch = useDispatch();
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(post =>
                                   <PostItem key={post._id}
                                      post={post}/> )
            }
        </ul>
    );
};
export default PostList;

