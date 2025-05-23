import React from 'react';
import DetailView from '../../components/DetailView/DetailView';
import NavBar from '../../components/NavBar/NavBar';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollTopButton';

function DetailPage(){
    return (
        <>
            <NavBar />
            <DetailView />
            <ScrollToTopButton />
        </>
    );
} 
export default DetailPage;