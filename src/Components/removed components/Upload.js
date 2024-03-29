// import { useEffect } from "react";
import usePostFiles from "../Data/usePostFiles";

const styleObj = {
  fontStyle: "italic" , 
  color: "rgb(252,81,1)"
}

const endpoint = "https://localhost:44326/api";
const Upload = () => {

  const { 
            isUploading, 
            setIsUploading,
            setSelectedFile,
            error,
            setError,
            success, 
            submitFile
} = usePostFiles(endpoint);
  
const onSubmit = () => {
  submitFile(endpoint+ '/Files')
};


const onFileChange = (e) => {
  const changedFile = e.target.files[0];
  setSelectedFile(changedFile);
  setError(null);
  setIsUploading(false)
}


const renderLoader = () => {
  if(!isUploading) {
    return <button type="submit" 
    onClick={ onSubmit }>
      Upload
    </button>;
  }
  return <button disabled>Uploading..</button>
}

const renderError = () => {
  if(!error) {
    return;
  }
  return <h2 style={ styleObj }> {error} </h2>
};

const renderSuccess = () => {
  if(!success) {
    return;
  }
  return <h2 style={ styleObj }>Succesfully uploaded file</h2>
};

return (
  <div className="upload">
    <h1>Upload</h1>
    <h2>Here you can upload your files</h2>
    <div className="submit-wrapper">
    <input type="file"
    name="fileName" 
    onChange={ onFileChange }/>
      { renderLoader() }
      { renderError() }
      { renderSuccess() }
    </div>
  </div>
);
};

export default Upload;
