import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CardElement, injectStripe} from 'react-stripe-elements';
import cart from '../store/cart';
import completedOrders from '../store/completedOrders'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(event) {
    console.log("HELLO!!!")
    const {token} = await this.props.stripe.createToken({name: "Name"});
    console.log('This is token: ', token)
    const response = await fetch("/charge", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id
    });

    if (response.ok) {
      this.setState({complete: true})
      this.props.robots.map(async robot => {
        await this.props.addToCompletedOrders(robot.userId, robot.robotId, robot.quantity)
        await this.props.removeFromCart(robot.userId, robot.robotId)
        })
    }
    // map through the cart passed down from card element component
    // map through all the cart entries, adding the entry to OrderedEntry table, and delete from the Cart table (already present in a reducer)
  }

  render() {
    if(this.state.complete) return <h1>Purchase Complete</h1>

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button type="submit" onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);