import { useEffect, useState } from "react";

const useFetchAddSub = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch("https://dinmaegler.herokuapp.com/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "testlol@email.com",
      }),
    })
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
  }, []);

  return { content };
};

export default useFetchAddSub;
