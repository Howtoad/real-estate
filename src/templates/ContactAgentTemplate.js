import AgentInfo from "../components/AgentInfo";
import useFetchAgent from "../hooks/useFetchAgent";
import { SlMagnifier } from "react-icons/sl";

const ContactAgentTemplate = () => {
  const { content } = useFetchAgent();
  console.log(content);
  return (
    <>
      <div className="max-w-[730px] border mt-28">
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
      <div>
        <div className="max-w-[350px] p-7 bg-background_fail">
          <h3 className="text-heading_2 font-medium font-2xl mb-4">
            Search Property
          </h3>
          <hr className="mb-6"></hr>
          <input type="text" placeholder="Search">
            {/* <SlMagnifier /> */}
          </input>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ContactAgentTemplate;
