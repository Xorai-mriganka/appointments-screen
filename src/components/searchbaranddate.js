import React, { Component } from 'react';
import Searchbar from './searchbar';
import Datepicker from './date';
import './css/searchbaranddate.css';
class Searchbaranddate extends Component {
	render() {
		return (
			<>
				<Datepicker />
				<Searchbar />
			</>
		);
	}
}

export default Searchbaranddate;
