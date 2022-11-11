import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import ContactInfoBox from "../components/ContactInfoBox";
import ContactInfoLine from "../components/ContactInfoLine";

const ContactInfo = () => {
  return (
    <div className="col-start-3 col-end-4 row-start-2 row-end-3 p-6 border-[1px] border-solid border-[#D3DEE8] max-w-[445px]">
      <ContactInfoBox>
        <div className="bg-primary max-w-fit max-h-fit p-3 rounded-full">
          <BsFillTelephoneFill className=" text-white" size="24" />
        </div>
        <p className="text-heading font-medium text-xl">Ring til os</p>
        <p className="text-paragraph">++45 7070 4000</p>
      </ContactInfoBox>
      <ContactInfoLine />
      <ContactInfoBox>
        <div className="bg-primary max-w-fit max-h-fit p-3 rounded-full">
          <FaPaperPlane className="text-white" size="24" />
        </div>
        <p className="text-heading font-medium text-xl">send en mail</p>
        <p className="text-paragraph">4000@dinmaegler.dk</p>
      </ContactInfoBox>
      <ContactInfoLine />
      <ContactInfoBox>
        <div className="bg-primary max-w-fit max-h-fit p-3 rounded-full">
          <FaMapMarkerAlt className="text-white" size="24" />
        </div>
        <p className="text-heading font-medium text-xl">Besøg butikken</p>
        <div className="flex flex-col items-center">
          <p className="text-paragraph">Stændertorvet 78,</p>
          <p className="text-paragraph">4000 Roskilde</p>
        </div>
      </ContactInfoBox>
    </div>
  );
};

export default ContactInfo;
