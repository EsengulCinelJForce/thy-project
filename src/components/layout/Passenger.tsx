import React, { useState } from "react";
import Switch from "react-switch";
import { useLocation } from "react-router-dom";
import { flights } from "../MockData/flights.json";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const Passenger = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCity = params.get("selectedCity");
  const selectedDSValue = params.get("selectedDSValue");
  const passengerCount = params.get("passengerCount");

  const [checked, setChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    {
      flights.map((item) =>
        item.fareCategories.ECONOMY.subcategories.map((subcategory) => {
          const amount = item.fareCategories.ECONOMY.subcategories[1].price.amount;
          console.log("a", amount);
          if (subcategory.status === "AVAILABLE") {
            navigate(`/cabin-page/sucess?amount=${amount}`);
          } else {
            navigate("/cabin-page");
          }
          console.log(subcategory.status);
          return null;
        })
      );
    }
  };

  const handleChange = (nextChecked: any) => {
    setChecked(nextChecked);
    setIsButtonDisabled(nextChecked);
  };
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleRowExpansion = (rowKey: any) => {
    setExpandedRows({
      ...expandedRows,
      [rowKey]: !expandedRows[rowKey],
    });
  };
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioClick = (item: any) => {
    if (selectedRadio === item.originAirport.id) {
      setSelectedRadio(null);
    } else {
      setSelectedRadio(item.originAirport.id);
    }
  };
  return (
    <div>
      <div className="mt-4 ml-96 flex items-center space-x-4">
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Uçuş
        </button>
      </div>
      <div className="font-thin  text-2xl font-bold mt-6 ml-96 flex items-center space-x-4">
        {selectedCity} - {selectedDSValue} , {passengerCount} Yolcu
      </div>
      <div className="mt-4 ml-96 flex items-center space-x-4 font-dancing text-l font-bold">
        Promosyon Kodu
        <Switch className="ml-2" onChange={handleChange} checked={checked} />
      </div>
      {checked && (
        <div className="ml-96 text-gray-600">
          Promosyon kodu seçeneği ile tüm Economy kabini Eco Fly paketlerinin
          %50 indirimle alabilirsiniz!
          <div>
            Promosyon kodu seçeneği aktifken Eco Fly paketi hariçinde seçim
            yapılamamaktadır.
          </div>
        </div>
      )}
      <div className="mt-4  mr-96 flex items-center space-x-4 font-dancing text-l font-bold">
        <div className="w-full mt-4 ml-96">
          <div className="bg-primary text-white py-2 px-4 flex justify-end space-x-4">
            <button className="px-4 py-2 rounded">Sıralama Kriteri</button>
            <button className="px-4 py-2   border border-white rounded">
              Ekonomi Ücreti
            </button>
            <button className="px-4 py-2 border border-white rounded">
              Kalkış Saati
            </button>
          </div>
          <table className="w-full border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2"></th>
                <th className="border border-gray-300 p-2"></th>
                <th className="border border-gray-300 p-2"></th>
              </tr>
            </thead>
            <tbody>
              {flights.map((item) => (
                <React.Fragment key={item.originAirport.code}>
                  <tr className="border border-gray-300">
                    <td className="border border-gray-300 p-2 w-1/3">
                      <div className="mb-2 mt-6">
                        {item.arrivalDateTimeDisplay}
                        <span className="ml-3 mr-28"></span>
                        {item.departureDateTimeDisplay}
                      </div>
                      <div className="mb-2 border-l-4 border-gray-300 pl- text-gray-400">
                        {item.originAirport.code}
                        <span className="ml-2 mr-2">
                          ----------------------
                        </span>
                        {item.destinationAirport.code}
                        <span className="ml-2 mr-24"></span> Uçuş Süresi
                      </div>
                      <div className="text-sm text-gray-400">
                        {item.originAirport.city.name}
                        <span className="mr-28"></span>
                        {item.destinationAirport.city.name}
                        <span className="text-black ml-32">
                          {item.flightDuration}
                        </span>
                      </div>
                    </td>

                    <td className="border border-grays-300 p-2 w-1/5">
                      {" "}
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="business-radio"
                          className="mr-2 form-radio text-primary"
                          onClick={() =>
                            toggleRowExpansion(item.originAirport.id)
                          }
                          checked={expandedRows[item.originAirport.id]}
                        />

                        {expandedRows[item.originAirport.id]}
                        <span className="text-sm mt-3 text-gray-400 underline">
                          ECONOMY
                        </span>

                        {checked ? (
                          <span className="text-xs ml-3  text-blackunderline">
                            Yolcu başına <br />
                            <span className="text-xs text-blackunderline">
                              {
                                item.fareCategories.ECONOMY.subcategories[0]
                                  .price.currency
                              }{" "}
                              {item.fareCategories.ECONOMY.subcategories[0]
                                .price.amount / 2}
                            </span>
                          </span>
                        ) : (
                          <span className="text-xs ml-3  text-blackunderline">
                            Yolcu başına <br />
                            <span className="text-xs text-blackunderline">
                              {
                                item.fareCategories.ECONOMY.subcategories[0]
                                  .price.currency
                              }{" "}
                              {
                                item.fareCategories.ECONOMY.subcategories[0]
                                  .price.amount
                              }
                            </span>
                          </span>
                        )}
                      </label>
                    </td>
                    <td className="border border-gray-300 p-2 w-1/5">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="business-eco"
                          className="mr-2 form-radio text-primary"
                          onClick={() => handleRadioClick(item)}
                          checked={selectedRadio === item.originAirport.id}
                        />
                        <span className="text-sm mt-3 text-gray-400 underline">
                          BUSINESS
                        </span>
                        <span className="text-xs ml-3 text-blackunderline">
                          Yolcu başına <br />
                          <span className="text-xs text-blackunderline">
                            {
                              item.fareCategories.BUSINESS.subcategories[1]
                                .price.currency
                            }{" "}
                            {
                              item.fareCategories.BUSINESS.subcategories[1]
                                .price.amount
                            }
                          </span>
                        </span>
                      </label>
                    </td>
                  </tr>
                  {expandedRows[item.originAirport.id] && (
                    <tr>
                      <td colSpan={3}>
                        <div className="flex">
                          <div className="border border-black p-2 mr-2 w-96 h-80">
                            <div className=" flex bg-gray-200 p-2">
                              <div className="">
                                {
                                  item.fareCategories.ECONOMY.subcategories[0]
                                    .brandCode
                                }
                              </div>
                              <div className="ml-56">
                                {
                                  item.fareCategories.ECONOMY.subcategories[0]
                                    .price.currency
                                }
                              </div>

                              {
                                item.fareCategories.ECONOMY.subcategories[0]
                                  .price.amount
                              }
                            </div>
                            <div>
                              {item.fareCategories.ECONOMY.subcategories[0].rights.map(
                                (right, index) => (
                                  <p key={index}>{right}</p>
                                )
                              )}
                            </div>
                            <button
                              className="bg-red-500 text-white p-2 w-full mt-48"
                              onClick={handleButtonClick}
                            >
                              Uçuşunu seç
                            </button>
                          </div>

                          <div className="border border-black p-2 mr-2 w-96 h-80">
                            <div className="flex bg-gray-200 p-2">
                              <div className="">
                                {
                                  item.fareCategories.ECONOMY.subcategories[1]
                                    .brandCode
                                }
                              </div>
                              <div className="ml-56">
                                {
                                  item.fareCategories.ECONOMY.subcategories[1]
                                    .price.currency
                                }
                              </div>
                              {
                                item.fareCategories.ECONOMY.subcategories[1]
                                  .price.amount
                              }
                            </div>
                            <div>
                              {item.fareCategories.ECONOMY.subcategories[1].rights.map(
                                (right, index) => (
                                  <p key={index}>{right}</p>
                                )
                              )}
                            </div>
                            <button
                              className={`bg-red-500 text-white p-2 w-full mt-[168px] ${
                                isButtonDisabled
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : ""
                              }`}
                              onClick={handleButtonClick}
                              disabled={isButtonDisabled}
                            >
                              Uçuşunu seç
                            </button>
                          </div>
                          <div className="border border-black p-2 mr-2 w-96 h-80">
                            <div className="flex bg-gray-200 p-2">
                              <div className="">
                                {
                                  item.fareCategories.ECONOMY.subcategories[2]
                                    .brandCode
                                }
                              </div>
                              <div className="ml-52">
                                {
                                  item.fareCategories.ECONOMY.subcategories[2]
                                    .price.currency
                                }
                              </div>
                              {
                                item.fareCategories.ECONOMY.subcategories[2]
                                  .price.amount
                              }
                            </div>
                            <div>
                              {item.fareCategories.ECONOMY.subcategories[2].rights.map(
                                (right, index) => (
                                  <p key={index}>{right}</p>
                                )
                              )}
                            </div>
                            <button
                              className={`bg-red-500 text-white p-2 w-full mt-36 ${
                                isButtonDisabled
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : ""
                              }`}
                              onClick={handleButtonClick}
                              disabled={isButtonDisabled}
                            >
                              Uçuşunu seç
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Passenger;
