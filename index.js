// state --count:0
// action -- increment, decrement, reset
// 
const ADD_USER ='ADD_USER'
const { createStore } = require('redux') 
// state
const initialState ={
    users: ['Munir'],
    count: 1,    
}

// action
const addUser=(name)=>{
    return {
        type:ADD_USER,
        payload:name
    }
}

// creating reducer
const userReducer =(state=initialState,action)=>{
switch (action.type){
    case ADD_USER:
        return {
            users: [...state.users, action.payload],
            count:state.count+1,
        }
    default:
        state;
}
};

// store
const store =createStore(userReducer);

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(addUser("srijon"));
store.dispatch(addUser("rupa"));