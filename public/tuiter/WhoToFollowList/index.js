import WhoToFollowList from "./WhoToFollowListItem.js";

const WhoToFollow = () => {
    return(`
       <ul class="list-group">
         <li class="list-group-item">
                        <span class="fw-bolder">Who to follow</span>
                    </li>
             ${WhoToFollowList()}
       </ul>
    
     `);
    }

//const init = () =>{
//    $('#test2').append(WhoToFollow());
//}
//$(init)
export default WhoToFollow;


