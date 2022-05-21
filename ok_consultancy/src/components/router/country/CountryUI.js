import React from "react";
import HomeCountries from "./HomeCountry";
import countryList from "./CountryList";
const CountryUI = () => {
  return (
    <div className="container">
      <div className="row">
        {countryList.map((items) => {
          return (
            <div className="col-md-4">
              <HomeCountries
                key={items.id}
                countryName={items.country_name}
                countryImg={items.country_img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryUI;
