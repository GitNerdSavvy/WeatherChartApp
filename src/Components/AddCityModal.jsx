import React, { useState } from "react";

const AddCityModal = ({ isOpen, onClose, onAddCity }) => {
  const [cityName, setCityName] = useState("");

  const handleAddCity = () => {
    if (cityName.trim() !== "") {
      onAddCity(cityName);
      setCityName(""); 
      onClose(); 
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter city name"
        />
        <button className="btn" onClick={handleAddCity}>+</button>
        {/* <button className="btn" onClick={onClose}>-</button> */}
      </div>
    </div>
  );
};

export default AddCityModal;
