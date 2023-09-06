import { createSlice } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    allProducts: [],
    products: [],
    filterCategory: ['start'],
    sort: '',
    searchText: '',
  },
  reducers: {
    updateAllProducts: (state, action) => {
      state.allProducts = action.payload
    },
    updateProducts: (state, action) => {
      state.products = action.payload
    },
    sortProducts: (state, action) => {
      const byField = (fieldName) => {
        const str = fieldName.slice(0, -2)
        return (a, b) => (a[str] > b[str] ? 1 : -1)
      }
      state.products = state.products.sort(byField(action.payload))
    },
    filterProducts: (state) => {
      const currentProductList =
        state.searchText === '' ? state.allProducts : state.products
      state.products = currentProductList.filter((product) =>
        state.filterCategory.includes(product.category)
      )
    },
    changeFilterCategory: (state, action) => {
      if (!state.filterCategory.includes(action.payload)) {
        state.filterCategory.push(action.payload)
        state.filterCategory = state.filterCategory.filter(
          (category) => category !== 'start'
        )
      } else {
        state.filterCategory = state.filterCategory.filter(
          (category) => category !== action.payload
        )
      }
    },
    changeSort: (state, action) => {
      state.sort = action.payload
    },
    changeSearchText: (state, action) => {
      state.searchText = action.payload
    },
    search: (state, action) => {
      const currentProductList =
        state.filterCategory.length === 1 &&
        state.filterCategory.includes('start')
          ? state.allProducts
          : state.products
      state.products = currentProductList.filter(
        (item) =>
          item.title
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase()) ||
          item.category
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
      )
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
      state.allProducts = state.allProducts.filter(
        (product) => product.id !== action.payload
      )
    },
  },
})

export const {
  updateAllProducts,
  updateProducts,
  sortProducts,
  filterProducts,
  changeFilterCategory,
  changeSort,
  changeSearchText,
  search,
  deleteProduct,
} = productListSlice.actions

export default productListSlice.reducer
