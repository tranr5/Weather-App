import React from "react";
import { useState } from "react";
import axios from "axios";
// import Forecast from "./Forecast";

const SearchBar = () => {
  const [data, setData] = useState({})
  const [city, setCity] = useState("Melbourne");
  const [country, setCountry] = useState("AU");

const getWeatherData = (city, country) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`,
    })
    .then((response) => {
       setData(response.data)
        // console.log(response.data.main.temp);

      })
      .catch((error) => {
        console.log(error);
      });
    }

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
      onClick={() => {
          getWeatherData(city, country);
          console.log(data.weather[0].icon)
          
        }}
      >
        Search
      </button>
      {/* <div className="dataa">{data}</div> */}
      </div>
    </>
)
        }

export default SearchBar;