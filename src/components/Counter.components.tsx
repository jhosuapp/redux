import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { Dispatch } from 'redux';
import { counterDecrement, counterIncrement } from '../actions/counter.action';

const Counter = ():JSX.Element => {

    const { count } = useAppSelector(state => state.counter);
    // Use dispatch
    const dispatch: Dispatch<any> = useAppDispatch()

    return (
        <>
            <button
                onClick={ () => dispatch(counterIncrement()) }
            >+1</button>
                <p>contador { count }</p>
            <button
                onClick={ () => dispatch(counterDecrement()) }
            >-1</button>
        </>
    )
}

export { Counter }