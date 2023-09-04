import React from 'react';
import Hero from './Hero';
import TrendingGames from './TrendingGames';
import MostPlayed from './MostPlayed';
import TopCategories from './TopCategories';
import Bottom from './Bottom';
import Footer from './Footer';

export default function Home() {

    return (
        <>
            <Hero />
            <TrendingGames />
            <MostPlayed />
            <TopCategories />
            <Bottom />
            <Footer />
        </>
    )
}