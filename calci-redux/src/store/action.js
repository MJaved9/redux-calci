import {COUNTER_INCREMENT,COUNTER_DECREMENT,COUNTER_DIVIDE,COUNTER_MULTIPLY} from "./actiontype";

export const add=(value)=>({
    type:COUNTER_INCREMENT,
    payload:value
});

export const substract=(value)=>({
    type:COUNTER_DECREMENT,
    payload:value
})

export const multiply=(value)=>({
    type:COUNTER_MULTIPLY,
    payload:value
})
export const divide=(value)=>({
    type:COUNTER_DIVIDE,
    payload:value
})
