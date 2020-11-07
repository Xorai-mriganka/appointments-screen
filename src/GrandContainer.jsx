import React from 'react';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import Divider from './Divider.jsx';
import TableContainer from './TableContainer.jsx';

const GrandContainer = props => (
  <div>
    <Navigation />
    <Header />
    <Divider />
    <TableContainer />
  </div>
);

export default GrandContainer;
