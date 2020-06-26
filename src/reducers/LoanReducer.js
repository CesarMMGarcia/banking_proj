const initialState = {
    loan: false, 
};

const LoanReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAN": {
            return {...state,loan:true}
        }
        default:
            return state;
    }
};

export default LoanReducer;