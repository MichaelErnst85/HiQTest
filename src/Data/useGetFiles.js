import { useEffect, useState } from "react";
import axios from "axios";


const useGetFiles = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url + "/files")
      .then(function (res) {
        console.log('Incoming files', res.data);
        return res.data;
      })
      .then((data) => {
        JSON.stringify(data);
        setData(data);
        setIsLoading(false);
      }).catch(err => {
        setError(err.message);
      });
  }, [url]);

  return { data, error, isLoading}
};

export default useGetFiles;
