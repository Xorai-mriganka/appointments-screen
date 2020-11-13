import React, { Component } from 'react';
import './css/dropdown.css';
class Dropdown extends React.Component {
	render() {
		return (
			<div className="Dropdown">
				<nav className="nav">
					<ul className="nav__menu">
						<li className="nav__menu-item">
							<a>New Appointment</a>
						</li>
						<li className="nav__menu-item">
							<a>New Customer</a>
						</li>
						<li className="nav__menu-item">
							<a>Appointment menu</a>
							<Submenu1 />
						</li>
						<li className="nav__menu-item">
							<a>Work Status</a>
							<Submenu2 />
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
					<a>Appointments</a>
				</li>
				<li className="nav__submenu-item ">
					<a>Late</a>
				</li>
				<li className="nav__submenu-item ">
					<a>Waiting</a>
				</li>
			</ul>
		);
	}
}
class Submenu2 extends React.Component {
	render() {
		return (
			<ul className="nav__submenu">
				<li className="nav__submenu-item ">
					<a>Working</a>
					<span> 8</span>
				</li>
				<li className="nav__submenu-item ">
					<a>Ready To Pickup</a>
					<span> 2</span>
				</li>
				<li className="nav__submenu-item ">
					<a>Weekly Revenue</a>
					<span>22000$</span>
				</li>
			</ul>
		);
	}
}
export default Dropdown;
