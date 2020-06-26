import React, { useState } from 'react'
import { useSelector, useDispatch  } from "react-redux";
import { depositAsync } from '../../actions';
// import { deposit } from "../actions/index";



const Deposit = () => {
    const [ money, setMoney ] = useState("");
    const currentBalance = useSelector( state => state.BalanceReducer.balance);
    const isLoading = useSelector( state => state.BalanceReducer.loading);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        // dispatch(deposit(+money));
        // setTimeout(()=>dispatch(deposit(+money)),3000);
        dispatch(depositAsync(+money));
    }
    
    return isLoading ? <h3> saving...</h3> 
    :(  
        <div className="ui container">
            <h3> current balance: { currentBalance } </h3>
            <form onSubmit={onFormSubmit}>
                <input type="text" value={money} onChange={e=>setMoney(e.target.value)}></input>
                <button>
                    deposit amount 
                </button>
            </form>
           
        </div>
    );
}
 
export default Deposit;