import React, { useEffect } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { WiHumidity, WiDayWindy, WiSnowflakeCold, WiThermometerExterior, WiRain, WiNightAltHail } from "react-icons/wi";
// import * as GaugeChart from 'https://unpkg.com/gauge-chart@next/dist/bundle.mjs';

const humy_details = (num) => {
  if (num < 34) return "good";
  if (num < 67) return "normal";
  return "bad";
};

const Right = ({ weatherData }) => {
  const humidity = weatherData?.main?.humidity ?? 0;
  const windSpeed = weatherData?.wind?.speed ? (weatherData.wind.speed * 3.6).toFixed(2) : "N/A";
  const windGust = weatherData?.rain?.["1h"] ? `${weatherData.rain["1h"]} cm` : "N/A";
  const feelsLike = weatherData?.main?.feels_like ? `${weatherData.main.feels_like}°` : "20°";

  // useEffect(() => {
  //   const element = document.querySelector('#gaugeArea');

    // Ensure we don't reinitialize the chart if it already exists
  //   if (element && element.childNodes.length === 0) {
  //     let gaugeOptions = {
  //       hasNeedle: true,
  //       needleColor: 'gray',
  //       needleUpdateSpeed: 1000,
  //       arcColors: ['rgb(44, 151, 222)', 'lightgray'],
  //       arcDelimiters: [30],
  //       rangeLabel: ['0', '100'],
  //       centralLabel: `${windSpeed} km/h`,
  //       scaleMultiplier: 5.5
  //     };

  //     const chart = GaugeChart.gaugeChart(element, 300, gaugeOptions);
  //     chart.updateNeedle(windSpeed);
  //   }
  // }, [windSpeed]); // Re-run only if windSpeed changes

  return (
    <div className="right-w">
      <div className="nav">
        <div className="left-nav">
          <span>Welcome back, User</span>
          <span>Check out today's weather information</span>
        </div>
        <div className="right-nav">
          <div className="icon">
            <HiDotsHorizontal />
          </div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmllfGVufDB8fDB8fHww%3D%3D"
            alt="User Profile"
          />
        </div>
      </div>

      <div className="chart">
        <h1>Chart is Loading...</h1>
      </div>

      <div className="nav-title">
        <span>More Details Of Today's Weather</span>
      </div>

      <div className="weather-card">
        <div className="nav-card">
          <div className="nav-card-header">
            <span>Humidity</span>
            <span><WiHumidity /></span>
          </div>
          <div className="humidity-value">
            <span>{humidity}%</span>
            <span>{humy_details(humidity)}</span>
          </div>
        </div>
        
        <div className="nav-card">
          <div className="nav-card-header">
            <span>Wind</span>
           <span> <WiDayWindy /></span>
          </div>
          <div className="wind-speed">
            <span>{windSpeed} km/h</span>
          </div>
          {/* <div id="gaugeArea"></div> */}
        </div>

        <div className="nav-card">
          <div className="nav-card-header">
            <span>Precipitation</span>
           <span> <WiRain /></span>
          </div>
          <div className="perc-value">
            <span>{windGust}</span>
          </div>
        </div>

        <div className="nav-card">
          <div className="nav-card-header">
            <span>UV Index</span>
            <span><WiSnowflakeCold /></span>
          </div>
        </div>

        <div className="nav-card">
          <div className="nav-card-header">
            <span>Feels Like</span>
            <span><WiThermometerExterior /></span>
          </div>
          <div className="feels-value">
            <span>{feelsLike}</span>
          </div>
        </div>

        <div className="nav-card">
          <div className="nav-card-header">
            <span>Chance of Rain</span>
           <span> <WiNightAltHail /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
