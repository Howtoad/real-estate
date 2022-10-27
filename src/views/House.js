import useFetchHome from "../customHooks/useFetchHome";

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
    </section>
  );
};

export default House;
