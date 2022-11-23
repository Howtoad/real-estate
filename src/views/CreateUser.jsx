import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Heading from "../components/Heading";
import FormInput from "../components/FormInput";

const schema = yup
  .object({
    name: yup.string().required("Navn er påkrævet"),
    email: yup
      .string()
      .email("Din email skal have formen: ditnavn@mail.dk")
      .required("Email er påkrævet"),
    password: yup.string().required("Password er påkrævet"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwordene skal være ens"),
  })
  .required();

function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Heading title="Opret bruger" />
      <div className="w-full mx-auto shadow my-20 py-10 max-w-[920px] px-[190px]">
        <h2 className="text-center font-bold text-3xl text-heading_2 px-10">
          Opret bruger hos Din Mægler
        </h2>
        <form
          className="py-10 flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            label="Fulde navn"
            placeholder="Fulde navn"
            errorMessage={errors.name?.message}
            register={register("name")}
          />
          <FormInput
            label="Email adresse"
            placeholder="Email adresse"
            errorMessage={errors.email?.message}
            register={register("email")}
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Password"
            errorMessage={errors.password?.message}
            register={register("password")}
          />
          <FormInput
            label="Bekræft password"
            type="password"
            placeholder="Bekræft password"
            errorMessage={errors.passwordConfirmation?.message}
            register={register("passwordConfirmation")}
          />
          <button className="buttonStyle cursor-pointer" type="submit">
            Opret bruger
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
