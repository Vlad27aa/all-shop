import React from 'react'
import { Outlet } from 'react-router-dom'
import Title from '../features/title/Title'

const MainLayout = () => {
  return (
    <>
      <Title />
      <Outlet />
    </>
  )
}

export default MainLayout
