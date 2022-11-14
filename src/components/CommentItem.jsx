
const CommentItem = (props) => {
    return(

        <div className="commentItem">
            <p>{props.comment}</p>
            <p>Like: {props.likeCount}</p>
        </div>


    )
}

export default CommentItem;