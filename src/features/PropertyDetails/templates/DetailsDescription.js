const DetailsDescription = ({ houseInfo }) => {
  // TODO- make line breaks in the string display
  return (
    <div className="max-w-[540px]">
      <h3 className="text-xl font-bold mb-6">Beskrivelse</h3>
      <p className="leading-[30px]">{houseInfo?.description}</p>
    </div>
  );
};

export default DetailsDescription;
