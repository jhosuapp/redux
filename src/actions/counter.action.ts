import { counterType } from "../types";

const counterIncrement = ()=> async(dispatch:any) => {
    dispatch({
        type: counterType.increment
    })
}

const counterDecrement = ()=> async(dispatch:any) => {
    dispatch({
        type: counterType.decrement
    })
}

export { counterIncrement, counterDecrement }