import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

 
    if (weatherData.ready) {
    return (<div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" 
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleResponse}/>
                </div>
                <div className="col-3">
            <input type="submit"
            value="Search" 
            className="btn btn-primary"/>
                </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clear-fix">
                    <img src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left" />
                    <div className="float-left">
                             <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
                             </div>
                             </div> 
                    </div>
                <ul>
                    <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                    <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                </ul>
            </div>
        </div>
        );
    } else {
    const apiKey = "c119ffef35b7245a5e03b6e5724ae961";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading city...";
    }
        
}
