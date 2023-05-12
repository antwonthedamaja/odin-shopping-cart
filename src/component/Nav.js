/* eslint-disable react/prop-types */
import React from 'react';
import '../style/Nav.css';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart-variant.svg';

export default function Nav(props) {
    function showAside() {
        setTimeout(() => document.querySelector('aside').classList.toggle('active'), 150);
    }

    return (
        <header>
            <div></div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </nav>
            <div id="icons" onClick={showAside}>
                <div>Total: ${props.total}</div>
                <img src={cartIcon}/>
            </div>
            <aside>

            </aside>
        </header>
    );
}