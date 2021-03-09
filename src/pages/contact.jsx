import React from 'react';
import Layout from '../components/Layout';

function ContactPage(props) {
    return (
        <Layout>
            <h1>Contact</h1>
            <ul>
                <li>352-281-3027</li>
                <li>tannerwr64@gmail.com</li>
                <li><a href="https://linkedin.com/in/tannerroppuf/" target="_blank">LinkedIn</a></li>
            </ul>
        </Layout>
    );
}

export default ContactPage;