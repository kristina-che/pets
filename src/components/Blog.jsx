import {Link} from "react-router-dom";

const Blog = (props) => {
    const imgNone = props.img ? props.img : 'https://avatars.mds.yandex.net/i?id=918333b1b75ca0e9afd463d9626a9a38-5232745-images-thumbs&n=13' ;
    return(

        <div className="blogItem">
            <img src={imgNone}/>

            <Link to={'/blog/'+ props.id} className="blogItem">{props.title} </Link>
            <p>{props.theme}</p>
            <p>{props.date}</p>
            <p>{props.views}</p>
            <p>{props.commentsCount}</p>
            <div className="descriptionBlock">
                <p>{props.text}</p>
            </div>
        </div>

    )
}

export default Blog;