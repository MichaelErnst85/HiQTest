import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";


const usePostFiles = () => {
  const history = useHistory();

  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


 
 const submitFile =  (url) => {
   console.log(selectedFile.name);
   const formData = new FormData();
   formData.append("fileName", selectedFile, selectedFile.name)
   axios
    .post(url)
  
    .then(( res ) => {
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
