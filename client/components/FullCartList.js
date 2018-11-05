import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchCartEntries,
  removeEntryThunk,
  updateEntryThunk,
} from '../store/cart' //import in the ordered thunks from the store
import { addOrderThunk } from '../store/completedOrders'
import ListComponent from './ListComponent'
import {me} from '../store/user'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const mapStateToProps = state => {
  return {
    robotsInCart: state.cart.cartList,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: userId => dispatch(fetchCartEntries(userId)),
    removeFromCart: (userId, robotId) =>
      dispatch(removeEntryThunk(userId, robotId)),
    updateCart: (userId, robotId, quantityUpdate) =>
      dispatch(updateEntryThunk(userId, robotId, quantityUpdate)),
    getUser: () => dispatch(me()),
    addToCompletedOrders: (userId, robotId, quantity) =>
      dispatch(addOrderThunk(userId, robotId, quantity))
  }
}
//create a new reducer and action creators associated with these thunks

class FullCartList extends Component {
  async componentDidMount() {
    await this.props.getUser()
    await this.props.getCart(this.props.user.id)
  }

  render() {
    const {robotsInCart, user, updateCart, removeFromCart, addToCompletedOrders} = this.props

    return (
      <div>
        <h1>Your Cart:</h1>
        <ListComponent
          robots={robotsInCart}
          user={user}
          removeFromCart={removeFromCart}
          updateCart={updateCart}
        />
        <div id="StripeProvider">
          <StripeProvider apiKey="pk_test_gJYHhJq3o2kBKuBUPQM0SheY">
            <div className="test">
              <h1>React Stripe Elements Test</h1>
              <Elements>
                <CheckoutForm 
                addToCompletedOrders={addToCompletedOrders}
                removeFromCart={removeFromCart}
                robots={robotsInCart}
                />
              </Elements>
            </div>
          </StripeProvider>
        </div>
      </div>
    )
  }
}

const ConnectedFullCartList = connect(mapStateToProps, mapDispatchToProps)(
  FullCartList
)

export default ConnectedFullCartList
