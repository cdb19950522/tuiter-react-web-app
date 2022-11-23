import posts from "../PostList/Posts.js";
import listItem from "./PostItems.js";

const PostList = () =>{
    return(`
             ${
        posts.map(item => {
            return(listItem(item));
        }).join('')
    }
   `);
}
export default PostList;