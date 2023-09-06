import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from './Product'
import HeaderList from './HeaderList'
import Sorting from './Sorting'
import Filter from './Filter'
import { updateProducts } from './productListSlice'
import Search from './Search'

const List = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productList.products)
  const allProducts = useSelector((state) => state.productList.allProducts)
  const filterCategory = useSelector(
    (state) => state.productList.filterCategory
  )
  const searchText = useSelector((state) => state.productList.searchText)

  useEffect(() => {
    if (!filterCategory.length) {
      dispatch(updateProducts(allProducts))
    }
  }, [filterCategory])

  return (
    <div>
      <Filter />
      <div className="w-fit mx-auto flex flex-col items-end">
        <div className="flex justify-between w-full">
          <Search />
          <Sorting />
        </div>
        <div className="border mt-4">
          <HeaderList />
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          {searchText && !products.length && (
            <h3 className="text-xl p-3">Not found!</h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default List
