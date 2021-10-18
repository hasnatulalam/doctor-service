import React from 'react';
import About from '../../About/About';
import Appbar from '../Appbar/Appbar';
import Banner from '../Banner/Banner';
 import Footer from '../Footer/Footer';
 import Services from '../Services/Services'
 import Doctor from '../Doctor/Doctors'

const Home = () => {
    return (
        <div id="home">
            <Appbar></Appbar>
            <Banner></Banner>
            <About></About>
            
             <Services></Services>
             <Doctor></Doctor>
             <Footer></Footer> 
        </div>
    );
};

export default Home;