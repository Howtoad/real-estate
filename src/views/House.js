import useFetchHome from "../hooks/useFetchHome";
import DetailsHeader from "../features/PropertyDetails/templates/DetailsHeader";

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
    </section>
  );
};

export default House;
