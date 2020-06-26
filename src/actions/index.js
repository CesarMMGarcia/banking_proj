
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const LOADING = "LOADING";
export const LOAN = "LOAN";

export const deposit = (amount) => {
   return {
    type: DEPOSIT,
    payload: amount,
    }
};

export const withdraw = (amount) => {
    return {
    type: WITHDRAW,
    payload: amount,
    }
 };

 export const loading = () => {
    return {
    type: LOADING,
    loading: true,
    }
 };

 export const loan = () => {
    return {
    type: LOAN,
    payload:3000,
    }
 };

 export const depositAsync = (money) => {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(deposit(money))
        },3000);
        
    }
 };



