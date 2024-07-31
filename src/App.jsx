import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import ScrollTop from './components/ScrollTop';
import Kart from './pages/Kart'
import Images from './pages/Images'
import Ashs from './pages/Ashs'
import Group from './pages/Group'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="kart" element={<Kart />} />
        <Route path="image" element={<Images />} />
        <Route path="ashs" element={<Ashs />} />
        <Route path="ashs/:name" element={<Group />} />
      </Routes>
    </BrowserRouter>
  )
}