import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";

const schema = yup
  .object({
    name: yup.string().required("Navn er påkrævet"),
    email: yup
      .string()
      .email("Din email skal have formen: ditnavn@mail.dk")
      .required("Email er påkrævet"),
    subject: yup.string().required("Emne er påkrævet"),
    message: yup.string().required("Besked er påkrævet"),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    let formData = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      newsletter: data.newsletter,
    };
    console.log(formData);
  };
  return (
    <div className="col-start-1 col-end-3 row-start-2 row-end-3 p-6 border-[1px] border-solid border-[#D3DEE8] max-w-[635px]">
      <form className="grid gap-x-5 gap-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-start-1 col-end-2">
          <FormInput
            label="Navn"
            placeholder="Indtast navn"
            register={register("name")}
            errorMessage={errors.name?.message}
          />
        </div>
        <div className="col-start-2 col-end-3">
          <FormInput
            label="Email"
            placeholder="Email"
            register={register("email")}
            errorMessage={errors.email?.message}
          />
        </div>
        <div className="col-start-1 col-end-3">
          <FormInput
            label="Emne"
            placeholder="Hvad drejer din henvendelse sig om?"
            register={register("subject")}
            errorMessage={errors.subject?.message}
          />
        </div>
        <div className="col-start-1 col-end-3">
          <h3 className="mb-2">Besked</h3>
          <textarea
            className="resize-none w-full h-52 pl-3 pt-3 border-[#D3DEE8] border"
            placeholder="Skriv din besked her..."
            {...register("message")}
          ></textarea>
          <p className="-bottom-4 left-0 text-red text-xs">
            {errors.message?.message}
          </p>
        </div>
        <div className="col-start-1 col-end-3 mt-[100px]">
          <input
            className="mr-3 "
            type="checkbox"
            {...register("newsletter")}
            id="newsletter"
            name="newsletter"
          />
          <label htmlFor="newsletter">
            Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
          </label>
        </div>
        <button className="buttonStyle cursor-pointer max-w-[168px]">
          Send besked
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
