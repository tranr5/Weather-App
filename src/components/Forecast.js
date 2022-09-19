import React from "react";
import { useState } from "react";
import axios from "axios";


const Forecast = () => {
        const [temperatureone, setTemperatureone] = useState("");
        const [temperaturetwo, setTemperaturetwo] = useState("");
        const [temperaturethree, setTemperaturethree] = useState("");
        const [descriptionone, setDescone] = useState("");
        const [descriptiontwo, setDesctwo] = useState("");
        const [descriptionthree, setDescthree] = useState("");
        const [city, setCity] = useState("Melbourne");
        const [country, setCountry] = useState("AU");
    
        
      
        const getWeatherData = (city, country) => {
          axios({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`,
          })
            .then((response) => {
            
              setTemperatureone((response.data.list[1].main.temp - 273.15)*1.8 +32)
              setDescone(response.data.list[1].weather[0].description)
              setTemperaturetwo((response.data.list[2].main.temp - 273.15)*1.8 +32)
              setDesctwo(response.data.list[2].weather[0].description)
              setTemperaturethree((response.data.list[3].main.temp - 273.15)*1.8 +32)
              setDescthree(response.data.list[3].weather[0].description)
            })
            .catch((error) => {
              console.log(error);
            });
        };
      
        return (
          <>
            <div className="whole">
              <div className="hourly-container">
                <div className="hour one"> One hour<br/>{Math.round((temperatureone * 100) / 100)} ℉ <br/>{descriptionone}</div>
                <div className="hour two">Two hour<br/>{Math.round((temperaturetwo * 100) / 100)} ℉ <br/>{descriptiontwo}</div>
                <div className="hour three">Three hour<br/>{Math.round((temperaturethree * 100) / 100)} ℉ <br/>{descriptionthree}</div>
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

export default Forecast;