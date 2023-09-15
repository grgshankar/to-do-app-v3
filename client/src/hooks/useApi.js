import { useCallback, useState } from "react";
import { URLS } from "../constants";
import axios from "axios";

export default function useApi() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const create = async ({ url, payload }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(url, payload);
      setData(data.data);
      await list(URLS.TODOS);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const list = useCallback(async (url) => {
    console.log("callback", url);
    try {
      setLoading(true);
      const { data } = await axios(url);
      setData(data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }

    // setData(data.data);
  }, []);
  const updatebyId = () => {};
  const remove = () => {};
  return { data, error, loading, create, list, updatebyId, remove };
}
