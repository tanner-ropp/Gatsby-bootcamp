import React from 'react';
import Footer from './footer';
import Header from './Header';
import '../styles/index.scss';
import * as layoutStyles from './layout.module.scss'

function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div style={{position: "absolute", left: -250, top: -50, overflow: "hidden", zIndex: -1}}>
                <svg width="500" height="700" viewBox="0 0 265 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.5 469.725L60.5 4.65912C118.443 2.26133 196.174 8.22179 239 42C310 98 207 135 223 268C239 401 280 409 188 453C144.5 473.804 97.9257 475.14 60.5 469.725Z" fill="url(#paint0_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="7.24337" y1="-328" x2="257" y2="840" gradientUnits="userSpaceOnUse">
                    <stop offset="0.447917" stop-color="#AED5FA"/>
                    <stop offset="1" stop-color="#002DCE"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={layoutStyles.content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;