import PostList from "./PostList.js";

const PostItems = () => {

    return(`
        <ul class="list-group">
             ${PostList()}
        </ul>
    
     `);
}
export default PostItems;