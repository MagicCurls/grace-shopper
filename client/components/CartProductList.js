import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/productList'
import {removeProductFromCart, updateCartList} from '../store/cart'
import ListComponent from './ListComponent'

const mapStateToProps = state => {
  return {
    products: state.cart.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    removeFromCart: productId => dispatch(removeProductFromCart(productId)),
    updateCart: (productId, quantityUpdate) =>
      dispatch(updateCartList(productId, quantityUpdate))
  }
}

class CartProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const {products, updateCart, removeFromCart} = this.props

    return (
      <div>
        <h1>Your Cart:</h1>
        <ListComponent
          products={products}
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
