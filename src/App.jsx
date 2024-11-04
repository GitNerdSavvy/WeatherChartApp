import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "./App.css";
import Left from "./Components/Left";
import Right from "./Components/Right";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Goa"); 
  const [isCelsius, setIsCelsius] = useState(true); 

  const getWeatherData = () => {
    const unit = isCelsius ? "metric" : "imperial";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e733ecd5ae8a7cd7df3bf03cbbbbe2e5&units=${unit}`
      )
      .then((response) => {
        console.log(response);
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };



  useEffect(() => {
    getWeatherData();
  }, [city, isCelsius]);

  return (
    <div className="weather">
      <Left
        weatherData={weatherData} 
        setCity={setCity} 
        isCelsius={isCelsius} 
        setIsCelsius={setIsCelsius} 
      />
      <Right weatherData={weatherData} />
    </div>
  );
}

export default App;
