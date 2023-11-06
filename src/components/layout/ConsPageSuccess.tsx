import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConsPageSuccess = () => {
  const params = new URLSearchParams(location.search);

  const amount = params.get("amount");
  console.log("sad", amount);
  return (
    <div className="mt-10 ml-96 mr-96">
      <div className="font-bold ">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-green-500 mr-2 "
        />
        Kabin Seçiminiz tamamlandı.
        <hr className="flex-grow border-b border-[1px] border-secondary mt-3" />
      </div>
      <div className="text-2xl font-dancing mt-10 flex justify-between">
        <div>Toplam Tutar</div>
        <div className="text-right text-last ">TRY {amount} </div>
      </div>
    </div>
  );
};

export default ConsPageSuccess;
