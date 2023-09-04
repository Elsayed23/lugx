import React from 'react';

export default function MostPlayed() {

    const gamesData = [
        {
            id: 1,
            imgUrl: require('..//../images/top-game-01.jpg'),
            category: "Shooter",
            gameName: "Warframe",
        },
        {
            id: 2,
            imgUrl: require('..//../images/top-game-02.jpg'),
            category: "Shooter",
            gameName: "Pubg",
        },
        {
            id: 3,
            imgUrl: require('..//../images/top-game-03.jpg'),
            category: "Shooter",
            gameName: "Apex",
        },
        {
            id: 4,
            imgUrl: require('..//../images/top-game-04.jpg'),
            category: "FPS",
            gameName: "TheSims",
        },
        {
            id: 5,
            imgUrl: require('..//../images/top-game-05.jpg'),
            category: "Shooter",
            gameName: "LostArk",
        },
        {
            id: 6,
            imgUrl: require('..//../images/top-game-06.jpg'),
            category: "Shooter",
            gameName: "Distiny",
        },

    ]

    const cards = gamesData.map(card => {
        return (
            <div className="card shadow-sm group bg-white rounded-2xl text-center" key={card.id}>
                <a href="##">
                    <img src={card.imgUrl} className='rounded-2xl w-full' alt="" />
                </a>
                <div className="content pt-4 pb-8 relative">
                    <h4 className='text-[#7a7a7a]'>{card.category}</h4>
                    <h2 className='font-semibold group-hover:text-[var(--primary)] duration-300'>{card.gameName}</h2>
                    <a href='##' className='uppercase text-sm font-semibold bg-[var(--secondary)] group-hover:bg-[var(--primary)] duration-300 px-4 py-2 rounded-full text-white absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2'>explore</a>
                </div>
            </div>
        )
    })


    return (
        <div className="mostPlayed mt-20 py-28 bg-[#f7f7f7] rounded-[100px]">
            <div className="container mx-auto">
                <h2 className='uppercase text-[var(--secondary)] font-bold mb-2'>top games</h2>
                <div className='flex mb-14 justify-between items-start flex-col gap-4 md:flex-row md:items-center'>
                    <h1 className='capitalize text-4xl font-bold'>Most Played</h1>
                    <a href='##' className='py-3 px-8 rounded-full text-white font-semibold bg-[var(--secondary)] duration-300 hover:bg-[var(--primary)]'>view all</a>
                </div>
                <div className="cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-10">
                    {cards}
                </div>
            </div>
        </div>
    )
}