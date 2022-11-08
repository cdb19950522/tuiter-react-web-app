

import React from "react";
import {updateTuitThunk} from "../../service/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStatus = ({tuit}) => {
    const dispatch = useDispatch();
    return(
        <div className="row mt-2">
            <div className="col text-secondary"><i className="bi bi-chat-dots"></i> &nbsp; {tuit.replies}</div>
            <div className="col text-secondary"><i className="bi bi-arrow-down-up"></i> &nbsp; {tuit.retuits}</div>
            <div className="col text-secondary">

                <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))}
                   className="bi bi-heart-fill me-2 text-danger"></i>
                {tuit.likes}
            </div>

            <div className="col text-secondary"><i className="bi bi-box-arrow-up"></i></div>
        </div>
    );
};
export default TuitStatus;

