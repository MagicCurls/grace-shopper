import React from 'react'
import ProductPreview from './ProductPreview'
import AddToCart from './AddToCart'
import UpdateRemove from './UpdateRemove'

const ListComponent = props => {
  return (
    <div>
      {props.products.map(product => (
        <div key={product.id}>
          <ProductPreview {...product} />
          {!!props.addToCart ? (
            <AddToCart
              productId={product.id}
              addToCart={props.addToCart}
              userId={props.user.id}
            />
          ) : (
            <UpdateRemove
              productId={product.id}
              userId={props.user.id}
              removeFromCart={props.removeFromCart}
              updateCart={props.updateCart}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ListComponent
