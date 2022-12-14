import React, {useEffect} from "react";
import PostItem from "./post-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../service/tuits-thunks";

const PostList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

