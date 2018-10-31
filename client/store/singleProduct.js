import axios from 'axios'
import history from '../history'

// Actions
const GET_PRODUCT = 'GET_PRODUCT'
// Initial State
const defaultSingleProduct = {
  product : {}
}

// Action creator
export const getProduct = product => (
  {
  type: GET_PRODUCT,
  product
  }
)

//Thunk creator
export const fetchProduct = (productId) => {
  return async (dispatch) => {
      try {
          const response = await axios.get('/api/products/' + productId)
          const product = response.data
          dispatch(getproduct(product))
      }
      catch (err) { console.log(err) }
  }
}

// Reducer
 const singleProductReducer = (state = defaultSingleProduct, action) => {
   switch(action.type) {
    case GET_PRODUCT:
        return { ...state, product: action.product}

     default:
        return state
   }
 }

 export default singleProductReducer

