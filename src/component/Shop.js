/* eslint-disable react/jsx-key */
import React from 'react';
import '../style/Shop.css';

const fish = 'Fish';
const trash = 'Trash';
const annoying = 'Annoying kid';
const karen = 'Karen';
const question = 'Question mark guy';
const anime = 'Anime girl';

const array = [fish, trash, annoying, karen, question, anime];

export default function Shop() {
    return (
        <section>
            {array.map(item => {
                return <div className='card'>
                    
                </div>;
            })}
        </section>
    );
}