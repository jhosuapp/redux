import { counterType } from '../types/index';
import { counterModelAction, counterModelInitialState } from '../models/counter.model';


const initial_state:counterModelInitialState = {
    count: 1
}

const counterReducer = (state = initial_state, action:counterModelAction):counterModelInitialState => {
    switch(action.type){
        case counterType.decrement: {
            return {...state, count: state.count - action.payload};
        }
        case counterType.increment: {
            return {...state, count: state.count + action.payload};
        }
        default : {
            return state;
        }
    }
}


export { counterReducer }