import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Form from "./Search";


// console.log(SearchBar)

const WeatherApp = (props) => {
    const [temperature, setTemperature] = useState("");
    const [description, setDesc] = useState("");
    const [icon, setIcon] = useState ();

  // getting data
    const getWeatherData = (city, country) => {
      axios({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.country}&APPID=180941f68139fba12f166dc35d9b688b`,
      })
        .then((response) => {
          // console.log(response.data.main.temp);
          // Kelvin to Fahrenheit
          // setTemperature((response.data.main.temp - 273.15) * 1.8 + 32);
          setTemperature((response.data.main.temp - 273.15)*1.8 +32);
          setIcon(response.data.weather[0].icon)
          // console.log(icon)
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
          <div className="middle">
            {/* time and date */}
            <div className="current-words">
            {new Date().toLocaleString()}
            <br/>
            {props.city} Weather 
            <br/>
            {/* {Math.round( * 100) / 100} */}
            {Math.round((temperature * 100) / 100)} ℉ - {description}
            </div>
          
          <div className="weather-icon">
            <img alt="" className="weather-icon" src={`icons/${icon}.png`}/>
          </div>
          </div>
          {/* target values for search */}
        </div>
      </>
    );
  };

export default WeatherApp;