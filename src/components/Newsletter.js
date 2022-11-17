import { AiOutlineArrowRight } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { data } from "autoprefixer";
import { useState } from "react";
const Newsletter = () => {
  const [userData, setUserData] = useState({
    email: "",
  });
  const [content, setContent] = useState();

  function submit(e) {
    e.preventDefault();
    fetch("https://dinmaegler.herokuapp.com/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
      }),
    })
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
    console.log(content);
  }

  function handle(e) {
    const newData = { ...userData };
    newData[e.target.id] = e.target.value;
    setUserData(newData);
  }
  return (
    <div className="bg-[url('./images/real-estate/newsletterbackgroundimg.png')] w-full h-[284px] bg-no-repeat bg-mask_3 bg-blend-multiply flex">
      <div className="max-w-[1110px] flex mx-auto place-self-center w-full">
        <div className="max-w-[500px] w-full mr-8">
          <p className="text-white font-bold text-3xl">
            Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
          </p>
        </div>
        <div className="max-w-[540px] w-full">
          <div>
            <form
              className="relative max-w-[540px] w-full flex"
              onSubmit={(e) => submit(e)}
            >
              <input
                type="email"
                placeholder="Indtast din email adresse"
                className="w-full h-[74px] pl-5 text-lg relative pr-12"
                onChange={(e) => handle(e)}
                id="email"
                value={userData.email}
              ></input>
              <button
                className="absolute self-center right-5 cursor-pointer"
                type="submit"
              >
                <AiOutlineArrowRight size="32" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
