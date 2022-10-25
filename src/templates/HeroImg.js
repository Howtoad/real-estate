import SearchBox from "../components/SearchBox";

const HeroImg = () => {
  return (
    <div className="h-[700px] bg-[url('./images/real-estate/hero_image.jpg')] bg-no-repeat bg-bottom bg-[#55555580] bg-blend-multiply max-w-[1920px] mx-auto">
      <h2 className="text-5xl text-white text-center pt-[190px] font-bold mb-10">
        Søg efter din drømmebolig
      </h2>
      <SearchBox />
    </div>
  );
};

export default HeroImg;
