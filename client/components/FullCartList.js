import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRobots, removeRobotFromCart, updateCartList} from '../store/cart'
import ListComponent from './ListComponent'
import {me} from '../store/user'

const mapStateToProps = state => {
  return {
    robots: state.cart.robots,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRobots: () => dispatch(fetchRobots()),
    removeFromCart: (userId, robotId) =>
      dispatch(removeRobotFromCart(userId, robotId)),
    updateCart: (userId, robotId, quantityUpdate) =>
      dispatch(updateCartList(userId, robotId, quantityUpdate)),
    getUser: () => dispatch(me())
  }
}

class FullCartList extends Component {
  componentDidMount() {
    this.props.fetchRobots()
    this.props.getUser()
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

const ConnectedFullCartList = connect(mapStateToProps, mapDispatchToProps)(
  FullCartList
)

export default ConnectedFullCartList
