import StatPitch from "../components/StatPitch";

const StatPitchTemplate = () => {
  return (
    <div className="flex max-w-[1110px] w-full mx-auto mb-16">
      <StatPitch
        icon="/images/real-estate/property_icon.svg"
        pitchTitle=""
        pitchText=""
      >
        <h3 className="text-heading_2 font-medium text-2xl col-start-2 col-end-3 pl-4">
          Bestil et salgstjek
        </h3>
        <p className="max-w-[290px] text-lg text-paragraph col-start-2 col-end-3 pl-4">
          Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
          bolig.
        </p>
      </StatPitch>
      <StatPitch
        icon="/images/real-estate/location_icon.svg"
        pitchTitle=""
        pitchText=""
      >
        <h3 className="text-heading_2 font-medium text-2xl col-start-2 col-end-3 pl-4">
          74 butikker
        </h3>
        <p className="max-w-[290px] text-lg text-paragraph col-start-2 col-end-3 pl-4">
          Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er
          fordelt rundt om i Danmark.
        </p>
      </StatPitch>
      <StatPitch
        icon="/images/real-estate/customer_icon.svg"
        pitchTitle=""
        pitchText=""
      >
        <h3 className="text-heading_2 font-medium text-2xl col-start-2 col-end-3 pl-4">
          Tilmeld køberkartotek
        </h3>
        <p className="max-w-[290px] text-lg text-paragraph col-start-2 col-end-3 pl-4">
          Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en
          ny bolig bliver annonceret.
        </p>
      </StatPitch>
    </div>
  );
};

export default StatPitchTemplate;
