import axios from 'axios'
import history from '../history'

// Actions
const GET_PRODUCTS = 'GET_PRODUCTS'


// Initial State
const defaultProductList = {
  products : []
}

// Action creator
export const getProducts = products => (
  {
    type: GET_PRODUCTS,
    products
  }
)

//Thunk creator
export const fetchProducts = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get('/api/products')
          const products = response.data
          dispatch(getProducts(products))
      }
      catch (err) { console.log(err) }
  }
}

// Reducer
 const productListReducer = (state = defaultProductList, action) => {
   switch(action.type) {
     case GET_PRODUCTS:
        return {...state, products: action.products}

     default:
        return state
   }
 }

 export default productListReducer



