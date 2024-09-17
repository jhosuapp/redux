export type counterModelType = {
    increment: '[COUNTER] Increment',
    decrement: '[COUNTER] Decrement'
}

export type counterModelInitialState = {
    count: number;
}

export type counterModelAction = {
    type: '[COUNTER] Increment' | '[COUNTER] Decrement';
    payload: number;
}