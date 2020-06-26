import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import BalanceReducer from "./reducers/BalanceReducer";
import LoanReducer from './reducers/LoanReducer';
import thunk from 'redux-thunk';


const store = createStore(combineReducers({
    BalanceReducer,
    LoanReducer,
}), applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);