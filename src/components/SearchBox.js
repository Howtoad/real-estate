import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const SearchBox = () => {
  const [query, setQuery] = useState(null);

  return (
    <div className="bg-white max-w-[920px] w-full mx-auto">
      <div className="ml-8 pt-8 ">
        <h3 className="text-heading_2 font-medium text-xl">
          Søg blandt 158 boliger til salg i 74 butikker
        </h3>
        <div className="w-10 h-1 bg-primary mb-7 mt-1"></div>

        <p className="text-paragraph">Hvad skal din næste bolig indeholde</p>
        <div className="flex pb-8">
          <input
            className="max-w-[728px] h-12 w-full border mr-2 pl-3"
            type="text"
            placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <Link className="buttonStyle max-w-[120px]" to={`/soeg?q=${query}`}>
            Søg
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
