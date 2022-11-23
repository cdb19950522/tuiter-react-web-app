import post from "../PostSummaryList/posts.js";

const PostSummaryItem = () =>{
    return(`
             ${
        post.map(item => {
            return(listItem(item));
        }).join('')
    }
   `);
}


const listItem = (item) =>{
    return (`
                      <li class="list-group-item">
                        <div class="row">
                            <div class="col-8">
                                <div class="text-secondary">
                                   ${item.topic}
                                </div>
                                <div>
                                    <span class="fw-bolder">${item.userName}</span>
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span class="text-secondary">${item.time}</span>
                                </div>
                                <div class="fw-bolder">
                                   ${item.title}
                                </div>
                            </div>
                            <div class="col-4">
                                <img class="float-end" src="${item.image}" height="100px">
                            </div>
                        </div>
                    </li>
    `)
}
export default PostSummaryItem;