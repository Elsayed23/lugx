import React from 'react';

export default function TopCategories() {

    const gamesData = [
        {
            id: 1,
            category: "Action",
            imgUrl: require('..//../images/categories-01.jpg')
        },
        {
            id: 2,
            category: "Action",
            imgUrl: require('..//../images/categories-02.jpg')
        },
        {
            id: 3,
            category: "Action",
            imgUrl: require('..//../images/categories-03.jpg')
        },
        {
            id: 4,
            category: "Action",
            imgUrl: require('..//../images/categories-04.jpg')
        },
        {
            id: 5,
            category: "Action",
            imgUrl: require('..//../images/categories-05.jpg')
        },
    ]

    const cards = gamesData.map(card => {
        return (
            <div className="card rounded-xl bg-[var(--primary)]" key={card.id}>
                <h2 className='text-white font-bold text-center py-5'>{card.category}</h2>
                <a href="##">
                    <img src={card.imgUrl} className='w-full rounded-xl' alt="" />
                </a>
            </div>
        )
    })

    return (
        <div className="topCategories mt-32">
            <div className="container mx-auto">
                <div className="top mb-14 text-center">
                    <h2 className='text-[var(--secondary)] font-bold mb-3'>categories</h2>
                    <h1 className='text-4xl font-bold'>Top Categories</h1>
                </div>
                <div className="cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {cards}
                </div>
            </div>
        </div>

    )
}