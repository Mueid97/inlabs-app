import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import OnApp from './OnApp';
import Send from './send and rece/Send';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <OnApp></OnApp>
            <Send></Send>
            <Footer></Footer>
        </div>
    );
};

export default Home;