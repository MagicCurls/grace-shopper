import axios from 'axios'
import history from '../history'

// Actions
const ADD_TO_CART_GUEST = 'ADD_TO_CART_GUEST'
const UPDATE_CART_GUEST = 'UPDATE_CART_GUEST'
const REMOVE_FROM_CART_GUEST = 'REMOVE_FROM_CART_GUEST'
const GET_CART_ENTRIES_GUEST = 'GET_CART_ENTRIES_GUEST'

// Initial State
const defaultCart = {
  cartList: []
}

// Action creator
// userId, RobotId, Quantity
export const addToCartGuest = entry => ({
  type: ADD_TO_CART_GUEST,
  entry
})
// userId, RobotId, Quantity
export const updateCartGuest = entry => ({
  type: UPDATE_CART_GUEST,
  entry
})

export const removeRobotGuest = robotId => ({
  type: REMOVE_FROM_CART_GUEST,
  robotId
})

export const getCartEntriesGuest = entries => ({
  type: GET_CART_ENTRIES_GUEST,
  entries
})
//Thunk creator

export const updateEntryThunkGuest = (robotId, quantity) => {
  return async dispatch => {
    try {
      let entryMatch = await JSON.parse(localStorage.getItem(robotId))

      console.log('robotId update:', robotId)
      console.log(typeof robotId)

      entryMatch.quantity = quantity

      console.log('edit entry: ', entryMatch)

      await localStorage.setItem(JSON.stringify(entryMatch.robotId), JSON.stringify(entryMatch))
      dispatch(updateCartGuest(entryMatch))
      }
    catch (err) { console.log(err) }
  }
}

export const addEntryThunkGuest = (robotId, quantity ) => {
  return async dispatch => {
    try {
      let entryMatch =  await JSON.parse(localStorage.getItem(robotId))
      if(entryMatch) {
        entryMatch.quantity = entryMatch.quantity + quantity
      }
      else {
        entryMatch.quantity = quantity
      }
      await localStorage.setItem(JSON.stringify(entryMatch.robotId), JSON.stringify(entryMatch))
      console.log('guestEntry before dispatch addToCart: ', entryMatch )
      dispatch(addToCartGuest(entryMatch))
    }
    catch (err) { console.log(err) }
  }
}

export const removeEntryThunkGuest = (robotId) => {
  return async dispatch => {
    try {
      await localStorage.removeItem(JSON.stringify(robotId))
      console.log('removeLocalS robotId: ', robotId)
      dispatch(removeRobotGuest(robotId))
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchCartEntriesGuest = () => {
  return dispatch => {
    try {
      console.log('fetchAllGuests ')
      let allRobotsId = Object.keys(localStorage)

      console.log('allRobots: ', allRobotsId)

      let allRobots = allRobotsId.map(id => {
        return JSON.parse(localStorage.getItem(id))
      })

      dispatch(getCartEntriesGuest(allRobots))
    } catch (err) {
      console.log(err)
    }
  }
}


// Reducer

const cartReducerGuest = (state = defaultCart, action) => {
  switch (action.type) {
    case ADD_TO_CART_GUEST:
      return {...state, cartList: [...state.cartList, action.entry]}
    case UPDATE_CART_GUEST:
      let newCartList = [...state.cartList].map(entry => {
        if (entry.robotId === action.entry.robotId) {
          return action.entry
        }
        return entry
      })
      return {...state, cartList: newCartList}

    case REMOVE_FROM_CART_GUEST:
      return {
        ...state,
        cartList: [...state.cartList].filter(
          entry => entry.robotInfo.id !== action.robotId
        )
      }
    case GET_CART_ENTRIES_GUEST:
      return {...state, cartList: action.entries}

    default:
      return state
  }
}

export default cartReducerGuest

