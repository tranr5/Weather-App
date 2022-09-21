import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Forecast from "./Forecast";

const SearchBar = ({city,setCity,country,setCountry}) => {


  function handleSubmit (city,country) {
    setCity(city)
    setCountry(country)
  }

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
      placeholder="Melbourne" 
      onChange={(e) => setCity(e.target.value)}
      onKeyDown={searchEnter}
        />
      <input className="country"
      type="text" 
      value={country} 
      placeholder="AU" 
      onChange={(e) => setCountry(e.target.value)}
      onKeyPress={searchEnter}
        />
      {/* button */}
      <button className="button" type="submit"
        onClick={ () => handleSubmit(city,country)}>Search</button>
      </div>
    </>
)
        }

export default SearchBar;