import React from 'react';
import Footer from '../components/footer';
import Header from '../components/Header';

function ContactPage(props) {
    return (
        <div>
            <Header/>
            <h1>Contact</h1>
            <ul>
                <li>352-281-3027</li>
                <li>tannerwr64@gmail.com</li>
                <li><a href="https://linkedin.com/in/tannerroppuf/" target="_blank">LinkedIn</a></li>
            </ul>
            <Footer/>
        </div>
    );
}

export default ContactPage;