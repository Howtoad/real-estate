import Agent from "../components/Agent";
import useFetchAgents from "../customHooks/useFetchAgents";
import Heading from "../components/Heading";

const AgentsTemplate = () => {
  const { content: agents } = useFetchAgents();
  return (
    <>
      <Heading title="Medarbejdere i Roskilde" />
      <div className="grid max-w-[1140px] grid-cols-3 mx-auto gap-y-12 mt-28 mb-32">
        {agents?.map((agent) => {
          return <Agent key={agent.id} data={agent} />;
        })}
      </div>
    </>
  );
};

export default AgentsTemplate;
