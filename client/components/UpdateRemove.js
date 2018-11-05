import React, {Component} from 'react'
import UpdateRemoveForm from './UpdateRemoveForm'

class UpdateRemove extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: Number(event.target.value)
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.props.updateCart(
      this.props.userId,
      this.props.entry.robotId,
      this.state.quantity
    )

    this.setState({
      quantity: 0
    })

    await this.props.getCart(this.props.userId)
  }

  render() {
    const {entry, userId, removeFromCart} = this.props

    return (
      <div className="section">
        <UpdateRemoveForm
          stateQuantity={this.state.quantity}
          cartQuantity={entry.quantity}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          removeFromCart={removeFromCart}
          robotId={entry.robotId}
          userId={userId}
        />
      </div>
    )
  }
}

export default UpdateRemove
