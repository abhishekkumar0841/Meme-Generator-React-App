import axios from "axios";
import { useEffect, useState } from "react";

const useMeme = () => {
  const [memesUrl, setMemesUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  const API_KEY = "2fVpU6QSVfo4w34iVGfP4keHZXIpoeSt";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const searchedUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${input}`;

  async function fetchApi() {
    setLoading(true);
    const output = await axios.get(input ? searchedUrl : url);
    const { data } = output;
    const randomUrl = data.data.images.downsized_large.url;
    setMemesUrl(randomUrl);
    setLoading(false);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  function changeHandler(e) {
    setInput(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    fetchApi();
  }

  return { memesUrl, loading, input, fetchApi, changeHandler, submitHandler };
};

export default useMeme;
