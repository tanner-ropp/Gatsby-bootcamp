import { Link } from 'gatsby';
import React from 'react';

import * as headerStyles from './header.module.scss';

function Header(props) {
    return (
        <header>
            <h1>Tanner Ropp</h1>
            <nav>
                <ul>
                    <li>
                        <Link className={headerStyles.link} to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;