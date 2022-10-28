import useFetchHome from "../customHooks/useFetchHome";
import DetailsHeader from "../features/PropertyDetails/templates/DetailsHeader";
import DetailsSection from "../features/PropertyDetails/templates/DetailsSection";

const House = () => {
  const { content } = useFetchHome();
  console.log(content);

  return (
    <section>
      <img
        className="w-[1920px] h-[780px]"
        src={content?.images[0]?.url}
        alt={content?.images[0]?.name}
      />
      <DetailsHeader houseInfo={content} />
      <DetailsSection houseInfo={content} />
    </section>
  );
};

export default House;
