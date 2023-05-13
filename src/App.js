import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
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
  price: Math.random() * 99,
  amount: 0,
  img: fishImg,
  index: 0
};

const trash = {
  name: 'trash',
  txt: 'Trashman',
  price: Math.random() * 99 + 100,
  amount: 0,
  img: trashImg,
  index: 1
};

const anime = {
  name: 'anime',
  txt: 'Cute anime boy',
  price: Math.random() * 499 + 200,
  amount: 0,
  img: animeImg,
  index: 2
};

const array = [fish, trash, anime];

export default function App() {
  const [list, setList] = useState(array);
  const [total, setTotal] = useState('0.00');

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.nodeName !== 'ASIDE') {
        document.querySelector('aside').classList.remove('active');
      }
    });
  }, []);  

  function changeAmount(index, op) {
    if (list[index].amount <= 0 && op === 'neg') {
      return;
    }
    const clone = structuredClone(list);
    if (op === 'pos') {
      clone[index].amount++;
    } else {
      clone[index].amount--;
    }
    setTotal(((clone[0].price * clone[0].amount) 
    + (clone[1].price * clone[1].amount)
    + (clone[2].price * clone[2].amount)).toFixed(2));
    setList(clone);
  }

  return (
    <HashRouter basename='/'>
      <Nav list={list} total={total}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop list={list} changeAmount={changeAmount} />} />
      </Routes>
    </HashRouter>
  );
}