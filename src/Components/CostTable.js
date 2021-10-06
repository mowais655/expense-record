// import React from "react";
import React, { Component, useState } from 'react';
import { Link }  from 'react-router-dom';

const CostTable = () => {

  const [newRegistration, setNewRegistration] = useState({
    date: "",
    category: "",
    description: "",
    amount: ""
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setNewRegistration({ ...newRegistration, [name] : value});
  }
  const shoot = () => {
    alert("All details are saved")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...newRegistration, id: new Date().getTime().toString()}
    console.log(records);
    setRecords([... records, newRecord]);
    console.log(records);

    setNewRegistration({date:"", category:"", description:"", amount:""});
  }
    return (
      <>
      <form action="" onSubmit={handleSubmit}>
      <div className="main_page">
        <div className="inner_page">
          <div className="form">
            {/* <div className="month-amount-wrap">
              <div className="month">
                <p>Sept</p>
              </div>
              <div className="amount">
                <p>$20,000</p>
              </div>
            </div> */}
            <div className="data-wrap">
              <div className="content">
                <div>
                  <label htmlFor="date">Date</label>
                  <input type="date" 
                    value={records.date}
                    onChange={handleInput}
                    name="date" id="date" />
                </div>
                <br />
                <div>
                  <label htmlFor="text">Category</label>
                  <input type="text" 
                    value={records.category}
                    onChange={handleInput}
                    name="category" id="category" />
                </div>
                <br />
                <div>
                  <label htmlFor="text">Description</label>
                  <input type="text" 
                    value={records.description}
                    onChange={handleInput}
                    name="description" id="description" />
                </div>
                <br />
                <div>
                  <label htmlFor="number">Amount</label>
                  <input type="number" 
                    value={records.amount}
                    onChange={handleInput}
                    name="amount" id="amount" />
                </div>
                <br />
              </div>
              <div className="buttons">
                <button type="submit" onClick={shoot}> Save </button>
                <br />
                <button type="button"> <Link to={'/'}> Cancel </Link> </button>
              </div>
            </div>
          </div>
          </div>
        
        <div className="record-data">
        {
          records.map((curElem) => {
            return(
              <div>
                  <table>
                  <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                  <tr>
                    <td>{curElem.date}</td>
                    <td>{curElem.category}</td>
                    <td>{curElem.description}</td>
                    <td>{curElem.amount}</td>
                  </tr>
                  </table>
              </div>
            )
          })
        }
      </div>
        </div>
      </form>
      </>
    )
  }

export default CostTable;