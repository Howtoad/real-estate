import { AiOutlineArrowRight } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Newsletter = () => {
  return (
    <div className="bg-[url('./images/real-estate/newsletterbackgroundimg.png')] w-full h-[284px] bg-no-repeat bg-mask_3 bg-blend-multiply flex">
      <div className="max-w-[1110px] flex mx-auto place-self-center w-full">
        <div className="max-w-[500px] w-full mr-8">
          <p className="text-white font-bold text-3xl">
            Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
          </p>
        </div>
        <div className="max-w-[540px] w-full">
          <div>
            <form className="relative max-w-[540px] w-full flex">
              <input
                type="text"
                placeholder="Indtast din email adresse"
                className="w-full h-[74px] pl-5 text-lg relative pr-12"
              ></input>
              <button
                className="absolute self-center right-5 cursor-pointer"
                type="submit"
              >
                <AiOutlineArrowRight size="32" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
