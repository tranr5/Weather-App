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
        const [icon, setIcon] = useState ();
        const [icontwo, setIcontwo] = useState ();
        const [iconthree, setIconthree] = useState ();
        
      
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
            //   console.log(icon)
              setIcon(response.data.list[1].weather[0].icon)
              setIcontwo(response.data.list[2].weather[0].icon)
              setIconthree(response.data.list[3].weather[0].icon)
              
            })
            .catch((error) => {
              console.log(error);
            });
        };
      
        return (
          <>
            <div className="hour-whole">
              <div className="hi">
                <div className="hour one">
                    <div className="hour-words">One hour<br/>{Math.round((temperatureone * 100) / 100)} ℉ <br/>{descriptionone}</div>
                <img
          alt=""
          className="hour-icons"
          src={`icons/${icon}.png`}
        /></div>
                <div className="hour two">
                <div className="hour-words">Two hour<br/>{Math.round((temperaturetwo * 100) / 100)} ℉ <br/>{descriptiontwo}</div>
                <img
          alt=""
          className="hour-icons"
          src={`icons/${icontwo}.png`}
        /></div>
                <div className="hour three">
                <div className="hour-words">Three hour<br/>{Math.round((temperaturethree * 100) / 100)} ℉ <br/>{descriptionthree}</div>
                <img
          alt=""
          className="hour-icons"
          src={`icons/${iconthree}.png`}
        /></div>
              </div>


              {/* target values for search */}
              <div className="form">
              <input className="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

        
              <input className="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              {/* button */}
              <button className="button"
                onClick={() => {
                  getWeatherData(city, country);
                }}
              >
                Search
              </button>
              </div>
            </div>
          </>
        );
      };

export default Forecast;

// export getWeatherData;