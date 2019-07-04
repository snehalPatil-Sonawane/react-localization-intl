import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./index.css";
const MainApp = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
ReactDOM.render(<MainApp />, document.getElementById('root'));
