import React from 'react';
import FomoMagazine from './FomoMagazine/FomoMagazine';
import Hero from './hero/Hero';
import News from './news/News';
import Subscribe from './subscribe/Subscribe';
import Trust from './trust/Trust';

const Home = () => {
    return (
        <div>
            <Hero />
            <News />
            <FomoMagazine />
            <Trust />
            <Subscribe />
        </div>
    );
};

export default Home;