import usePostFiles from "../Data/usePostFiles";

const endpoint = "http://localhost:44326/api";
const Upload = () => {
 

 const { isUploading, fileName, error, success } = usePostFiles(endpoint);
  
  return (
    <div className="upload">
      <h1>Upload</h1>
      <h2>Here you can upload your files</h2>
      <div className="submit-wrapper">
        <input
          type="file"
          id="upload"
          value={fileName}
        ></input>
        {!isUploading && (
          <button type="submit" onClick={postFile}>
            Upload
          </button>
        )}
        {isUploading && <button disabled>Uploading..</button>}
        {error && <h2> {error} </h2>}
        {success && <h2>Succesfully uploaded file</h2>}
      </div>
    </div>
  );
};

export default Upload;
