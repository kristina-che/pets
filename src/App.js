import './style/font-awesome.min.css';
import './style/App.css';
import {BrowserRouter} from "react-router-dom";
import RoutesComponent from './components/RoutesComponent';
import StoreContext from './StoreContext';


function App(props) {
    return (<RoutesComponent />);
}


export default App;
