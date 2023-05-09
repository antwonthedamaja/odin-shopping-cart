/* eslint-disable react/prop-types */
import React from 'react';
import '../style/Nav.css';

export default function Nav(props) {

    return (
        <header>
            <nav></nav>
            <div>Total: {props.total}
            
            </div>
        </header>
    );
}