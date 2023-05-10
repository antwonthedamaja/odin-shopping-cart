import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import './style/App.css';
import Home from './component/Home';
import Shop from './component/Shop';

export default function App() {
  const total = '0.00';

  return (
    <BrowserRouter>
      <Nav total={total}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}