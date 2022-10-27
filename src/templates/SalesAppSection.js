import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";

function SalesAppSection() {
  return (
    <div className="text-white bg-primary">
      <div className="max-w-[1100px] w-full mx-auto flex justify-between">
        <div className="flex flex-col gap-8 py-20">
          <h3 className="text-3xl max-w-[260px] font-bold">
            Hold dig opdateret på salgsprocessen
          </h3>
          <p className="text-md max-w-[540px] leading-8">
            Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
            ansvarlige mægler eller butik med vores app. Her kan du også se
            statistik på interessen for din bolig i alle vores salgskanaler.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-[400px] text-xl">
            <Link
              className="flex items-center justify-around gap-1 px-6 py-4 font-medium bg-white rounded-sm text-primary"
              to=""
            >
              <FaGooglePlay /> Goggle Play
            </Link>
            <Link
              className="flex items-center justify-around gap-1 px-6 py-4 font-medium text-white border border-white rounded-sm"
              to=""
            >
              <BsApple /> Apple Store
            </Link>
          </div>
        </div>
        <img
          className="pt-20"
          src="./images/real-estate/mobiles.png"
          alt="To mobiler med salgsappen åben"
          title="To mobiler med salgsappen åben"
        />
      </div>
    </div>
  );
}

export default SalesAppSection;
