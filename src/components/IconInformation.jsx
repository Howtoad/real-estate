import React from "react";

function IconInformation({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-center text-2xl text-white rounded-full w-14 h-14 bg-primary">
        {icon}
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h3 className="text-xs text-paragraph_2">{title}</h3>
        <p className="font-semibold md:text-lg ">{text}</p>
      </div>
    </div>
  );
}

export default IconInformation;
