import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';



export default function TrendingGames() {

    const gamesData = [
        {
            id: 1,
            price: "20$",
            imgUel: require("..//../images/trending-01.jpg"),
            category: "Action",
            gameName: "Assassin's Creed",
        },
        {
            id: 2,
            price: "44$",
            imgUel: require("..//../images/trending-02.jpg"),
            category: "Action",
            gameName: "Assassin's Creed",
        },
        {
            id: 3,
            price: "50$",
            imgUel: require("..//../images/trending-03.jpg"),
            category: "Action",
            gameName: "Assassin's Creed",
        },
        {
            id: 4,
            price: "32$",
            imgUel: require("..//../images/trending-04.jpg"),
            category: "Action",
            gameName: "Assassin's Creed",
        },
    ]


    const cards = gamesData.map(card => {
        return (
            <a href='##' className="card shadow-sm group rounded-2xl bg-[#eeeeee] relative" key={card.id}>
                <div className="price py-2 px-4 text-white font-bold bg-[var(--primary)] absolute top-4 right-4 rounded-full">
                    {card.price}
                </div>
                <img src={card.imgUel} alt="" className='rounded-2xl w-full' />
                <div className="content p-5 flex justify-between items-center">
                    <div className="left">
                        <h4 className='text-[#7a7a7a] font-medium'>{card.category}</h4>
                        <h2 className='font-semibold group-hover:text-[var(--primary)] duration-300'>{card.gameName}</h2>
                    </div>
                    <div className="shopping group-hover:bg-[var(--primary)] duration-300 w-10 flex justify-center items-center text-white h-10 bg-[var(--secondary)] rounded-full">
                        <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                </div>
            </a>
        )
    })

    return (
        <div className="TrendingGames py-28">
            <div className="container mx-auto">
                <h2 className='uppercase text-[var(--secondary)] font-bold mb-2'>trentding</h2>
                <div className='flex mb-14 justify-between items-start flex-col gap-4 md:flex-row md:items-center'>
                    <h1 className='capitalize text-4xl font-bold'>trending games</h1>
                    <a href='##' className='py-3 px-8 rounded-full text-white font-semibold bg-[var(--secondary)] duration-300 hover:bg-[var(--primary)]'>view all</a>
                </div>
                <div className="cards grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards}
                </div>
            </div>
        </div>
    )

}