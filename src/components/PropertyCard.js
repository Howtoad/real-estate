import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ data: property, showLiked }) {
  const switchEnergylabelColor = () => {
    switch (property.energylabel) {
      case "A":
        return "bg-primary_4";
      case "B":
        return "bg-energylabelYellow";
      case "C":
        return "bg-energylabelOrange";
      case "D":
        return "bg-energylabelRed";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <Link
      className="bg-white rounded-md overflow-hidden shadow relative"
      to={`/boliger/${property.id}`}
    >
      <img
        src={property.images[0].url}
        alt={`Facade billede af ${property.adress1}`}
        title={`Facade billede af ${property.adress1}`}
        className="max-h-[350px] rounded-t-md w-full"
      />
      {showLiked && (
        <div className="absolute top-6 right-6 bg-white w-10 h-10 rounded-full flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172V3.84172Z"
              stroke="#162A41"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
      <div className="p-6 flex flex-col gap-4 text-paragraph">
        <h3 className="font-bold text-heading_2 flex items-center gap-2">
          {property.adress1}{" "}
          {property.adress2 && (
            <>
              <div className="w-[3px] h-[3px] bg-black rounded"></div>
              {property.adress2}
            </>
          )}
        </h3>
        <p>
          {property.postalcode} {property.city}
        </p>
        <div className="flex items-center gap-2">
          <p className="font-bold">{property.type}</p>
          <div className="w-[3px] h-[3px] bg-black rounded"></div>
          <p>Ejerudgift: {property.cost.toLocaleString()} kr.</p>
        </div>
        <div className="flex gap-6 border-t border-shape pt-4">
          <p
            className={`flex items-center justify-center uppercase w-6 h-6 text-white ${switchEnergylabelColor()}`}
          >
            {property.energylabel}
          </p>
          <p className="flex items-center gap-2">
            {property.rooms.split("/").at(-1)} værelser
            <span className="block w-[3px] h-[3px] bg-black rounded"></span>
            {property.livingspace} m²
          </p>
          <p className="ml-auto font-bold">
            Kr. {property.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
