import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Nav from './component/Nav';
import './style/App.css';

export default function App() {
  const total = '0';
  return (
    <BrowserRouter>
      <Nav total={total}/>
      <Routes>
        <Route path="/" element={<div>Hi</div>} />
        <Route path="/shop" element={<div>Shop</div>} />
      </Routes>
    </BrowserRouter>
  );
}