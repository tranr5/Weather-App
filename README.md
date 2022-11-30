# Weather React App

[<b>Link</b>](https://weatherapprt.herokuapp.com/)

## Description:

This project is a weather app using React and OpenWeatherMapp API. Its intended use is to pull weather data and give the user information on the current and hourly weather when location is inputted. I wanted to see how I could implement the APIs and figure out how to use the data given. 
<br>
<br>
<br>
<br>
![image](https://i.imgur.com/0TA1B1e.png)

## Tech Stack

React, Html, CSS, Postman

## Wireframes


![image](https://user-images.githubusercontent.com/109304616/190714522-73db4968-7c7d-4627-9300-e1caa6e3f0b8.png)
<br>
<br>
<br>
<br>
## Getting Started

First you need an API key from OpenWeatherMap, you can get one by creating an account on their website. After you got your API key, create a .env file at root directory of project, copy the line below to the file and replace YOUR_KEY with your OpenWeatherMap API Key.
```
git clone https://github.com/tranr5/Weather-App.git
```
```
cd weather-app
npm install
npm start
```

## Component Heirarchy

![image](https://user-images.githubusercontent.com/109304616/190704662-0992aa46-2f83-4fa8-8f52-4093dea4a716.png)

## Credits

[OpenWeatherMap](https://openweathermap.org/)

<b>improvements:</b><br>
change time based on timezone of location<br>
add search button<br>
add daily page<br>
add a toggle feature for Celsius and Farenheit
