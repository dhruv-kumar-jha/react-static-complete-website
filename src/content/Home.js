'use strict';

import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {

    return (
        <div>

            <header>
                
                <div className="title"><Link to="/">Productivity Application</Link></div>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>

            </header>

            <div>
                <h1>HOME PAGE</h1>
                <p>Welcome to Productivity Application Home Page.</p>
            </div>

        </div>
    );

}

export default Home;
