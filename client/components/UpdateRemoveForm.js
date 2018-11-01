import React from 'react'

const UpdateRemoveForm = props => {
  const {
    userId,
    robotId,
    quantity,
    handleSubmit,
    handleChange,
    removeFromCart
  } = props

  console.log(robotId)

  return (
    <div>
      <form id="student-form" onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity:</label>
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
    </div>
  )
}

export default UpdateRemoveForm
