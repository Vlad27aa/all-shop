import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from './productListSlice'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const { id, title, description, price, images, rating, stock, category } =
    product
  return (
    <div className="flex mx-auto">
      <p className="w-[40px] border p-1">{id}</p>
      <h3 className="w-[150px] border p-1">{title}</h3>
      <p className="w-[200px] border p-1">{description}</p>
      <p className="w-[70px] border p-1">${price}</p>
      <div className="w-[200px] border p-1">
        <img src={images[0]} alt="img"></img>
      </div>
      <p className="w-[60px] border p-1">{rating}</p>
      <p className="w-[60px] border p-1">{stock}</p>
      <p className="w-[120px] border p-1">{category}</p>
      <button
        className="hover:scale-110 duration-300 active:scale-100"
        onClick={() => dispatch(deleteProduct(id))}
      >
        <p className="absolute text-xl ml-2">❌</p>
      </button>
    </div>
  )
}

export default Product
