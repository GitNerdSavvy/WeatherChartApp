import React, { useEffect, useState } from "react";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FiSunrise, FiSunset } from "react-icons/fi";
import AddCityModal from "./AddCityModal";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";

const Left = ({ weatherData, setCity, isCelsius, setIsCelsius }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const toggleTemperatureUnit = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    return `Today, ${day} ${month}`;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return `${hours % 12 || 12}:${minutes.slice(-2)} ${
      hours >= 12 ? "PM" : "AM"
    }`;
  };

  const iconUrl = weatherData
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  const handleAddCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="left-w">
      <div className="header-1">
        <div className="add" onClick={toggleModal}>
          {isModalOpen ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
        </div>
        <div className="page">
          <HiDotsHorizontal />
        </div>
        <div className="toggle" onClick={toggleTemperatureUnit}>
          <WiCelsius style={{ width: "40px", height: "40px" }} />
          {isCelsius ? (
            <BsToggle2Off style={{ width: "20px", height: "20px" }} />
          ) : (
            <BsToggle2On style={{ width: "20px", height: "20px" }} />
          )}
          <WiFahrenheit style={{ width: "40px", height: "40px" }} />
        </div>
      </div>

      <div className="header-2">
        <div className="title">
          <span>
            <TiLocationArrowOutline /> {weatherData?.name || "City"}
          </span>
          <span>{formatDate(new Date())}</span>
        </div>
        <div className="rise">
          <span>
            <FiSunrise style={{ width: "20px", height: "15px" }} />
            {weatherData ? formatTime(weatherData.sys.sunrise) : "Sunrise"}
          </span>
          <span>
            <FiSunset style={{ width: "20px", height: "15px" }} />
            {weatherData ? formatTime(weatherData.sys.sunset) : "Sunset"}
          </span>
        </div>
      </div>

      <div className="header-3">
        <div className="left-arrow">
          <FaArrowLeft />
        </div>
        <div className="temperature">
          <span>
            {weatherData ? Math.round(weatherData.main.temp) : "--"}
            {isCelsius ? "°C" : "°F"}
          </span>
          <span>
            {iconUrl && (
              <img
                style={{ width: "25px", height: "25px" }}
                src={iconUrl}
                alt={weatherData.weather[0]?.main}
              />
            )}
            {weatherData ? weatherData.weather[0].main : "Weather"}
          </span>
        </div>
        <div className="right-arrow">
          <FaArrowRight />
        </div>
      </div>

      <AddCityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCity={handleAddCity}
      />
    </div>
  );
};

export default Left;
