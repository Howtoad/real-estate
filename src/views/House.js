import useFetchHome from "../customHooks/useFetchHome";
import DetailsAgent from "../features/PropertyDetails/templates/DetailsAgent";
import DetailsDescription from "../features/PropertyDetails/templates/DetailsDescription";
import DetailsHeader from "../features/PropertyDetails/templates/DetailsHeader";
import DetailsSection from "../features/PropertyDetails/templates/DetailsSection";

const House = () => {
  const { content } = useFetchHome();
  console.log(content);

  return (
    <section className="my-8 mb-20">
      <img
        className="w-[1920px] h-[780px] mx-auto"
        src={content?.images[0]?.url}
        alt={content?.images[0]?.name}
      />
      <DetailsHeader houseInfo={content} />
      <DetailsSection houseInfo={content} />
      <div className="flex max-w-fit gap-8 mx-auto justify-between">
        <DetailsDescription houseInfo={content} />
        <DetailsAgent houseInfo={content} />
      </div>
    </section>
  );
};

export default House;
