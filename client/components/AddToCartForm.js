import React from 'react'
import {CardContent} from '@material-ui/core/'

const AddToCartForm = props => {
  const {quantity, handleSubmit, handleChange} = props

  return (
    <div>
      <CardContent>
        <h3>Add to Cart:</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleChange}
            placeholder={quantity}
          />
          <button type="submit" disabled={!quantity ? true : false}>
            Add To Cart
          </button>
        </form>
      </CardContent>
    </div>
  )
}

export default AddToCartForm
