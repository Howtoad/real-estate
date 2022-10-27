import React from "react";
import Heading from "../components/Heading";
import PropertyCard from "../components/PropertyCard";
import useFetchHomes from "../customHooks/useFetchHomes";

function PropertiesForSale() {
  const { content: properties } = useFetchHomes();

  return (
    <div className=" ">
      <Heading title="Boliger til salg" />
      <div className="max-w-[1100px] mx-auto">
        <h3>Søg efter dit drømmehus</h3>
        <label>
          Ejendomstype
          <input type="text" placeholder="Ejendomstype" />
        </label>

        <label>Pris-interval</label>

        <div className="grid md:grid-cols-2 gap-10 py-10  mx-auto">
          {properties?.map((property, index) => (
            <PropertyCard key={index} data={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertiesForSale;
