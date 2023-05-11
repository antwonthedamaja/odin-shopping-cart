import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import './style/App.css';
import Home from './component/Home';
import Shop from './component/Shop';
import fishImg from './assets/fish.jpg';
import trashImg from './assets/trashman.jpg';
import animeImg from './assets/cute_anime_boy.png';

const fish = {
  name: 'fish',
  txt: 'Fish',
  price: Math.random() * 499,
  amount: 0,
  img: fishImg
};

const trash = {
  name: 'trash',
  txt: 'Trashman',
  price: Math.random() * 499,
  amount: 0,
  img: trashImg
};

const anime = {
  name: 'anime',
  txt: 'Cute anime boy',
  price: Math.random() * 899,
  amount: 0,
  img: animeImg
};

const array = [fish, trash, anime];

export default function App() {
  const [list, setList] = useState(array);
  const total = '0.00';

  return (
    <BrowserRouter>
      <Nav total={total}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop list={list} setList={setList} />} />
      </Routes>
    </BrowserRouter>
  );
}