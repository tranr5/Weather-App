import './App.css';
import WeatherApp from './components/WeatherApp';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import Form from './components/Search';
import {useState} from 'react'

function App() {
  const [city, setCity] = useState("Melborne");
  const [country, setCountry] = useState("AU");


  return (
    <div className="App">
      <div className="nav">
        <SearchBar city={city} country={country} setCity={setCity} setCountry={setCountry}/>
        <Form />
        <h3>Weather App</h3>
    </div>
   
   <div className='current-container'>
    <div className='title'><h4>Current Weather</h4><p>{new Date().toLocaleString()}</p></div>
    <WeatherApp city={city} country={country}/>
    </div>
    
    <div className='hourly-container'>
    <h4>Hourly</h4>
    <Forecast/>
    </div>
   
    </div>
  );
}

export default App;

