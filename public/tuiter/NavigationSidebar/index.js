import NavigationSidebarList from "./NavigationSidebarList.js";

const NavigationSidebar = (menu) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       ${NavigationSidebarList(menu)}
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

//const init = () =>{
//    $('#test').append(NavigationSidebar());
//}
export default NavigationSidebar;


