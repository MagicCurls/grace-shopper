import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/productList'
import {addProductToCart} from '../store/cart'
import ListComponent from './ListComponent'

const mapStateToProps = state => {
  return {
    products: state.products.products,
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addToCart: (userId, productId, quantity) =>
      dispatch(addProductToCart(userId, productId, quantity))
  }
}

class FullProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const {products, user, addToCart} = this.props

    return (
      <div>
        <h1>Products:</h1>
        <ListComponent {...products} {...user} addToCart={addToCart} />
      </div>
    )
  }
}

const ConnectedFullProductList = connect(mapStateToProps, mapDispatchToProps)(
  FullProductList
)

export default ConnectedFullProductList
