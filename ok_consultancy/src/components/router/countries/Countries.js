import React from "react";
import CountryUI from "../country/CountryUI";
import './Countries.css';

const Countries = () => {
  return (
    <div className="container ma_tb">
      {/* <div className="row">
        <div className="col-lg-3">
          <h1>Australia</h1>
        </div>
        <div className="col-lg-9">
          <h1 className="tc">About Australia</h1>
        </div>
      </div> */}
      
      <div className="row">
      <h1 className="tc ma_tb country_heading">Explore Countries</h1>
      <h4 className="tc ma_tb country_heading">We are truly glad with more choices and support to offer.</h4>
        <CountryUI />
      </div>
    </div>
  );
};

export default Countries;
