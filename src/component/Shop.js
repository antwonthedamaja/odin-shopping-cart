/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../style/Shop.css';

export default function Shop(props) {

    function increaseAmount(e) {
        const clone = structuredClone(props.list);
        console.log(clone);
        clone[e.target.attributes.name].amount++;
        props.setList(clone);
    }

    function decreaseAmount(e) {
        console.log(e);
    }

    return (
        <section>
            {props.list.map(item => {
                return <div className='card'>
                    <img src={item.img} />
                    <div>{item.txt}</div>
                    <div>${item.price.toFixed(2)}</div>
                    <div className='panel'>
                        <div name={item.name} onClick={decreaseAmount}>-</div>
                        <div className='amount'>{item.amount}</div>
                        <div name={item.name} onClick={increaseAmount}>+</div>
                    </div>
                </div>;
            })}
        </section>
    );
}