import React, { useState } from "react";
import { useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import { useUser } from "../context/UserContext";
import useFetchHomes from "../hooks/useFetchHomes";

function Search() {
  const { content: properties } = useFetchHomes();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(null);

  useEffect(() => {
    setQuery(searchParams.get("q"));
  }, []);

  useEffect(() => {
    setSearchParams({ q: query });

    setFilteredProperties(
      properties?.filter((property) =>
        query
          ? property.adress1.toLowerCase().includes(query.toLowerCase())
            ? true
            : property.postalcode.toString().includes(query)
            ? true
            : property.city.toLowerCase().includes(query.toLowerCase())
            ? true
            : property.adress2?.toLowerCase().includes(query.toLowerCase())
            ? true
            : property.type.toLowerCase().includes(query.toLowerCase())
          : true
      )
    );
  }, [properties, query]);

  return (
    <div className=" max-w-[1110px] mx-auto py-20 flex flex-col gap-10">
      <div className="p-2 border border-[#D3DEE8] rounded-md text-paragraph_2">
        <label className="flex gap-2 items-center">
          <HiOutlineSearch />
          <input
            className="outline-none focus text-paragraph"
            type="text"
            placeholder="Søg efter bolig"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            autoFocus
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {filteredProperties?.map((property, index) => (
          <PropertyCard key={index} data={property} />
        ))}
        {filteredProperties?.length === 0 && (
          <p>Ingen boliger matcher dine valgte søgekriterier</p>
        )}
      </div>
    </div>
  );
}

export default Search;
