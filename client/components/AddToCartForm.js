import React from 'react'

const AddToCartForm = props => {
  const {quantity, handleSubmit, handleChange} = props

  return (
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
        Add To Cart
      </button>
    </form>
  )
}

export default AddToCartForm
