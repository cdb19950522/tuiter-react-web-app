

import React from "react";

const TuitStatus = ({replies, retuits, likes, liked}) => {
    return(
        <div className="row mt-2">
            <div className="col text-secondary"><i className="bi bi-chat-dots"></i> &nbsp; {replies}</div>
            <div className="col text-secondary"><i className="bi bi-arrow-down-up"></i> &nbsp; {retuits}</div>
            {
                !liked && <div className="col text-secondary"><i className="bi bi-heart"></i> &nbsp; {likes}</div>
            }
            {
                liked && <div className="col text-secondary "><i className="bi bi-heart text-danger"></i> &nbsp; {likes}</div>
            }

            <div className="col text-secondary"><i className="bi bi-box-arrow-up"></i></div>
        </div>
    );
};
export default TuitStatus;

