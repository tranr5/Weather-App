import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";


const Forecast = ({city, country}) => {
        const [temperatureone, setTemperatureone] = useState("");
        const [temperaturetwo, setTemperaturetwo] = useState("");
        const [temperaturethree, setTemperaturethree] = useState("");
        const [descriptionone, setDescone] = useState("");
        const [descriptiontwo, setDesctwo] = useState("");
        const [descriptionthree, setDescthree] = useState("");
        
        const [icon, setIcon] = useState ();
        const [icontwo, setIcontwo] = useState ();
        const [iconthree, setIconthree] = useState ();

      
        const getWeatherData = (city, country) => {
          axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`,
          })
            .then((response) => {
            
              setTemperatureone((response.data.list[1].main.temp - 273.15)*1.8 +32)
              setDescone(response.data.list[1].weather[0].description)
              setTemperaturetwo((response.data.list[2].main.temp - 273.15)*1.8 +32)
              setDesctwo(response.data.list[2].weather[0].description)
              setTemperaturethree((response.data.list[3].main.temp - 273.15)*1.8 +32)
              setDescthree(response.data.list[3].weather[0].description)
              setIcon(response.data.list[1].weather[0].icon)
              setIcontwo(response.data.list[2].weather[0].icon)
              setIconthree(response.data.list[3].weather[0].icon)

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
            <div className="hour-whole">
                <div className="hour one">
                  <div className="hour-detail">
                    <div className="hour-words">One hour</div>
                    <div className="hour-temp">{Math.round((temperatureone * 100) / 100)} ℉ </div>
                    <div className="hour-desc">{descriptionone}</div></div>
                <img
          alt=""
          className="hour-icons"
          src={`icons/${icon}.png`}
        /></div>
                <div className="hour two">
                <div className="hour-detail">
                    <div className="hour-words">Two Hours</div>
                    <div className="hour-temp">{Math.round((temperaturetwo * 100) / 100)} ℉ </div>
                    <div className="hour-desc">{descriptiontwo}</div></div>
                <img
          alt=""
          className="hour-icons"
          src={`icons/${icontwo}.png`}
        /></div>
                <div className="hour three">
                <div className="hour-detail">
                    <div className="hour-words">Three Hours</div>
                    <div className="hour-temp">{Math.round((temperaturethree * 100) / 100)} ℉ </div>
                    <div className="hour-desc">{descriptionthree}</div></div>
                <img
          alt=""
          className="hour-icons"
          src={`icons/${iconthree}.png`}
        /></div>
              


          
            </div>
          </>
        );
      };

export default Forecast;

// export getWeatherData;


