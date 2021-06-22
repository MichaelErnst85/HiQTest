import { useState } from "react";
import { useHistory } from "react-router";
import axios from "./axiosconfig";


const usePostFiles = () => {
  const history = useHistory();

  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


 
 const submitFile = async (url) => {
   console.log(selectedFile.name);
   let formData = new FormData();
   formData.append("file", selectedFile)
   await axios
    .post('/', formData)
    .then( async res => {
        console.log("working...")
        setIsUploading(true);
        setSuccess(res.ok);
      if (!res.ok) {
        console.log(res)
          setError("Something went wrong");
        throw Error("Something went wrong");    
      }})
    .then(() => {
      console.log("New file added");
      setIsUploading(false);
      setSuccess(true);
      setSelectedFile('');
      history.push("/read");
    })
    .catch(error => {
        if( error?.request){
            console.log("ERROR object", error);
            console.log(error.response);
            setError(error?.message);
        }
    });
};
  return { isUploading, setIsUploading, error, setError, selectedFile, setSelectedFile, success, submitFile };
};

export default usePostFiles;
