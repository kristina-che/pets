import TopMenuBlock from './TopMenuBlock';

const HeaderBlock = (props) => {
    return(
        <div className="top-bg">
            <div className="overlay-bg"></div>
            <div className="content">
                <TopMenuBlock />
            </div>
        </div>
    )
}

export default HeaderBlock;