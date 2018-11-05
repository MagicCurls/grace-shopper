import React from 'react'
import {CardContent, Typography} from '@material-ui/core/'

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
    <Typography component="div">
      <CardContent>
        <h3>Update/Remove from Cart:</h3>
        <form id="student-form" onSubmit={handleSubmit}>
          <label htmlFor="quantity">Quantity: {quantity}</label>
          <input
            type="text"
            name="quantity"
            value={0}
            onChange={handleChange}
            placeholder="0"
          />

          <button type="submit" disabled={!quantity ? true : false}>
            Update Cart
          </button>
        </form>
        <button type="button" onClick={() => removeFromCart(userId, robotId)}>
          Remove From Cart
        </button>
      </CardContent>
    </Typography>
  )
}

export default UpdateRemoveForm
