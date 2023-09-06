import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useSelector, useDispatch } from 'react-redux'
import { sortProducts, changeSort } from './productListSlice'

const Sorting = () => {
  const sort = useSelector((state) => state.productList.sort)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(changeSort(event.target.value))
    dispatch(sortProducts(event.target.value))
  }

  return (
    <FormControl className="w-[150px]">
      <InputLabel id="demo-simple-select-label">Sort</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        label="Sort"
        onChange={handleChange}
      >
        <MenuItem value="idUp">Id ⬆️</MenuItem>
        <MenuItem value="idDown">Id ⬇️</MenuItem>

        <MenuItem value="titleUp">Title ⬆️</MenuItem>
        <MenuItem value="titleDown">Title ⬇️</MenuItem>

        {/* Uncoment if neded the sorting by Description */}
        {/* <MenuItem value="descriptionUp">Description ⬆️</MenuItem>
        <MenuItem value="descriptionDown">Description ⬇️</MenuItem> */}

        <MenuItem value="priceUp">Price ⬆️</MenuItem>
        <MenuItem value="priceDown">Price ⬇️</MenuItem>

        <MenuItem value="ratingUp">Rating ⬆️</MenuItem>
        <MenuItem value="ratingDown">Rating ⬇️</MenuItem>

        <MenuItem value="stockUp">Stock ⬆️</MenuItem>
        <MenuItem value="stockDown">Stock ⬇️</MenuItem>

        {/* Uncoment if neded the sorting by Category*/}
        {/* <MenuItem value="categoryUp">Category ⬆️</MenuItem>
        <MenuItem value="categoryDown">Category ⬇️</MenuItem> */}
      </Select>
    </FormControl>
  )
}

export default Sorting
