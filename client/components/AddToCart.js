import React, {Component} from 'react'
import AddToCartForm from './AddToCartForm'

class AddToCart extends Component {
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

  handleSubmit(event) {
    event.preventDefault()
    this.props.addToCart(
      this.props.userId,
      this.props.productId,
      this.state.quantity
    )

    this.setState({
      quantity: 0
    })
  }

  render() {
    return (
      <div className="section">
        <h3>Add To Cart:</h3>
        <AddToCartForm
          quantity={this.state.quantity}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default AddToCart
