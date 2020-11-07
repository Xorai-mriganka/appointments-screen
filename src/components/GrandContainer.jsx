import React from 'react';
import Navigation from './Navigation.jsx';
import Divider from './Divider.jsx';
import TableContainer from './TableContainer.jsx';

const GrandContainer = props => (
  <div>
    <Navigation />

    <Divider />
    <TableContainer />
  </div>
);

GrandContainer.propTypes = {};

export default GrandContainer;
