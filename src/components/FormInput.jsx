import React from "react";

function FormInput({ label, type, placeholder, errorMessage, register }) {
  return (
    <label className="flex flex-col gap-2 text-paragraph relative">
      {label}
      <input
        className="placeholder:text-paragraph_2 border border-[#D3DEE8] p-2"
        placeholder={placeholder}
        type={type ?? "text"}
        {...register}
      />
      <p className="absolute -bottom-4 left-0 text-red text-xs">
        {errorMessage}
      </p>
    </label>
  );
}

export default FormInput;
