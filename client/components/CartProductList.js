import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchProducts,
  removeProductFromCart,
  updateCartList
} from '../store/cart'
import ListComponent from './ListComponent'

const mapStateToProps = state => {
  return {
    products: state.cart.products,
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    removeFromCart: (userId, productId) =>
      dispatch(removeProductFromCart(userId, productId)),
    updateCart: (userId, productId, quantityUpdate) =>
      dispatch(updateCartList(userId, productId, quantityUpdate))
  }
}

class CartProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const {products, user, updateCart, removeFromCart} = this.props

    return (
      <div>
        <h1>Your Cart:</h1>
        <ListComponent
          {...products}
          {...user}
          removeFromCart={removeFromCart}
          updateCart={updateCart}
        />
      </div>
    )
  }
}

const ConnectedCartProductList = connect(mapStateToProps, mapDispatchToProps)(
  CartProductList
)

export default ConnectedCartProductList
