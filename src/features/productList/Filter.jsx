import React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useDispatch } from 'react-redux'
import {
  filterProducts,
  changeFilterCategory,
  changeSort,
} from './productListSlice'

const Filter = () => {
  const dispatch = useDispatch()

  const scroll = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  const handleChange = (event) => {
    dispatch(changeFilterCategory(event.target.value))
    dispatch(filterProducts())
    dispatch(changeSort(''))
    scroll(0)
  }

  return (
    <div className="fixed left-6 top-20 text-left">
      <h5 className="text-xl mb-2">Filter:</h5>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Fragrances"
          value="fragrances"
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Groceries"
          value="groceries"
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Home-decoration"
          value="home-decoration"
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Laptops"
          value="laptops"
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Skincare"
          value="skincare"
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Smartphones"
          value="smartphones"
          onChange={handleChange}
        />
      </FormGroup>
    </div>
  )
}

export default Filter
