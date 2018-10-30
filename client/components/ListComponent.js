import React from 'react'
import ProductPreview from './ProductPreview'
import AddToCart from './AddToCart'
import UpdateRemove from './UpdateRemove'

const CampusList = props => {
  return (
    <div>
      {props.products.map(product => (
        <div key={product.id}>
          <ProductPreview {...product} />
          {!props.addToCart ? (
            <UpdateRemove
              {...product}
              removeFromCart={props.removeFromCart}
              updateCart={props.updateCart}
            />
          ) : (
            <AddToCart {...product} addToCart={props.addToCart} />
          )}
        </div>
      ))}
    </div>
  )
}

export default CampusList
