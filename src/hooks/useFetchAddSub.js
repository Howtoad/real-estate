import { useEffect, useState } from "react";

const useFetchAddSub = ({ userData }) => {
  const [content, setContent] = useState();

  useEffect(() => {
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
  }, []);

  return { content };
};

export default useFetchAddSub;
