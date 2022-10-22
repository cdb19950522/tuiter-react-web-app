import React from "react";

const PostItem = ({
    post = {
        "_id": "46346",
        "handle": "@elonmusk",
        "userName": "Elon Musk",
        "avatar": "../../images/elon.png",
        "time": "23h",
        "image": "../../images/space.jpg",
        "title": "Amazing show about @inspiration mission",
        "contextTitle":"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "context":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the all-civilian orbital space ...",
        "comment":"4.2K",
        "repost": "3.5K",
        "likes": "37.5K",
        "source": "netflix.com"
    }
                  }) =>{
    const show = post.contextTitle==="" && post.context === "" && post.source === "";
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                        <img  height={50} className="float-end rounded-3" src={require(`../../images/${post.avatar}`)}/>
                </div>
                <div className="col-10">
                    <span className="fw-bolder">{post.userName}</span>
                    &nbsp;
                    <i className="bi bi-check-circle-fill"></i>&nbsp;
                    <span className="text-secondary">{post.handle} - {post.time}</span>
                <div>{post.title}</div>
                <div>
                    <img  className=" rounded-top" style={{width:'100%'}}  src={require(`../../images/${post.image}`)}/>
                    {!show&&
                    <div className="rounded-corners-bottom list-group-item">
                            <span className="ms-1 me-1">{post.contextTitle}</span>
                        <span className="text-secondary ms-1 me-1">{post.context}</span>
                          <div> <i className="bi bi-link-45deg text-secondary"></i>
                              <span className="text-secondary">{post.source}</span>
                          </div>

                    </div>
                    }
            </div>
            <div className="row mt-2">
                <div className="col text-secondary"><i className="bi bi-chat-dots"></i> &nbsp; {post.comment}</div>
                <div className="col text-secondary"><i className="bi bi-arrow-down-up"></i> &nbsp; {post.repost}</div>
                <div className="col text-secondary"><i className="bi bi-heart"></i> &nbsp; {post.likes}</div>
                <div className="col text-secondary"><i className="bi bi-box-arrow-up"></i></div>
            </div>

                </div>
            </div>
        </li>
    );
}
export default PostItem;