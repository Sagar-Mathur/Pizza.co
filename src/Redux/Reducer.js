

const initialstate={
    cart:[],
}
const rootReducer=(state=initialstate,action)=>{
 switch(action.type){
    case  'addtocart':
    return{
        ...state,
        cart:[...state.cart,action.payload]
    }
    default:
        return state;
}
}
export default rootReducer; 