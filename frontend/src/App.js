import React from  'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import PostForm from './PostForm'
import PostDetails from './PostDetails'
import Blog from './Blog'
import './App.css'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/new' element={<PostForm />} />
        <Route path='/edit/:id' element={<PostForm />} />
        <Route path='/:id' element={<PostDetails />} />
      </Routes>
    </div>
  );
}
export default App;
