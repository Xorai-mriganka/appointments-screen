import React from 'react';
import PropTypes from 'prop-types';
import "./css/Navigation.css";
import Sidebar from './Sidebar';
import Header from './Header.jsx';
const Navigation = props => (
    <div>
        <Sidebar/>
        <Header />
       <div className="Nav_sidebar">
      <div className="Xorai_header">
        <span className="Xorai">xorai</span>
        <span className="left_tags">
          <span className="lefty">Monmi   Dutta</span>
          <span className="lefty">Support</span>
          <span className="lefty">Scheduler</span>
        </span>
      </div>
     
      
    </div>
    </div>
  );

Navigation.propTypes = {};

export default Navigation;
