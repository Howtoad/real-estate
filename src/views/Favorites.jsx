import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Favorites() {
  const { user, updateFavoriteProperties } = useUser();

  const switchEnergylabelColor = (energylabel) => {
    switch (energylabel) {
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
    <>
      {user ? (
        user.user.homes.length > 0 ? (
          <div className="py-20 max-w-[1110px] mx-auto">
            <div className="flex gap-2 items-center p-2  w-fit border border-[#D3DEE8] rounded-md mb-6 text-paragraph_2">
              <HiOutlineSearch />
              <input
                className="outline-none "
                type="text"
                placeholder="Søg i favoritter"
              />
            </div>
            <div className="flex flex-col gap-10 border-t border-[#D3DEE8] py-10">
              {user.user.homes.map((property) => (
                <div className="grid grid-cols-[250px_1fr_200px_150px] gap-6 border border-paragraph_3 rounded-md p-6 shadow">
                  <img
                    className="max-h-[150px] w-full"
                    src={property.images[0].url}
                    alt={`Facade billede af ${property.adress1}`}
                    title={`Facade billede af ${property.adress1}`}
                  />
                  <div className="flex flex-col gap-4">
                    <h3 className="flex items-center gap-2 font-bold text-heading_2 whitespace-nowrap">
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
                  </div>
                  <div className="flex gap-2 h-fit">
                    <p
                      className={`flex items-center justify-center uppercase w-6 h-6 text-white ${switchEnergylabelColor(
                        property.energylabel
                      )}`}
                    >
                      {property.energylabel}
                    </p>
                    <p className="flex items-center gap-2">
                      {property.rooms.split("/").at(-1)} værelser
                      <span className="block w-[3px] h-[3px] bg-black rounded"></span>
                      {property.livingspace} m²
                    </p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="ml-auto font-bold">
                      Kr. {property.price.toLocaleString()}
                    </p>
                    <button
                      className="buttonStyle"
                      onClick={() => {
                        updateFavoriteProperties(property.id);
                      }}
                    >
                      Fjern fra favoritter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-10 mx-auto max-w-[1110px] py-20">
            <p className="text-center">Du har ingen favoritboliger</p>
            <Link className="buttonStyle w-fit px-6 mx-auto" to="/boliger">
              Se alle boliger
            </Link>
          </div>
        )
      ) : (
        <div className="w-fit mx-auto py-20 flex flex-col gap-10">
          <p>Du skal logge ind for at se denne side</p>
          <Link className="buttonStyle w-fit px-6 mx-auto" to="/login">
            Gå til login
          </Link>
        </div>
      )}
    </>
  );
}

export default Favorites;
