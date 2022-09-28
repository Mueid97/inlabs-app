import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Notify from './notify/Notify';
import OnApp from './OnApp';
import Less from './seemless/Less';
import Send from './send and rece/Send';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <OnApp></OnApp>
            <Send></Send>
            <Notify></Notify>
           <Less></Less>
            <Footer></Footer>
        </div>
    );
};

export default Home;