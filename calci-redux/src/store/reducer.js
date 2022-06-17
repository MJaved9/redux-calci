import {COUNTER_INCREMENT,COUNTER_DECREMENT,COUNTER_MULTIPLY,COUNTER_DIVIDE} from "./actiontype";

export const reducer=(state,action)=>{
    switch(action.type){
        case COUNTER_INCREMENT:{
            state.count=state.count+action.payload;

            return {...state}
        }
        case COUNTER_DECREMENT:{
            state.count=state.count-action.payload;
            return{...state}
        }
        case COUNTER_MULTIPLY:{
            state.count=state.count*action.payload;
            return{...state}
        }
        case COUNTER_DIVIDE:{
            if(action.payload==0){
                alert(`Not possible!`)
            }else{
            state.count=Math.floor(state.count/action.payload)
        }
            return {...state}
    }

        default:{
            return state
        }
    }
}