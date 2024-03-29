import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
<Weather defaultCity="New York"/>
</div>
<footer> This project was coded by <a href="https://www.linkedin.com/in/sarah-kennedy-02b2b6293/" target="_blank" rel="noopener noreferrer">Sarah Kennedy</a> and is <a href="https://github.com/SKennedy4123/kennedy-react-weather-app" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a> and <a href="https://kennedy-react-weather-app.netlify.app/?" rel="noopener noreferrer">hosted on Netlify.</a>
   </footer>
    </div>
  );
}