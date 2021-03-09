import React from 'react';
import Footer from './footer';
import Header from './Header';

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