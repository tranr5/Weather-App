import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";



// console.log(SearchBar)

const WeatherApp = () => {
    const [temperature, setTemperature] = useState("");
    const [description, setDesc] = useState("");
    const [city, setCity] = useState("Melbourne");
    const [country, setCountry] = useState("AU");
    const [icon, setIcon] = useState ();
    
    const pic = `http://openweathermap.org/img/wn/${icon}.png`

  // getting data
    const getWeatherData = (city, country) => {
      axios({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`,
      })
        .then((response) => {
          // console.log(response.data.main.temp);
          // Kelvin to Fahrenheit
          // setTemperature((response.data.main.temp - 273.15) * 1.8 + 32);
          setTemperature((response.data.main.temp - 273.15)*1.8 +32);
          setIcon(response.data.weather[0].icon)
          // console.log(response.data);
          setDesc(response.data.weather[0].main);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  
    return (
      
      <>
        {/* <div
          style={{ height: "5px", width: "100%", backgroundColor: "blue" }}
        ></div> */}
        
        <div className="whole-current">
          <div className="current-container">
            {/* time and date */}
            {new Date().toLocaleString()}
            <br/>
            {city} Weather 
            <br/>
            {/* {Math.round( * 100) / 100} */}
            {Math.round((temperature * 100) / 100)} ℉ - {description}
            <img src="http://openweathermap.org/img/wn/027n2x.png" alt=""/>
          </div>
          
          {/* target values for search */}
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          {/* button */}
          <button
            onClick={() => {
              getWeatherData(city, country);
            }}
          >
            Search
          </button>
        </div>
      </>
    );
  };

export default WeatherApp;