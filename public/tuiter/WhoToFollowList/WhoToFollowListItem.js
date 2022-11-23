
import who from "./who.js"
const WhoToFollowList = () =>{
    return(`
             ${
        who.map(item => {
            return(listItem(item));
        }).join('')
    }
   `);
}

const listItem = (item) =>{
    return (`
        <li class="list-group-item">
            <div class="row">
                            <div class="col-2">
                                <img src="${item.avatarIcon}"  class="rounded-circle mt-2" height="35px">
                            </div>
                            <div class="col-8">

                                <div class="fw-bolder text-white">
                                    <span>${item.userName}</span>
                                    <i class="fa-solid fa-circle-check"></i>
                                </div>

                                <div class="text-white">
                                    ${item.handle}
                                </div>
                            </div>
                            <div class="col-2">
                                <button class="btn-primary rounded-pill float-end pe-1 mt-2">Follow</button>
                            </div>
                        </div>
        </li>
    `)
}
export default WhoToFollowList;