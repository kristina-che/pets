import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();



// renderApp(store.state);
// store.subscribe(() => {
//     let state = store.getState();
//     renderApp(state)
// });

