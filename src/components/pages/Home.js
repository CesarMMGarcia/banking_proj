import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loan,deposit } from '../../actions';


const Home = () => {
    const currentBalance = useSelector( state => state.BalanceReducer.balance)
    const loanStatus = useSelector( state => state.LoanReducer.loan )
    const dispatch = useDispatch();

    const applyLoanHandle = () => {
        dispatch(loan());
        dispatch(deposit(3000));
    };

    return (  
        <div className="ui container">
            <h3> current balance: { currentBalance } </h3>
            <h5> 
                { loanStatus ? "loan applied" : "do you need a loan?" }
            </h5>
            <button 
                onClick={applyLoanHandle}
                disabled = { loanStatus ? true : false}    
            >
                { loanStatus ? "happy spending" : "apply for loan" }
            </button>
        </div>
    );
}
 
export default Home;