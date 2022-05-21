import React from "react";
// import countryList from "./CountryList";
import './Country.css';
const HomeCountries = (props) => {
  return (
        <div className="">
            <div className=" m-2">
                <div className="country_img_div">
                    <img className=" country_img" src={props.countryImg} alt="countryImg" />
                </div>
                <div className="card_body tc ma_t">
                    <button className="btn btn-dark custom_btn w-100 btn-lg tc ma_b">{props.countryName}</button>
                </div>
            </div>
        </div>
  );
};

export default HomeCountries;
