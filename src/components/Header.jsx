import React from 'react';
import "./css/Header.css"

const Header = props => (
    <div className ="HeadContainer">
    <div className="header2">
        <button className="appnt">NEW APPOINTMENT</button>
        <button className="customer">NEW CUSTOMER</button>
    </div>
    

      <div className="header3">

        <div className="lefthead3">
          <button className="App12">
            Appointments<span className="numbers">12</span>
          </button>
          <button className="App12">
            Late<span className="numbers">2</span>
          </button>
          <button className="App12">
            Waiting<span className="numbers">3</span>
          </button>
        </div>

        <div className="righthead3">
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
        </div>
      </div>
      <div className="header4">
        <div className="left">
          <div className="tues">Tuesday</div>
          <div className="date">May 22,2013</div>
        </div>
        <div className="view">
          <div className="vb">View by</div>
          <div className="stackButton">
          <button className="time">TIME</button>
          <button className="Status">STATUS</button>
          <button className="Advisor">ADVISOR</button>
          </div>
        </div>
      </div>
      </div>
);

Header.propTypes = {};

export default Header;
