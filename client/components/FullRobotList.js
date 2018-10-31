import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRobots} from '../store/robotList'
import {addRobotToCart} from '../store/cart'
import ListComponent from './ListComponent'

const mapStateToProps = state => {
  return {
    robots: state.robots.robots,
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRobots: () => dispatch(fetchRobots()),
    addToCart: (userId, robotId, quantity) =>
      dispatch(addRobotToCart(userId, robotId, quantity))
  }
}

class FullRobotList extends Component {
  componentDidMount() {
    this.props.fetchRobots()
  }

  render() {
    const {robots, user, addToCart} = this.props

    return (
      <div>
        <h1>Robots:</h1>
        <ListComponent {...robots} {...user} addToCart={addToCart} />
      </div>
    )
  }
}

const ConnectedFullRobotList = connect(mapStateToProps, mapDispatchToProps)(
  FullRobotList
)

export default ConnectedFullRobotList
