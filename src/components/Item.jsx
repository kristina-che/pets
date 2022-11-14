import {Link} from "react-router-dom";

const Item = (props) => {

    const flButton = props.follow ? <button onClick={() => {props.followCreator(props.id)}} className="fl follow">Follow</button> :
        <button onClick={() => {props.unfollowCreator(props.id)}} className="fl unfollow">Unfollow</button>

    const imgNone = props.img ? props.img : 'https://avatars.mds.yandex.net/i?id=918333b1b75ca0e9afd463d9626a9a38-5232745-images-thumbs&n=13' ;

    return(
      <>
         <Link to={'/pets/'+ props.id} className="item">
             <div class="overlay">
                 <div class="text">More</div>
             </div>
            <div className="wrapImg">
                <img src={imgNone}/>
            </div>
            <div className="wrapItem">
                <h4>Name: <span>{props.name}</span></h4>
                <p><b>Age:</b> {props.age}</p>
                <p><b>Stylization:</b> {props.stylization}</p>
                <div class="descriptionBlock">
                    <p>{props.description}</p>
                </div>

            </div>
        </Link>
      <div>{flButton}</div>
     </>
    )
}

export default Item;