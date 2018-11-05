import React from 'react'
import {CardContent} from '@material-ui/core/'

const UpdateRemoveForm = props => {
  const {
    userId,
    robotId,
    quantity,
    handleSubmit,
    handleChange,
    removeFromCart
  } = props

  return (
    <div>
      <CardContent>
        <h3>Update/Remove from Cart:</h3>
        <form id="student-form" onSubmit={handleSubmit}>
          <label htmlFor="quantity">Quantity: {quantity}</label>
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleChange}
            placeholder={quantity}
          />

          <button type="submit" disabled={!quantity ? true : false}>
            Update Cart
          </button>
        </form>
        <button type="button" onClick={() => removeFromCart(userId, robotId)}>
          Remove From Cart
        </button>
      </CardContent>
    </div>
  )
}

export default UpdateRemoveForm
