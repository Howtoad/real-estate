import { FaPaperPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const DetailsAgent = ({ houseInfo }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Ansvarlig mægler</h3>
      <div className="border-[#d3dee8] border-solid border-[1px] p-[40px] flex gap-[30px]">
        <div className="grid">
          <img
            className="w-[280px] h-auto"
            src={houseInfo?.agent?.image?.url}
            alt={houseInfo?.agent?.name}
          />
        </div>
        <div className="">
          <h4 className="font-medium text-lg">{houseInfo?.agent?.name}</h4>
          <p className="text-paragraph_2 my-4">
            Statsautoriseret ejendomsmægler
          </p>
          <div className="border-[#d3dee8] w-[58px] border-[1px] border-solid my-4"></div>
          <div className="flex my-4">
            <BsFillTelephoneFill size="20" />
            <p className="ml-4 leading-5">{houseInfo?.agent?.phone}</p>
          </div>
          <div className="flex my-4">
            <FaPaperPlane size="20" />
            <p className="ml-4 leading-5">{houseInfo?.agent?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsAgent;
