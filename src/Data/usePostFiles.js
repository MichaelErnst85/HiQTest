import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const usePostFiles = (url) => {
  const history = useHistory();

  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  setIsUploading(true);
 
 const submitFile = (url) => {
  axios
    .post(url + "/Files")
    .then( res => {
        setSuccess(!!res.ok);
      if (!res.ok) {
          setError("Something went wrong");
        throw Error("Something went wrong");    
      }})
    .then(() => {
      console.log("New file added");
      setIsUploading(false);
      setSuccess(true);
      history.push("/read");
    })
    .catch(error => {
        if( error?.request){
            console.log("ERROR object", error);
            setError(error?.message);
        }
    });
};
  return { isUploading, error, fileName, setFileName, success, submitFile };
};

export default usePostFiles;
