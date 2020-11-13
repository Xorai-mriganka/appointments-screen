import React from 'react';
import './css/Navigation.css';
import Sidebar from './Sidebar';
import Header from './Header.jsx';
const Navigation = (props) => (
	<>
		<div className="Nav_sidebar">
			<div className="Xorai_header">
				<span className="Xorai">xorai</span>	
			</div>
			<Sidebar />
			<Header />
		</div>
	</>
);

Navigation.propTypes = {};

export default Navigation;
