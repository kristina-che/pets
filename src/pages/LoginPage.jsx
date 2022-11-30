import TopMenuBlock from '../components/TopMenuBlock';


const LoginPage = (props) => {


    return(
        <div className="wrapper">
            <div className="content">
                <TopMenuBlock />
            </div>
            <div className="content">
                <h1>Login</h1>
                Чтобы видеть эту страничку, вы должны быть залогиненым пользователем
            </div>
        </div>
    )
}

export default LoginPage;