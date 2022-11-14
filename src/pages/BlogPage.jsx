import TopMenuBlock from '../components/TopMenuBlock';
import Blog from "../components/Blog";

const BlogPage = (props) => {

    let BlogElement = props.state.blogInfo.map((el) =>
        <Blog id={el.id} theme={el.theme} title={el.title} img={el.img} date={el.date} commentsCount={el.commentsCount} text={el.text} />
    )

    return(
        <div className="wrapper">
            <div className="content">
                <TopMenuBlock />
            </div>
            <div className="content">
                <h1>Blog</h1>
                {BlogElement}
            </div>
        </div>
    )
}

export default BlogPage;