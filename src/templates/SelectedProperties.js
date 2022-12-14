import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import useFetchHomes from "../hooks/useFetchHomes";

function SelectedProperties() {
  const { content: properties } = useFetchHomes();

  return (
    <div className="bg-background py-20">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-heading">Udvalgte Boliger</h2>
        <div className="grid md:grid-cols-2 gap-10 py-10">
          {properties?.map((property, index) => {
            if (index > 3) {
              return null;
            }

            return <PropertyCard key={index} data={property} />;
          })}
        </div>
        <Link className="buttonStyle w-fit px-6" to="/boliger">
          Se alle boliger
        </Link>
      </div>
    </div>
  );
}

export default SelectedProperties;
