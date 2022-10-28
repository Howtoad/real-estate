import DetailItem from "../components/DetailItem";

const DetailsSection = ({ houseInfo }) => {
  return (
    <>
      <div className="my-8 mx-auto max-w-[1110px] flex justify-between gap-y-3">
        <div>
          <DetailItem type="Sagsnummer">{houseInfo?.id}</DetailItem>
          <DetailItem type="Boligareal">{houseInfo?.livingspace}</DetailItem>
          <DetailItem type="Grundareal">{houseInfo?.lotsize}</DetailItem>
          <DetailItem type="Rum/værelser">{houseInfo?.rooms}</DetailItem>
          <DetailItem type="Antal plan">
            {houseInfo?.floorplan.length}
          </DetailItem>
        </div>
        <div>
          <DetailItem type="Kælder">{houseInfo?.basementsize}</DetailItem>
          <DetailItem type="Byggeår">{houseInfo?.built}</DetailItem>
          <DetailItem type="Ombygget">{houseInfo?.remodel}</DetailItem>
          <DetailItem type="Energimærke">{houseInfo?.energylabel}</DetailItem>
        </div>
        <div>
          <DetailItem type="Udbetaling">
            {"Kr. " + houseInfo?.payment.toLocaleString()}
          </DetailItem>
          <DetailItem type="Brutto ex ejerudgift">
            {"Kr. " + houseInfo?.gross.toLocaleString()}
          </DetailItem>
          <DetailItem type="Netto ex ejerudgift">
            {"Kr. " + houseInfo?.netto.toLocaleString()}
          </DetailItem>
          <DetailItem type="Ejerudgifter">
            {"Kr. " + houseInfo?.cost.toLocaleString()}
          </DetailItem>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
