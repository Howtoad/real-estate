import { FaPaperPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const AgentInfo = ({ agent }) => {
  return (
    <div className="p-[40px] flex gap-[30px]">
      <div className="grid">
        <img
          className="w-[280px] h-auto"
          src={agent?.image?.url}
          alt={agent?.name}
        />
      </div>
      <div className="">
        <h4 className="font-medium text-lg heading_2">{agent?.name}</h4>
        <p className="text-paragraph_2 my-4">Statsautoriseret ejendomsmægler</p>
        <div className="border-[#d3dee8] w-[58px] border-[1px] border-solid my-4"></div>
        <div className="flex my-4">
          <BsFillTelephoneFill size="20" className="text-primary" />
          <p className="ml-4 leading-5 text-paragraph">{agent?.phone}</p>
        </div>
        <div className="flex my-4">
          <FaPaperPlane size="20" className="text-primary" />
          <p className="ml-4 leading-5 text-paragraph">{agent?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
