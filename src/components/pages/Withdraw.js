import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { withdraw } from '../../actions';

const Withdraw = () => {
    const [ money, setMoney ] = useState("");
    const currentBalance = useSelector( state => state.BalanceReducer.balance)
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(withdraw(money));
    }
    return (  
        <div className="ui container">
            <h3> current balance: { currentBalance } </h3>
            <form onSubmit={onFormSubmit}>
                <input type="text" value={money} onChange={e=>setMoney(e.target.value)}></input>
                { currentBalance > 0 ? <button> withdraw amount </button> : <button disabled={true}> not enough funds </button> } 
            </form>
        </div>
    );
}
 
export default Withdraw;