import './App.css';
import WeatherApp from './components/WeatherData';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';


function App() {
  return (
    <div className="App">
      <div className="nav">
        <SearchBar/>
        <h3>Weather App</h3>
   
   </div>
   
   <div className='current-container'>
    <div className='title'><h4>Current Weather</h4><p>{new Date().toLocaleString()}</p></div>
    <WeatherApp/>
    </div>
    
    <div className='hourly-container'>
    <h4>Hourly</h4>
    <Forecast/>
    </div>
   
    </div>
  );
}

export default App;
