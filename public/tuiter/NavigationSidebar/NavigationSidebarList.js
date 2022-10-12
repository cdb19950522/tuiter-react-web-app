import NavigationSidebarItems from "./NavigationSidebarItems.js";

const NavigationSidebarList = (menu) => {
    return(`
             ${
        NavigationSidebarItems.map(item => {
            return(listItem(item, menu));
        }).join('')
    }
   `);
}

const listItem = (item, menu) =>{
    return (`
        <a class="list-group-item ${activeOrNot(item.title, menu)}" href="/">
        <i class="${item.icon}"></i> &nbsp;
        <span>${item.title}</span>
        </a>
    `)
}

const activeOrNot =(str, menu) =>{
    if(str === menu){
        return "active";
    }
    return "";
}
export default NavigationSidebarList;

