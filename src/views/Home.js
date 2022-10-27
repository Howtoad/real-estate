import FrontPageAgentsTemplate from "../templates/FrontPageAgentsTemplate";
import HeroImg from "../templates/HeroImg";
import SelectedProperties from "../templates/SelectedProperties";
import SalesAppSection from "../templates/SalesAppSection";


const Home = () => {
  return (
    <>
      <HeroImg />
      <SelectedProperties />
      <SalesAppSection />
      <FrontPageAgentsTemplate />
    </>
  );
};

export default Home;
