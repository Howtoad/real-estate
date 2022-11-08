import AgentInfo from "../components/AgentInfo";
import useFetchAgent from "../hooks/useFetchAgent";
import { SlMagnifier } from "react-icons/sl";

const ContactAgentTemplate = () => {
  const { content } = useFetchAgent();
  return (
    <div className="flex mt-28 mx-auto max-w-[1110px] w-full">
      <div className="max-w-[730px] border mr-7">
        <div>
          <AgentInfo agent={content} />
        </div>
        <div className="px-10">
          <h3 className="text-heading_2 text-xl font-medium">
            Om {content?.name}
          </h3>
          <div className="w-10 h-1 bg-primary mb-7 mt-1"></div>
          <p className="font-lg text-paragraph pb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="font-lg text-paragraph">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form by injected
            humour.
          </p>
        </div>
      </div>
      <div className="max-w-[350px] w-full">
        <div className="max-w-[350px] p-7 bg-background_fail mb-5">
          <h3 className="text-heading_2 font-medium text-2xl mb-4">
            Search Property
          </h3>
          <hr className="mb-6"></hr>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10"
          ></input>
        </div>
        <div className="bg-primary max-w-[350px] px-15 text-white text-center">
          <h3 className="text-3xl font-medium pt-[92px] max-w-[220px] mx-auto">
            Find The Best Property For Rent Or Buy
          </h3>
          <div className="mt-5 bg-white max-w-[80px] w-full h-1 mx-auto"></div>
          <h4 className="mt-4 text-lg">Call Us Now</h4>
          <h3 className="font-medium text-3xl pb-[112px]">+00 123 456 789</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactAgentTemplate;
