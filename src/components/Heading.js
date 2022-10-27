import React from "react";

function Heading({ title }) {
  return (
    <div className="h-48 bg-[url('./images/real-estate/topbannerbackgroundimg.png')] flex justify-center items-center bg-no-repeat mx-auto bg-mask_2 bg-blend-multiply max-w-[1920px]">
      <h2 className="text-white font-bold text-6xl">{title}</h2>
    </div>
  );
}

export default Heading;
