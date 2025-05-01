import React from 'react'
import './Card.css'

const Card = () => {
    const cards = [
        { id: 1, title: "Card One", description: "This is card one." },
        { id: 2, title: "Card Two", description: "This is card two." }
    ];

    return (
        <div className='card-section'>
            <h2>Our Cards</h2>
            <div className='card-container'>
                {cards.map((card) => (
                    <div className='card' key={card.id}>
                        <h3>{card.title}</h3>
                        <p> {card.description} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card