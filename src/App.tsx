import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from './store/index'

function App() {

    const dispatch = useDispatch();

    const {insertMoney, deleteMoney, alterMoney} = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state: State) => state.bank);

    return (
        <div className="App">
            <h1>{state}</h1>
            <button onClick={() => insertMoney(1000)}>Insert</button>
            <button onClick={() => deleteMoney(500)}>Delete</button>
            <button onClick={() => alterMoney()}>Alter</button>
        </div>
    );
}

export default App;
