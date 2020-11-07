import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => (
    <div className="sidebar">
    <p className="side_text">Dashboard</p>
    <p className="side_text">Appointments</p>
    <p className="side_text">Customers</p>
  </div>
);

Sidebar.propTypes = {};

export default Sidebar;
