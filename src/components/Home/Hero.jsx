import React from 'react';
import Navbar from './Navbar';
import bannerImage from '..//../images/banner-image.jpg'

export default function Hero() {

    const featureData = [
        {
            id: 1,
            imgUrl: require("..//../images/featured-01.png"),
            featureName: "Free Storage"
        },
        {
            id: 2,
            imgUrl: require("..//../images/featured-02.png"),
            featureName: "user more"
        },
        {
            id: 3,
            imgUrl: require("..//../images/featured-03.png"),
            featureName: "reply ready"
        },
        {
            id: 4,
            imgUrl: require("..//../images/featured-04.png"),
            featureName: "easy layout"
        },
    ];

    let features = featureData.map(feature => {
        return (
            <div className="feature rounded-xl shadow-lg py-9 flex flex-col items-center gap-4 bg-white group" key={feature.id}>
                <div className="image w-20 h-20 rounded-full flex justify-center group-hover:bg-[var(--secondary)] duration-300 items-center bg-[var(--primary)]">
                    <img src={feature.imgUrl} alt="" />
                </div>
                <h2 className='uppercase font-semibold'>{feature.featureName}</h2>
            </div>
        )
    })


    return (
        <>
            <Navbar />
            <div className='hero text-slate-50 bg-center rounded-b-[150px] bg-cover pt-40 pb-36 md:p-0'>
                <div className="container mx-auto md:h-screen gap-10 md:gap-0 flex flex-col md:flex-row items-center justify-between">
                    <div className="left">
                        <h2 className='text-xl font-semibold mb-4'>WELCOME TO LUGX</h2>
                        <h1 className='text-3xl md:text-5xl font-bold mb-9'>BEST GAMING SITE EVER!</h1>
                        <p className='mb-16 md:max-w-sm lg:max-w-2xl leading-7 text-sm'>
                            LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.
                        </p>
                        <div className="form md:w-96 relative">
                            <input type="text" name="" className='h-12 rounded-full focus:outline-none text-[#7a7a7a] text-sm px-6 w-full' placeholder='type something' />
                            <button className='uppercase absolute right-0 h-12 bg-[#ee626b] rounded-full px-4 text-sm font-medium hover:bg-[var(--primary)] duration-300'>search now</button>
                        </div>
                    </div>
                    <div className="rightImg relative">
                        <img src={bannerImage} alt="" className=' rounded-2xl' />
                        <div className="price font-bold text-slate-50 py-2 px-4 rounded-full absolute top-4 right-4 text-xl bg-[var(--primary)]">
                            22$
                        </div>
                        <div className="discount font-bold text-slate-50 flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full absolute bottom-4 left-4 md:-bottom-7 md:-left-7 text-xl md:text-2xl bg-[var(--secondary)]">
                            -40%
                        </div>
                    </div>
                </div>
            </div>
            <div className="features -translate-y-11">
                <div className="container mx-auto">
                    <div className="items grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {features}
                    </div>
                </div>
            </div>
        </>
    )
}