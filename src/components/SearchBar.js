import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Forecast from "./Forecast";

const SearchBar = ({city,setCity,country,setCountry}) => {


  // function handleSubmit (city,country) {
  //   setCity(city)
  //   setCountry(country)
  // }



  const searchEnter = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate')
    }
  }



return (
    <>
    <div className="form">
      
      <input className="city"
      type="text" 
      value={city} 
      placeholder="City" 
      onChange={(e) => setCity(e.target.value)}
      onKeyDown={searchEnter}
        />
      <input className="country"
      type="text" 
      value={country} 
      placeholder="Country" 
      onChange={(e) => setCountry(e.target.value)}
      onKeyPress={searchEnter}
        />
      </div>
    </>
)
        }

export default SearchBar;