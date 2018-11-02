import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRobots} from '../store/robots'
import {addEntryThunk, fetchCartEntries} from '../store/cart'
import ListComponent from './ListComponent'
import {me} from '../store/user'

const mapStateToProps = state => {
  return {
    robots: state.robots.robots,
    user: state.user,
    robotsInCart: state.cart.cartList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: userId => dispatch(fetchCartEntries(userId)),
    fetchRobots: () => dispatch(fetchRobots()),
    addToCart: (userId, robotId, quantity) =>
      dispatch(addEntryThunk(userId, robotId, quantity)),
    getUser: () => dispatch(me())
  }
}

class FullRobotList extends Component {
  async componentDidMount() {
    await this.props.getUser()
    await this.props.getCart(this.props.user.id)
    await this.props.fetchRobots()
  }

  render() {
    const {robots, user, addToCart} = this.props

    return (
      <div>
        <h1>Robots:</h1>
        <ListComponent robots={robots} user={user} addToCart={addToCart} />
      </div>
    )
  }
}

const ConnectedFullRobotList = connect(mapStateToProps, mapDispatchToProps)(
  FullRobotList
)

export default ConnectedFullRobotList
