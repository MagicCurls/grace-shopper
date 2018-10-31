import axios from 'axios'
import history from '../history'

// Actions
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_CART = 'UPDATE_CART'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

// Initial State
const defaultCart = {
  cartList : []
}

// Action creator
export const addToCart = product => (
  {
  type: ADD_TO_CART,
  product
  }
)

export const updateCart = product => (
  {
  type: UPDATE_CART,
  product
  }
)

export const removeProduct = pruductId => (
  {
      type: REMOVE_PRODUCT,
      pruductId
  }
)

//Thunk creator

// Reducer

 const cardReducer = () => {
   switch(action.type) {
     case xxx:

     default:
      return state
   }
 }

 export default cardReducer

