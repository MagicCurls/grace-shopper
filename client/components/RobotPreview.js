import React from 'react'
// import { Link } from 'react-router-dom';

const ProductPreview = props => {
  const {product} = props

  return (
    <div>
      <div>
        <img src={product.imageUrl} />
      </div>
      <div>
        <div>
          <div>
            {/* <Link to={`/robots/${robot.id}`}>{product.name}</Link> */}
            <h1>{product.name}</h1>
            {/* <Link to={`/robots/${brand.id}`}>{product.brand}</Link> */}
            <h3>{product.brand}</h3>
          </div>
          <div>
            <h2>{product.price}</h2>
            <p>{product.customerReviews}</p>
          </div>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
        <div>
          {/* <Link to={`/robots/${robot.id}`}>See More</Link> */}
          <p>See More</p>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview
