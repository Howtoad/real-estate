import { FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillSkype, AiOutlineInstagram } from "react-icons/ai";

const AgentInfo = ({ agent }) => {
  return (
    <div className="p-[40px] flex gap-[30px]">
      <div className="grid">
        <img
          className="w-[280px] h-auto col-start-1 col-end-2 row-start-1 row-end-2"
          src={agent?.image?.url}
          alt={agent?.name}
        />
        <div className="bg-primary w-fit h-fit px-2 mt-auto mb-[30px] col-start-1 col-end-2 row-start-1 row-end-2 flex justify-around items-center">
          <a href="https://www.instagram.com/" className="w-fit h-fit m-3">
            <AiOutlineInstagram color="white" className="h-auto w-[18px]" />
          </a>
          <a href="https://www.linkedin.com/" className="w-fit h-fit m-3">
            <FaLinkedinIn color="white" className="h-auto w-[18px]" />
          </a>
          <a href="https://www.skype.com/en/" className="w-fit h-fit m-3">
            <AiFillSkype color="white" className="h-auto w-[18px]" />
          </a>
        </div>
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
