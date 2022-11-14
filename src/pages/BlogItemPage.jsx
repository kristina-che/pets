import TopMenuBlock from '../components/TopMenuBlock';
import CommentItem from '../components/CommentItem';

const BlogItemPage= (props) => {

let onChangeValue = (e) => {
    let text = e.target.value;
    props.changeValueContainer(text);
}

let onAddPost = () => {
    props.addPost();
}

let commentsElements = props.state.commentsInfo.map((el) => <CommentItem id={el.id} comment={el.comment} likeCount={el.likeCount} /> );
    return(
        <div className="wrapper">
            <div className="content">
                <TopMenuBlock />
            </div>
            <div className="content">
                <h1>Blog</h1>
                text Blog
                <div className="commentBlock">
                    {commentsElements}
                    <div>
                        <textarea onChange={onChangeValue} value={props.state.newComment}></textarea>
                        <div>
                            <button onClick={onAddPost}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItemPage;