import AgentInfo from "../../../components/AgentInfo";

const DetailsAgent = ({ houseInfo }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 text-heading_2">
        Ansvarlig mægler
      </h3>
      <div className="border-[#d3dee8] border-solid border-[1px]">
        <AgentInfo agent={houseInfo?.agent} />
      </div>
    </div>
  );
};

export default DetailsAgent;
