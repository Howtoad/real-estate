import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-fit mx-auto text-center flex flex-col gap-6 py-20">
      <div className="grid grid-cols-1 grid-rows-1 w-fit mx-auto">
        <div className="col-span-full row-span-full bg-primary h-2/5 self-end"></div>
        <h1 className="col-span-full row-span-full text-white text-9xl font-bold [text-shadow:_0_0_4px_rgb(0_0_0)] px-4">
          Hov!
        </h1>
      </div>

      <h2 className="text-xl font-bold">
        Du er havnet på en side som ikke findes!
      </h2>
      <p className="max-w-md">
        Det er vi kede af! Vi har sendt en besked af sted til vores
        internetbureau, og bedt dem se på fejlen.
      </p>
      <Link className="buttonStyle w-fit px-6 mx-auto" to="/">
        Tilbage til forsiden
      </Link>
    </div>
  );
}

export default NotFound;
