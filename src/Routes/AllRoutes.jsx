import React from 'react'
import HomePage from '../Pages/HomePage'
import EditPage from '../Pages/EditPage'
import { Route, Routes } from 'react-router-dom'
import AddPage from '../Pages/AddPage'

const AllRoutes = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/create" element={<AddPage />} />
      </Routes>
    
    </>
  )
}

export default AllRoutes