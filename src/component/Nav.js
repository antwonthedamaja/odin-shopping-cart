/* eslint-disable react/prop-types */
import React from 'react';
import '../style/Nav.css';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart-variant.svg';

export default function Nav(props) {
    return (
        <header>
            <div></div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </nav>
            <div id="icons">
                <div>Total: ${props.total}</div>
                <img src={cartIcon}/>
            </div>
        </header>
    );
}