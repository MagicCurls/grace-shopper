import React, {Component, Fragment} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from '../StripePaymentComponents/CheckoutForm'

import {Navbar} from './components'
import Routes from './routes'

class App extends Component {
  render(){
    return (
      <Fragment>
        <div>
          <Navbar />
          <Routes />
        </div>
        <div id="StripeProvider">
          <StripeProvider apiKey="pk_test_gJYHhJq3o2kBKuBUPQM0SheY">
            <div className="test">
            <h1>React Stripe Elements Test</h1>
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </StripeProvider>
        </div>
      </Fragment>
    )
  }
}

export default App