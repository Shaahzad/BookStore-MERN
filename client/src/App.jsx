import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Createbook from './pages/Createbook'
import Deletebook from './pages/Deletebook'
import Editbook from './pages/Editbook'
import Home from './pages/Home'
import Showbook from './pages/Showbook'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<Createbook/>}/>
      <Route path="/books/delete/:id" element={<Deletebook/>} />
      <Route path="/books/edit/:id" element={<Editbook/>} />
      <Route path="/books/details/:id" element={<Showbook/>} />
    </Routes>
  )
}

export default App
