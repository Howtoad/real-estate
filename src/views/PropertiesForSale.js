import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import PropertyCard from "../components/PropertyCard";
import useFetchHomes from "../hooks/useFetchHomes";
import MultiRangeSlider from "multi-range-slider-react";
import "../slider.css";
import { useUser } from "../context/UserContext";

function PropertiesForSale() {
  const { user } = useUser();
  const { content: properties } = useFetchHomes();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(12000000);

  const [query, setQuery] = useState({
    type: null,
    minPrice: null,
    maxPrice: null,
  });

  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    setQuery({
      ...query,
      minPrice: minValue,
      maxPrice: maxValue,
    });
  }, [minValue, maxValue]);

  useEffect(() => {
    if (!properties) {
      return;
    }

    setFilteredProperties(
      properties.filter((property) =>
        query.type === null &&
        query.minPrice === 0 &&
        query.maxPrice === 12000000
          ? true
          : query.type === null &&
            property.price >= query.minPrice &&
            property.price <= query.maxPrice
          ? true
          : query.type === "Alle" &&
            property.price >= query.minPrice &&
            property.price <= query.maxPrice
          ? true
          : property.type.toLowerCase().includes(query.type?.toLowerCase()) &&
            property.price >= query.minPrice &&
            property.price <= query.maxPrice
      )
    );
  }, [properties, query]);

  return (
    <>
      <Heading title="Boliger til salg" />
      <div className="max-w-[1100px] mx-auto py-10">
        <div className="py-10">
          <h3 className="text-xl text-heading_2">Søg efter dit drømmehus</h3>
          <div className="w-10 h-1 bg-primary mb-6 mt-1"></div>
          <div className="flex gap-6">
            <label className="flex flex-col justify-between">
              Ejendomstype
              <select
                className="p-3 border border-gray-300 text-paragraph_2"
                onChange={(e) => setQuery({ ...query, type: e.target.value })}
              >
                <option value="Alle">Alle</option>
                <option value="Villa">Villa</option>
                <option value="Landejendom">Landejendom</option>
                <option value="Byhus">Byhus</option>
                <option value="Ejerlejlighed">Ejerlejlighed</option>
              </select>
            </label>
            <div className="w-full max-w-md flex flex-col gap-4">
              <p>Pris-interval</p>
              <MultiRangeSlider
                min={0}
                max={12000000}
                step={100000}
                stepOnly
                minValue={minValue}
                maxValue={maxValue}
                onChange={(e) => {
                  setMinValue(e.minValue);
                  setMaxValue(e.maxValue);
                }}
                ruler={false}
                labels={[
                  `${minValue.toLocaleString()} kr.`,
                  `${maxValue.toLocaleString()} kr.`,
                ]}
                style={{ border: "none", boxShadow: "none" }}
                className="text-paragraph_2"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {filteredProperties?.map((property, index) => (
            <PropertyCard
              key={index}
              data={property}
              showLiked={user ? true : false}
            />
          ))}
          {filteredProperties?.length === 0 && (
            <p>Ingen boliger matcher dine valgte søgekriterier</p>
          )}
        </div>
      </div>
    </>
  );
}

export default PropertiesForSale;
