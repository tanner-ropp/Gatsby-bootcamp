import React from 'react';
import { Link } from 'gatsby'
import Footer from '../components/footer';
import Header from '../components/Header';
import Layout from '../components/Layout';

function AboutPage(props) {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>My name is Tanner, and I am a Computer Science Major at the University of Florida. 
            I develop web apps, mobile apps, and play music.
            </p>
            <Link to="/contact">Contact me.</Link>
        </Layout>
    );
}

export default AboutPage;