import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";




// console.log(SearchBar)

const WeatherApp = ({city,country}) => {
    const [temperature, setTemperature] = useState("");
    const [description, setDesc] = useState("");
    const [icon, setIcon] = useState ();
    
  // getting data
    const getWeatherData = (city, country) => {
      axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`,
      })
        .then((response) => {
          // Kelvin to Fahrenheit
          // setTemperature((response.data.main.temp - 273.15) * 1.8 + 32);
          setTemperature((response.data.main.temp - 273.15)*1.8 +32);
          setIcon(response.data.weather[0].icon)
          setDesc(response.data.weather[0].main);
          
        })
        .catch((error) => {
          console.log(error);
        });
    };

    useEffect(() => {
      getWeatherData(city,country)
      

    }, [city,country]);


    return (
      
      <>
        {/* <div
          style={{ height: "5px", width: "100%", backgroundColor: "blue" }}
        ></div> */}
        
        <div className="whole-current">
          <div className="middle">
            {/* time and date */}
            <div className="current-words">
          
     
            {city} 
            <br/>
            {/* {Math.round( * 100) / 100} */}
            <span className="current-temp">{Math.round((temperature * 100) / 100)} ℉</span>
             - {description}
            </div>
          
          <div className="weather-icon">
            <img alt="" className="weathericon" src={`icons/${icon}.png`}/>
          </div>
          </div>
          {/* target values for search */}
        </div>
      </>
    );
  };

export default WeatherApp;