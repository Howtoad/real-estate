import { Link } from "react-router-dom";
import Agent from "../components/Agent";
import useFetchAgents from "../hooks/useFetchAgents";

const FrontPageAgentsTemplate = () => {
  const { content: agents } = useFetchAgents();

  return (
    <section className="mt-[125px]">
      <div className="w-fit mx-auto">
        <h2 className="font-bold text-4xl text-heading_2 max-w-[640px] mb-4">
          Mød vores engagerede medarbejdere
        </h2>
        <p className="text-lg text-paragraph font-normal max-w-[551px] text-center mb-[60px] mx-auto">
          Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
          Kontakt en af vores medarbejdere.
        </p>
      </div>
      <div className="grid max-w-[1140px] grid-cols-3 mx-auto gap-y-12">
        {agents?.map((agent, index) => {
          if (index > 2) {
            return null;
          }
          return <Agent key={index} data={agent} />;
        })}
      </div>

      <Link
        to="/maeglere"
        className="buttonStyle max-w-[194px] mx-auto mt-[42px] mb-[114px]"
      >
        Se alle mæglere
      </Link>
    </section>
  );
};

export default FrontPageAgentsTemplate;
