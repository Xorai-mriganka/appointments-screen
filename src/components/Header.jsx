import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
    <>
    <div>
        <span className="header2">
        <button className="appnt">NEW APPOINTMENT</button>
        <button className="customer">NEW CUSTOMER</button>
      </span>
    </div>
    

      <div className="header3">
        <span className="lefthead3">
          <button className="App12">
            Appointments<span className="numbers">12</span>
          </button>
          <button className="App12">
            Late<span className="numbers">2</span>
          </button>
          <button className="App12">
            Waiting<span className="numbers">3</span>
          </button>
        </span>
        <span className="righthead3">
          <button className="App12">
            Working<span className="numbers">8</span>
          </button>
          <button className="App12">
            Ready for Pickup<span className="numbers">5</span>
          </button>
          <button className="App12">Weekly Revenue</button>
          <button className="App12">
            <span className="numbers">$5,672</span>
          </button>
          <button className="App12">
            <span className="numbers">8:05AM</span>
          </button>
        </span>
      </div>
      <div className="header4">
        <span className="left">
          <span className="tues">Tuesday</span>
          <span className="date">May 22,2013</span>
        </span>
        <span className="view">
          <span className="vb">View by</span>
          <button className="time">TIME</button>
          <button className="Status">STATUS</button>
          <button className="Advisor">ADVISOR</button>
        </span>
      </div>
      </>
);

Header.propTypes = {};

export default Header;
