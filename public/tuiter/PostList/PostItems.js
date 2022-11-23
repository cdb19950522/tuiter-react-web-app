const listItem = (post) =>{
    return (`
                      <li class="list-group-item bg-black">
                        <div class="row">
                            <div class="col-2">
                                <img src="${post.avatar}" class="rounded-circle align-content-center ps-2" style="height: 50px">
                            </div>
                            <div class="col-10">
                                <span class="fw-bolder">${post.userName}</span>
                                <i class="fa-solid fa-circle-check"></i>
                                <span class="text-secondary">${post.handle} - ${post.time}</span>
                                </br>
                                <span>${post.title}</span>
                                <div >
                                    <img class=" rounded-top" src="${post.image}" style="width: 100%">   
                                    <div class="${displayOrNot(post.contextTitle, post.context, post.source)} rounded-corners-bottom list-group-item bg-black "  >   
                                        <span class="text-white ms-1 me-1">${post.contextTitle}</span> 
                                        </br>
                                        <span class="text-secondary ms-1 me-1">${post.context}</span>
                                        </br>
                                        <i class="fa-solid fa-link text-secondary ms-1 me-1"></i>
                                        <span class="text-secondary">${post.source}</span> 
                                    </div>                    
                                </div>
                                <div class="row mt-2">
                                    <div class="col text-secondary"><i class="fa-solid fa-comment"></i> &nbsp; ${post.comment}</div>
                                    <div class="col text-secondary"><i class="fa-solid fa-arrows-retweet"></i> &nbsp; ${post.repost}</div>
                                    <div class="col text-secondary"><i class="fa-solid fa-heart"></i> &nbsp; ${post.likes}</div>
                                    <div class="col text-secondary"><i class="fa-solid fa-up-right-from-square"></i></div>
                                </div>
                                
                            </div>
                        </div>
                      </li>  
    `)

}
const displayOrNot = (contextTitle, context, source)=>{
    if(context===""&& source ===""&& contextTitle === ""){
        return "d-none"
    }
    return "";

}

export default listItem;