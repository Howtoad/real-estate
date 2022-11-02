import AgentInfo from "../components/AgentInfo";
import useFetchAgent from "../customHooks/useFetchAgent";

const ContactAgentTemplate = () => {
  const { content } = useFetchAgent();
  console.log(content);
  return (
    <div className="max-w-[730px] mx-auto">
      <div className="mx-auto">
        <AgentInfo agent={content} />
      </div>
    </div>
  );
};

export default ContactAgentTemplate;
