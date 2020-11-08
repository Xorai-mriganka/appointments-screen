import React from 'react';
import Navigation from './Navigation.jsx';
import Divider from './Divider.jsx';
import TableContainer from './TableContainer.jsx';
import "./css/GrandContainer.css"

const GrandContainer = props => (
  <div className="GrandContainer">
    <Navigation />
    <TableContainer />
  </div>
);

GrandContainer.propTypes = {};

export default GrandContainer;
