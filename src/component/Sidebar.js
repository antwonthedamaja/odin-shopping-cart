/* eslint-disable react/prop-types */
import React from 'react';
import '../style/Sidebar.css';

export default function Sidebar(props) {
    return <aside>
        <div>Your Cart:</div>
        <div id="cart-items">
        {props.list.map(item => {
            if (item.amount > 0) {
                return <div className="item-in-cart" key={item.index}>
                    <img src={item.img} />
                    <div>
                        <div>{item.txt}</div>
                        <div>Amount: {item.amount}</div>
                        <div>${(item.amount * item.price).toFixed(2)}</div>
                    </div>
                </div>;
            }
        })}
        <div id="cart-total">Total: ${props.total}</div>
        <button id="purchase" onClick={() => alert('Thanks for shopping!')}>Purchase</button>
        </div>
    </aside>;
}