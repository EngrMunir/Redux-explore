// productReducer

const { createStore, applyMiddleware } = require("redux");
const { default: logger} = require("redux-logger");
// products constant
const GET_PRODUCTS ="GET_PRODUCTS";
const ADD_PRODUCT ="ADD_PRODUCT";


// product states
const initialProductState ={
    products:["sugar","biscuits"],
    numberOfProducts: 2,
}

// action -> function
const getProducts = ()=>{
    return {
        type:GET_PRODUCTS,
        
    }
}
const addProduct = (product)=>{
    return {
        type:ADD_PRODUCT,
        payload: product
    }
}

// product reducer
const productReducer =(state=initialProductState, action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products:[...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        default:
            return state;
    }
}

// store
const store = createStore(productReducer, applyMiddleware(logger))

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct("pen"));
