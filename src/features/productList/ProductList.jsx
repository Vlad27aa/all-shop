import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { updateAllProducts, updateProducts } from './productListSlice'
import Loader from './Loader'
import List from './List'

const URL = 'https://dummyjson.com/products'

const ProductList = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get(URL)
      .then((products) => {
        dispatch(updateProducts(products.data.products))
        dispatch(updateAllProducts(products.data.products))
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="mt-2">
      <List />
      {loading && <Loader />}
    </div>
  )
}

export default ProductList
