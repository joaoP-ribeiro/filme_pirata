import React from 'react'
import ReactDOM from "react-dom/client"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home.jsx"
import Movie from "./pages/movie.jsx"
import Search from './pages/search.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="movie/:ad" element={<Movie/>}/>
          <Route path="search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
