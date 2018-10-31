import axios from 'axios'
import history from '../history'

// Actions
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_CART = 'UPDATE_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// Initial State
const defaultCart = {
  cartList : []
}

// Action creator
// userId, RobotId, Quantity
export const addToCart = entry => (
  {
  type: ADD_TO_CART,
  entry
  }
)
// userId, RobotId, Quantity
export const updateCart = (entry) => (
  {
  type: UPDATE_CART,
  entry
  }
)

export const removeRobot = robotId => (
  {
      type: REMOVE_FROM_CART,
      robotId
  }
)


//Thunk creator
export const addCartThunk = ( userId, robotId, quantity ) => {
  return async (dispatch) => {
      try {
        const entryMatch = state.cartList.filter(entry => {
          entry.robotId === robotId && entry.userId === userId
        })
        if(!!entryMatch){
          const newQuantity = entryMatch[0].quantity + quantity
          updateCartThunk(userId, robotId, newQuantity)
        }
        else {
          const response = await axios.post('/api/carts', { userId, robotId, quantity })
          const entryData = response.data
          dispatch(addToCart(entryData))
        }
      }
      catch (err) { console.log(err) }
  }
}

export const updateCartThunk = (userId, robotId, quantity) => {
  return async (dispatch) => {
      try {
          const response = await axios.put('/api/carts/'+ robotId, { userId, robotId, quantity })
          const entryData = response.data
          dispatch(updateCart(entryData))
      }
      catch (err) { console.log(err) }
  }
}

export const removePruductThunk = (robotId) => {
  return async (dispatch) => {
      try {
          await axios.delete('/api/carts/' + robotId)
          dispatch(removerobot(robotId))
      }
      catch (err) { console.log(err) }
  }
}

// Reducer

 const cartReducer = (state = defaultCart, action) => {
   switch(action.type) {
      case ADD_TO_CART:
        return { ...state, cartList: [...state.cartList, action.entry] }
      case UPDATE_CART:
          const newCartList = [...state.cartList].map( entry => {
            if(entry.robotId === action.entry.robotId) {
              return action.entry
            }
          return entry
        })
        return { ...state, cartList: newCartList }
      case REMOVE_FROM_CART:
        return { ...state, cartList: [...state.cartList].filter(entry => entry.robotId !== action.entry.robotId) }
      default:
        return state
   }
 }

 export default cartReducer



