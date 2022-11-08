import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchAgent = () => {
  const [content, setContent] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch("https://dinmaegler.herokuapp.com/agents/" + id, {
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

export default useFetchAgent;
