import FrontPageAgentsTemplate from "../templates/FrontPageAgentsTemplate";
import HeroImg from "../templates/HeroImg";
import SelectedProperties from "../templates/SelectedProperties";
import SalesAppSection from "../templates/SalesAppSection";
import StatsSectionTemplate from "../templates/StatsSectionTemplate";

const Home = () => {
  return (
    <>
      <HeroImg />
      <StatsSectionTemplate />
      <SelectedProperties />
      <SalesAppSection />
      <FrontPageAgentsTemplate />
    </>
  );
};

export default Home;
