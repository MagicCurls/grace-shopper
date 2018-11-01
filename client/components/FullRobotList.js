import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRobots} from '../store/robots'
import {addEntryThunk} from '../store/cart'
import ListComponent from './ListComponent'
import {me} from '../store/user'

const mapStateToProps = state => {
  return {
    robots: state.robots.robots,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRobots: () => dispatch(fetchRobots()),
    addToCart: (userId, robotId, quantity) =>
      dispatch(addEntryThunk(userId, robotId, quantity)),
    getUser: () => dispatch(me())
  }
}

class FullRobotList extends Component {
  componentDidMount() {
    this.props.getUser()
    this.props.fetchRobots()
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
