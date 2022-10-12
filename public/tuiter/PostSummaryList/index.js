import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
       <ul class="list-group">
             ${PostSummaryItem()}
       </ul>
    
     `);
}
export default PostSummaryList;