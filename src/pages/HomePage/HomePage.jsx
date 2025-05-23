
import React from 'react';
import ListView from '../../components/ListView/ListView';
import NavBar from '../../components/NavBar/NavBar';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollTopButton';
import CallButton from '../../components/CallButton/CallButton';

function HomePage(){
    return (
        <>
            <NavBar />
            <ListView />
            <CallButton />
            <ScrollToTopButton />
        </>
    );
} 
export default HomePage;