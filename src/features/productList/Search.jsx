import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useSelector, useDispatch } from 'react-redux'
import { search, changeSearchText } from './productListSlice'

const Search = () => {
  const dispatch = useDispatch()
  const searchText = useSelector((state) => state.productList.searchText)
  const filterCategory = useSelector(
    (state) => state.productList.filterCategory
  )
  useEffect(() => {
    if (!filterCategory.length) {
      dispatch(changeSearchText(''))
    }
  }, [filterCategory])

  const handleChange = (event) => {
    dispatch(changeSearchText(event.target.value))
    dispatch(search(event.target.value))
  }
  return (
    <div>
      <TextField
        className="w-[300px]"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search
