import React from 'react';

function Footer(props) {
    const today = new Date()
    return (
        <footer>
            <p>Created by Tanner Ropp, © {today.getFullYear()}</p>
        </footer>
    );
}

export default Footer;