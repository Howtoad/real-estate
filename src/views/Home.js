import FrontPageAgentsTemplate from "../templates/FrontPageAgentsTemplate";
import HeroImg from "../templates/HeroImg";
import SelectedProperties from "../templates/SelectedProperties";
import SalesAppSection from "../templates/SalesAppSection";
import StatsSectionTemplate from "../templates/StatsSectionTemplate";
import { useUser } from "../context/UserContext";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <HeroImg />
      <StatsSectionTemplate />
      <SelectedProperties />
      <Newsletter />
      <FrontPageAgentsTemplate />
      <SalesAppSection />
    </>
  );
};

export default Home;
