import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import entry from './entryList'
import singleEntry from './singleEntry'
import cart from './cart'

const reducer = combineReducers({
  user,
  entry,
  singleEntry,
  cart
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './entryList'
export * from './singleEntry'
export * from './cart'



// import userReducer from './user'
// import robotListReducer from './robotList'
// import singleRobotReducer from './singleRobot'
// import cartReducer from './cart'

// const reducer = combineReducers({
//   user: userReducer,
//   robot: robotListReducer,
//   singleRobot: singleRobotReducer,
//   cart : cartReducer
// })
