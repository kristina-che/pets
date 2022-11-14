import TopMenuBlock from '../components/TopMenuBlock';
import Pet from '../components/Pet';
import CommentItem from '../components/CommentItem';


const PetPage = (props) => {

    let onUpdateCommentPet = (e) => {
        let textPetComment = e.target.value;
        props.changeValueContainer(textPetComment);
    }
    let onAddCommentPet = () => {
        props.addPost();
    }

    let elementsComments = props.state.commentsInfoPet.map((el) => <CommentItem id={el.id} comment={el.comment} likeCount={el.likeCount} />)

    return(
        <div className="wrapper">
            <div className="content">
                <TopMenuBlock />
            </div>
            <div className="content">
                <h1>Pet</h1>
                <div className="items">
                    <Pet name="Bars" age="20" />
                </div>
                <div>
                    {elementsComments}
                </div>
                <div>
                    <textarea onChange={onUpdateCommentPet} value={props.state.newCommentPet}></textarea>
                    <div><button onClick={onAddCommentPet}>Add</button></div>
                </div>
            </div>
        </div>
    )
}

export default PetPage;