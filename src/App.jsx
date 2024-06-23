import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop';
import Kart from './pages/Kart'
import Images from './pages/Images'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="kart" element={<Kart />} />
        <Route path="image" element={<Images />} />
      </Routes>
    </BrowserRouter>
  )
}