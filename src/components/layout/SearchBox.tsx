import React, { useState } from "react";

import { flights } from "../MockData/flights.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faChevronRight,
  faPeopleArrows,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FaPlaneArrival } from "react-icons/fa";
import "./style.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ReactTooltip from "react-tooltip";
// import "react-tooltip/dist/index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FlightListPage from "../../modules/FlightListPage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBox = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!selectedValue || !selectedDSValue || !passengerCount) {
      toast.error("Lütfen zorunlu seçenekleri doldurun.");
      return;
    }
    const selectedCity = selectedValue;

    navigate(
      `/flight-list?selectedCity=${selectedCity}&selectedDSValue=${selectedDSValue}&passengerCount=${passengerCount}`
    );
  };

  const departureSet = new Set(
    flights.map((dp) => dp.originAirport?.city?.name)
  );
  const destinationSet = new Set(
    flights.map((dp) => dp.destinationAirport?.city?.name)
  );

  const uniqueDepartures = [...departureSet];
  const uniqueDestination = [...destinationSet];

  //console.log("uniqueDepartures", uniqueDepartures);

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDSValue, setSelectedDSValue] = useState("");

  const handleSelect = (value: any) => {
    setSelectedValue(value);
  };
  const hs = (value: any) => {
    setSelectedDSValue(value);
  };
  //console.log("uniqueDestination", uniqueDestination);

  const [passengerCount, setPassengerCount] = useState(1);

  const increasePassengers = () => {
    setPassengerCount(passengerCount + 1);
    console.log("passengerCount", passengerCount);
  };

  const decreasePassengers = () => {
    if (passengerCount > 1) {
      setPassengerCount(passengerCount - 1);
      console.log("passengerCount", passengerCount);
    }
  };
  const handleClose =() => {}
  return (
    <div className="min-h-screen bg-primary flex  items-center p-20 flex-col text-center text-white">
      <div className="bg-selectBoxOpacity bg-opacity-60 py-5 px-5 pr-5">
        <div className="flex space-x-16">
          <div className="w-full relative">
            <select
              id="departure"
              className="text-black w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-primary"
              style={{ width: "150%" }}
              value={selectedValue}
              onChange={(event) => handleSelect(event.target.value)}
            >
              <option value="" disabled hidden style={{ color: "gray" }}>
                Nereden
              </option>
              {uniqueDepartures.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full relative">
            <select
              id="destination"
              className=" text-black w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-primary"
              style={{ width: "150%" }}
              value={selectedDSValue}
              onChange={(event) => hs(event.target.value)}
            >
              <option
                className={`absolute top-2 left-2 text-gray-400 pointer-events-none ${
                  selectedDSValue ? "hidden" : ""
                }`}
                value=""
                disabled
                hidden
              >
                <FontAwesomeIcon icon={faPlaneArrival} />
                &nbsp;Nereye
              </option>
              {uniqueDestination.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full relative">
            <input
              type="date"
              id="date"
              className="bg-primary w-full p-2 rounded text-transparent cursor-pointer text-gray-400"
              disabled
            />
            <span className="absolute top-2 left-2 right-2 text-gray-400 pointer-events-none flex justify-between items-center">
              Tarih
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
          </div>

          <Popup
            trigger={
              <div className="w-full relative" style={{ marginLeft: "10px" }}>
                <button
                  type="button"
                  id="passengers"
                  className="bg-primary w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-primary"
                  style={{ width: "100px", height: "40px" }}
                />

                <span className="absolute top-2 left-2 right-2 text-gray-400 pointer-events-none ">
                  <FontAwesomeIcon icon={faPeopleArrows} />
                </span>
              </div>
            }
            modal
            nested
            contentStyle={{ width: "300px", height: "150px" }}
          >
            Kabin ve Yolcu Seçimi
            <div className="modal" style={{ width: "350px" }}>
              <button  className="close" onClick={handleClose}>&times;</button>
              <div className="content flex items-center">
                <label>
                  <input type="radio" name="radioGroup" value="option1" />
                  Ekonomy Class
                </label>
                <label className="ml-4">
                  <input type="radio" name="radioGroup" value="option2" />
                  Business Class
                </label>
              </div>
              <div className="content flex items-center ">
                <span className="font-bold text-xl">Yolcu</span>
                <button
                  onClick={decreasePassengers}
                  className="ml-14 w-8 h-8 border border-gray-300 bg-gray-300 text-gray-700 text-sm  flex items-center justify-center"
                >
                  -
                </button>
                <span className="mx-4">{passengerCount}</span>
                <button
                  onClick={increasePassengers}
                  className="w-8 h-8 border border-gray-300 bg-gray-300 text-gray-700 text-sm  flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          </Popup>

          <div
            className="w-full relative "
            style={{ marginLeft: "10px", marginRight: "-20px" }}
          >
            <button
              className="bg-danger text-white py-2 px-4 rounded hover:bg-hover"
              style={{ width: "50%" }}
              onClick={handleButtonClick}
              // disabled={!selectedValue || !selectedDSValue || !passengerCount}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <ToastContainer />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
