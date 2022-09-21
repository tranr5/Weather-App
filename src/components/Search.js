import React from "react";
import WeatherApp from "./WeatherApp";

const Form = props => (
	<form onSubmit={console.log(props.getWeatherData)}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;