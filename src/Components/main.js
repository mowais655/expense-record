// import React from "react";
import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

class Main extends Component {
  shoot() {
    alert("All details are saved");
  }
  render() {
    return (
      <div className="main_page">
        <div className="inner_page">
          <div className="form">
            <div className="month-amount-wrap">
              <div className="month">
                <p>Sept</p>
              </div>
              <div className="amount">
                <p>$20,000</p>
              </div>
            </div>
            <div>
            <Link to={'/add-costtable'}> Add </Link>
            </div>
          </div>
        </div>
      </div>

    );
  };
}
export default Main;