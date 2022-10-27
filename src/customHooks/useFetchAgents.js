import { useEffect, useState } from "react";
const useFetchAgents = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch("https://dinmaegler.herokuapp.com/agents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
  }, []);

  return { content };
};

export default useFetchAgents;
