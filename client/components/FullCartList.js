import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchCartEntries,
  removeEntryThunk,
  updateEntryThunk
} from '../store/cart'
import ListComponent from './ListComponent'
import {me} from '../store/user'

const mapStateToProps = state => {
  return {
    robots: state.cart.cartList,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRobots: userId => dispatch(fetchCartEntries(userId)),
    removeFromCart: (userId, robotId) =>
      dispatch(removeEntryThunk(userId, robotId)),
    updateCart: (userId, robotId, quantityUpdate) =>
      dispatch(updateEntryThunk(userId, robotId, quantityUpdate)),
    getUser: () => dispatch(me())
  }
}

class FullCartList extends Component {
  async componentDidMount() {
    await this.props.getUser()
    await this.props.getRobots(this.props.user.id)
  }

  render() {
    const {robots, user, updateCart, removeFromCart} = this.props
    return (
      <div>
        <h1>Your Cart:</h1>
        <ListComponent
          robots={robots}
          user={user}
          removeFromCart={removeFromCart}
          updateCart={updateCart}
        />
      </div>
    )
  }
}

const ConnectedFullCartList = connect(mapStateToProps, mapDispatchToProps)(
  FullCartList
)

export default ConnectedFullCartList
