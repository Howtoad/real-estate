import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Din email skal have formen: ditnavn@mail.dk")
      .required("Email er påkrævet"),
    password: yup.string().required("Password er påkrævet"),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Heading title="Log ind" />
      <div className="w-fit mx-auto shadow my-20 py-10 px-20">
        <h2 className="text-center font-bold text-xl text-heading_2">
          Log ind på din konto
        </h2>
        <form
          className="py-10 flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex flex-col gap-2 text-paragraph relative">
            Email
            <input
              className="placeholder:text-paragraph_2 border border-[#D3DEE8] p-2"
              placeholder="Email"
              {...register("email")}
            />
            <p className="absolute -bottom-4 left-0 text-red text-xs">
              {errors.email?.message}
            </p>
          </label>
          <label className="flex flex-col gap-2 text-paragraph relative">
            Password
            <input
              className="placeholder:text-paragraph_2 border border-[#D3DEE8] p-2"
              placeholder="Password"
              {...register("password")}
            />
            <p className="absolute -bottom-4 left-0 text-red text-xs">
              {errors.password?.message}
            </p>
          </label>
          <button className="buttonStyle">Log ind</button>
        </form>
        <p className="text-paragraph mb-2">Log ind med</p>
        <div className="flex gap-4 mb-6">
          <button className="buttonStyle px-10 bg-[#DD4B39]">Google</button>
          <button className="buttonStyle px-10 bg-[#3B5999]">Facebook</button>
          <button className="buttonStyle px-10 bg-primary">Twitter</button>
        </div>
        <p className="text-center">
          Har du ikke en konto?{" "}
          <Link className="text-[#2F80ED]" to="/registre">
            Opret bruger.
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
