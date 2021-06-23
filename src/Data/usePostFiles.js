import { useState } from "react";
import axios from "./axiosconfig";


const usePostFiles = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


 
 const submitFile = async (url) => {
   console.log(selectedFile.name);
   let formData = new FormData();
   formData.append("file", selectedFile)
   await axios
    .post('/', formData)
    .then( res => {
        console.log("working...")
        setSuccess(res.ok);
      if (!res.ok) {
        console.log(res)
          setError("Something went wrong");
        throw Error("Something went wrong");    
      }})
    .then(() => {
      console.log("New file read");
      setSuccess(true);
      setSelectedFile('');
    })
    .catch(error => {
        if( error?.request){
            console.log("ERROR object", error);
            console.log(error.response);
            setError(error?.message);
        }
    });
};
  return {error, setError, selectedFile, setSelectedFile, success, submitFile };
};

export default usePostFiles;
