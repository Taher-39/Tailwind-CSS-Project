import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Description from '../Description/Description';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Description></Description>
            <Footer></Footer>
        </div>
    );
};

export default Home;