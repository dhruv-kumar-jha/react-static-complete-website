'use strict';

import React from 'react';
import { Link } from 'react-router';


const Header = (props) => {

	return (
		<header className="main">
		<div className="container">

			<div className="logo">
				<Link to="/">Productivity Application</Link>
			</div>

			<nav>
				<Link to="/" activeClassName="active">Home</Link>
				<span className="sep"></span>
				<Link to="/features" activeClassName="active">Features</Link>
				<span className="sep"></span>
				<Link to="/about" activeClassName="active">About</Link>
				<span className="sep"></span>
				<Link to="/contact-us" activeClassName="active">Contact Us</Link>
			</nav>

		</div>
		</header>
	);

}

export default Header;
