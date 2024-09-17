import { counterType } from "../types";

const counterIncrement = (number: number)=> async(dispatch:any) => {
    dispatch({
        type: counterType.increment,
        payload: number
    });
}

const counterDecrement = (number: number)=> async(dispatch:any) => {
    dispatch({
        type: counterType.decrement,
        payload: number
    });
}

export { counterIncrement, counterDecrement }