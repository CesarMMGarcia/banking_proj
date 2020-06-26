import { DEPOSIT, WITHDRAW, LOADING } from "../actions";

const initialStore = {
    balance: 0,
    loading: false, 

}

const reducer = (state = initialStore, action ) => {
    switch(action.type){
        case DEPOSIT:
            return {...state,balance: state.balance + action.payload, loading:false}
        case WITHDRAW:
            return {...state,balance: state.balance - action.payload, loading:false }
        // case "LOAN" :
        //     return {...state,balance: state.balance + 3000 }
        case LOADING:
            return {...state, loading: true}
        default:
            return state
    }
};

export default reducer;