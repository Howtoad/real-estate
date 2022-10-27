import Agent from "../components/Agent";

const AgentsTemplate = () => {
  return (
    <div className="grid max-w-[1140px] grid-cols-3 mx-auto gap-y-12">
      <Agent />
      <Agent />
      <Agent />
    </div>
  );
};

export default AgentsTemplate;
