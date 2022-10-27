import { IoMdMail } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
const Agent = () => {
  return (
    <div className="max-w-[350px] w-full">
      <img
        className="mb-6"
        src="./images/real-estate/employee.png"
        alt="Agent"
        title="Agent"
      />
      <div className="grid place-content-center">
        <h3 className="row-start-1 row-end-2 text-heading_2 text-2xl font-medium mb-1">
          Grant Marshall
        </h3>
        <p className="row-start-2 row-end-3 mb-4">Ejendomsmægler, MDMS</p>
        <div className="flex row-start-3 row-end-4 place-content-center gap-x-4 mb-6">
          <IoMdMail /> <GrLinkedinOption />
        </div>
      </div>
    </div>
  );
};

export default Agent;
