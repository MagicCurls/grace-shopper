import axios from 'axios'
import history from '../history'

// Actions
const GET_ENTRIES = 'GET_ENTRIES'
const GET_ENTRIES_BY_BRAND = 'GET_ENTRIES_BY_BRAND'



// Initial State
const defaultentriesList = {
  entries : []
}

// Action creator
export const getEntries = entries => (
  {
    type: GET_ENTRIES,
    entries
  }
)

export const getEntriesByBrand = (entries, brand) => (
  {
    type: GET_ENTRIES_BY_BRAND,
    entries,
    brand
  }
)

//Thunk creator
export const fetchEntries = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get('/api/entries')
          const entries = response.data
          dispatch(getEntries(entries))
      }
      catch (err) { console.log(err) }
  }
}

export const fetchEntriesByBrand = (brand) => {
  return async (dispatch) => {
      try {
          const response = await axios.get('/api/entries/byBrand' + brand)
          const entries = response.data
          dispatch(getEntriesByBrand(entries, brand))
      }
      catch (err) { console.log(err) }
  }
}

// Reducer
 const entriesListReducer = (state = defaultEntriesList, action) => {
   switch(action.type) {
     case GET_ENTRIES:
        return { ...state, entries: action.entries}
     case GET_ENTRIES_BY_BRAND:
        return {...state, entries: action.entries}

     default:
        return state
   }
 }

 export default entriesListReducer



