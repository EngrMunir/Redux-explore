const { createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// state
const initialCounterState ={
    count: 0,
    user:''
}

// action - object - type, payload
// increment counter
const incrementCounter =()=>{
    return {
        type:INCREMENT,
    }
}
// decrement counter
const decrementCounter =()=>{
    return {
        type:DECREMENT,
    };
}

// create reducer for counter
const counterReducer = (state=initialCounterState, action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count:state.count+1,
            };
        case DECREMENT:
            return{
                ...state,
                count:state.count-1,
            };
        default:
            state;
    }
}


// 1. state
// 2. dispatch action
// 3. reducer
// 4. store --> getState(), dispatch(), subscribe()

// reducer is a pure function

// create store
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())