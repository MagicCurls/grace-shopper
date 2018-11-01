import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCartEntries, removeEntryFunc, updateCartList} from '../store/cart'
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
    getRobots: userId => dispatch(fetchCartEntries(userId)),
    removeFromCart: (userId, robotId) =>
      dispatch(removeEntryFunc(userId, robotId)),
    updateCart: (userId, robotId, quantityUpdate) =>
      dispatch(updateCartList(userId, robotId, quantityUpdate)),
    getUser: () => dispatch(me())
  }
}

class FullCartList extends Component {
  componentDidMount() {
    this.props.getUser()
    this.props.getRobots(this.props.user.id)
    console.log('hit!')
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
