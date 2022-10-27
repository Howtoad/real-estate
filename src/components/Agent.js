import { IoMdMail } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
const Agent = ({ data: agent }) => {
  return (
    <div className="max-w-[350px] w-full rounded drop-shadow border">
      <img className="mb-6" src={agent.image.url} alt="Agent" title="Agent" />
      <div className="grid place-content-center text-center ">
        <h3 className="row-start-1 row-end-2 text-heading_2 text-2xl font-medium mb-1">
          {agent.name}
        </h3>
        <p className="row-start-2 row-end-3 mb-4">{agent.title}</p>
        <div className="flex row-start-3 row-end-4 place-content-center gap-x-4 mb-6">
          <IoMdMail size="19px" /> <GrLinkedinOption />
        </div>
      </div>
    </div>
  );
};

export default Agent;
