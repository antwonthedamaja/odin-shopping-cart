/* eslint-disable react/prop-types */
import React from 'react';
import '../style/Nav.css';
import {Link} from 'react-router-dom';

export default function Nav(props) {
    return (
        <header>
            <div></div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </nav>
            <div>Total: {props.total}
            
            </div>
        </header>
    );
}