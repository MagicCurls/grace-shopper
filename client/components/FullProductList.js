import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/productList'
import {addProductToCart} from '../store/cart'
import ListComponent from './ListComponent'

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addToCart: productId => dispatch(addProductToCart(productId))
  }
}

class FullProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const {products, addToCart} = this.props

    return (
      <div>
        <h1>Products:</h1>
        <ListComponent products={products} addToCart={addToCart} />
      </div>
    )
  }
}

const ConnectedFullProductList = connect(mapStateToProps, mapDispatchToProps)(
  FullProductList
)

export default ConnectedFullProductList
