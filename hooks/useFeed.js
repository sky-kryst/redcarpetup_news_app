import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../hooks-store/store";
import filterIDs from "../utils/filterIDs";

const useFeed = ({
  source = null,
  query = null,
  category = null,
  page = null,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useStore(false)[1];

  useEffect(() => {
    let url = "https://newsapi.org/v2/top-headlines?country=in";
    source && (url = url + `&source=${source}`);
    category && (url = url + `&category=${category}`);
    page && (url = url + `&page=${page}`);
    query && (url = url + `&q=${query}`);
    const effect = async () => {
      setLoading(true);
      try {
        let result = (
          await axios.get(url, {
            headers: { "X-Api-Key": "c956b1ff67784a2b8405c2fde2bdf363" },
          })
        ).data.articles.map((e) => {
          e.id = e.publishedAt + `${Math.floor(Math.random() * 10)}`;
          return e;
        });
        result = filterIDs(data, result);
        setData(result);
        dispatch("SET_FEED", result);
      } catch (e) {
        setError(e.message);
      }
      setLoading(null);
    };
    effect();
  }, [source, query, category]);

  return { data, loading, error };
};

export default useFeed;
