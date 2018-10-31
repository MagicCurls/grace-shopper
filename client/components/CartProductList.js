import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRobots, removeRobotFromCart, updateCartList} from '../store/cart'
import ListComponent from './ListComponent'

const mapStateToProps = state => {
  return {
    robots: state.cart.robots,
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRobots: () => dispatch(fetchRobots()),
    removeFromCart: (userId, robotId) =>
      dispatch(removeRobotFromCart(userId, robotId)),
    updateCart: (userId, robotId, quantityUpdate) =>
      dispatch(updateCartList(userId, robotId, quantityUpdate))
  }
}

class CartRobotList extends Component {
  componentDidMount() {
    this.props.fetchRobots()
  }

  render() {
    const {robots, user, updateCart, removeFromCart} = this.props

    return (
      <div>
        <h1>Your Cart:</h1>
        <ListComponent
          {...robots}
          {...user}
          removeFromCart={removeFromCart}
          updateCart={updateCart}
        />
      </div>
    )
  }
}

const ConnectedCartRobotList = connect(mapStateToProps, mapDispatchToProps)(
  CartRobotList
)

export default ConnectedCartRobotList
