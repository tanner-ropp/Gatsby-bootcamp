import React from 'react';
import Footer from './footer';
import Header from './Header';
import '../styles/index.css';

function Layout(props) {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Layout;