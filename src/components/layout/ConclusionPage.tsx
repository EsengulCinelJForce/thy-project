import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ConclusionPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/`);
  };
  return (
    <div className="mt-10 ml-96 mr-96">
      <div>
        <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 mr-2" />
        Kabin Seçiminiz tamamlanamadı.
        <hr className="flex-grow border-b border-secondary mt-3" />
        <div className="text-right text-last ">
          <button
            className="mt-10 bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleButtonClick}
          >
            Başa dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConclusionPage;
