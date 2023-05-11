/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../style/Shop.css';

export default function Shop(props) {
    return (
        <section>
            {props.list.map(item => {
                return <div className='card'>
                    <img src={item.img} />
                    <div>{item.txt}</div>
                    <div>${item.price.toFixed(2)}</div>
                    <div className='panel'>
                        <div onClick={() => {
                            props.changeAmount(item.index, 'neg');
                        }}><span>-</span></div>
                        <div className='amount'>{item.amount}</div>
                        <div onClick={() => {
                            props.changeAmount(item.index, 'pos');
                        }}><span>+</span></div>
                    </div>
                </div>;
            })}
        </section>
    );
}