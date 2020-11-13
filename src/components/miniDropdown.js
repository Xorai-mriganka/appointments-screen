import React, { Component } from 'react';
import './css/dropdown.css';
class MiniDropdown extends React.Component {
	render() {
		return (
			<div className="miniDropdown">
				<nav className="nav">
					<ul className="nav__menu">
						<li className="nav__menu-item">
							<a>View By</a>
							<Submenu1 />
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

class Submenu1 extends React.Component {
	render() {
		return (
			<ul className="nav__submenu">
				<li className="nav__submenu-item ">
					<a>Time</a>
				</li>
				<li className="nav__submenu-item ">
					<a>Status</a>
				</li>
				<li className="nav__submenu-item ">
					<a>Adviser</a>
				</li>
			</ul>
		);
	}
}

export default MiniDropdown;
