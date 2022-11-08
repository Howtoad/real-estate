import FrontPageAgentsTemplate from "../templates/FrontPageAgentsTemplate";
import HeroImg from "../templates/HeroImg";
import SelectedProperties from "../templates/SelectedProperties";
import SalesAppSection from "../templates/SalesAppSection";
import { useUser } from "../context/UserContext";

const Home = () => {
  const { user } = useUser();
  console.log(user);

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
