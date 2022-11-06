import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Heading from "../components/Heading";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import FormInput from "../components/FormInput";

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
  const { setUser } = useUser();
  const navigate = useNavigate();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    fetch("https://dinmaegler.herokuapp.com/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: data.email,
        password: data.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then((data) => {
        setUser(data);
        navigate("/");
      })
      .catch((err) => {
        setError("email", {
          type: "custom",
          message: "Ugyldige login oplysninger. Prøv igen...",
        });
        setError("password", {
          type: "custom",
          message: "Ugyldige login oplysninger. Prøv igen...",
        });
      });
  };

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
          <FormInput
            label="Email"
            placeholder="Email"
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
          <button className="buttonStyle cursor-pointer" type="submit">
            Log ind
          </button>
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
