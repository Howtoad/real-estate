import StatPitch from "../components/StatPitch";

const StatPitchTemplate = () => {
  return (
    <div className="flex max-w-[1110px] w-full mx-auto mb-16">
      <StatPitch
        icon="/images/real-estate/property_icon.svg"
        pitchTitle="Bestil et salgstjek"
        pitchText="Med et Din Mægler Salgstjek 
        bliver du opdateret på værdien 
        af din bolig."
      />
      <StatPitch
        icon="/images/real-estate/location_icon.svg"
        pitchTitle="74 butikker"
        pitchText="Hos Din Mægler er din bolig 
til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark."
      />
      <StatPitch
        icon="/images/real-estate/customer_icon.svg"
        pitchTitle="Tilmeld køberkartotek"
        pitchText="Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret."
      />
    </div>
  );
};

export default StatPitchTemplate;
