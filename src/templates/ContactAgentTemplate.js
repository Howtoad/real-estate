import AgentInfo from "../components/AgentInfo";
import FormInput from "../components/FormInput";
import useFetchAgent from "../hooks/useFetchAgent";

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
        <div className="border max-w-[650px] w-full mx-auto mt-8 p-10">
          <h3 className="text-heading_2 font-medium text-xl pb-3">
            Kontakt {content?.name}
          </h3>
          <div className="bg-primary max-w-[60px] w-full h-1 mb-8"></div>
          <form className="grid gap-x-5 gap-y-5">
            <div className="col-start-1 col-end-2">
              <FormInput label="Navn" placeholder="Indtast navn" />
            </div>
            <div className="col-start-2 col-end-3">
              <FormInput label="Email" placeholder="Email" />
            </div>
            <div className="col-start-1 col-end-3">
              <FormInput
                label="Emne"
                placeholder="Hvad drejer din henvendelse sig om?"
              />
            </div>
            <div className="col-start-1 col-end-3">
              <h3 className="mb-2">Besked</h3>
              <textarea
                className="resize-none w-full h-52 pl-3 pt-3 border-[#D3DEE8] border"
                placeholder="Skriv din besked her..."
              ></textarea>
            </div>
            <button className="buttonStyle cursor-pointer max-w-[168px]">
              Send besked
            </button>
          </form>
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
