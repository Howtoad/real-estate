import { useEffect, useState } from "react";

const useFetchAuth = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch("https://dinmaegler.herokuapp.com/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: "alexander@mail.dk",
        password: "123456",
      }),
    })
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
  }, []);

  return { content };
};

export default useFetchAuth;
