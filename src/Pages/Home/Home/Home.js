import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Contact></Contact>
        </div>
    );
};

export default Home;