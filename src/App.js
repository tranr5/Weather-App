import './App.css';
import WeatherApp from './components/WeatherData';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';


function App() {
  return (
    <div className="App">
   <h1>Weather App</h1>
   <SearchBar/>
   <div>
    <h2>Current Weather</h2>
    <WeatherApp/>
    
    <h2>Hourly</h2>
    <Forecast/>
   </div>
    </div>
  );
}

export default App;
