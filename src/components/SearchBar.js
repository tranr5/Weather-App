import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
// import Forecast from "./Forecast";

const SearchBar = ({city,setCity,country,setCountry}) => {

  const [weatherType, getWeatherData] = useState('')
  
  useEffect(() => {
    // console.log({city},{country})
    console.log(weatherType)  
    
  }, [weatherType]);

return (
    <>
    <div className="form">
      
      <input className="city"
      type="text" value={city} onChange={(e) => setCity(e.target.value)}
      // onKeyPress={searchLocation}
        />
      <input className="country"
      type="text" value={country} onChange={(e) => setCountry(e.target.value)}
        />
      {/* button */}
      <button className="button"
        onClick={ () => getWeatherData({city,country})}>Search</button>
      </div>
    </>
)
        }

export default SearchBar;