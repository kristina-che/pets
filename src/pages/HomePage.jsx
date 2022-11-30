import HeaderBlock from '../components/HeaderBlock';
import ProfileStatus from '../components/ProfileStatus';


const HomePage = () => {
    return(
        <div>
            <HeaderBlock />
            <div className="wrapper">
                <div className="content">
                <h1>HOME page</h1>
                    <ProfileStatus status="Hello my Friends!"/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;