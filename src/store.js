import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './features/productList/productListSlice'

export default configureStore({
  reducer: {
    productList: productListReducer,
  },
})
