import { useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios';

const usePostFiles = (url) => {
    const [isUploading, setIsUploading] = useState(false);
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const history = useHistory();
    // const [fileData, setFileData] = useState('');
    const file = { fileName };
  
      axios.post(url + "/Files")
        .then((res) => {
          if (!res.ok) {
            throw Error("Something went wrong");
          }
          setIsUploading(true);
          console.log(res.data);
        })
        .then(() => {
          console.log("New file added");
          setIsUploading(false);
          setSuccess(true);
          history.push("/read");
        })
        .catch(function (error) {
          if (error.response) {
            setIsUploading(false);
          //   setError(error.message);
            console.log(error.status);
            console.log(error.headers);
            console.log(error.data);
          } else if (error.request) {
            console.log(error.request);
            setIsUploading(false);
            setError(error.message);
          } else {
            console.log("Error", error.message);
            setIsUploading(false);
          //   setError(error.message);
          }
        });
        return { isUploading, error, fileName, success }
    };

export default usePostFiles;