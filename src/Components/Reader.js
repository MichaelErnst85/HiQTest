import Dropzone, { useDropzone } from 'react-dropzone';
import { useState } from "react";
import axios from '../Data/axiosconfig';


const Reader = () => {
  
  const [fileResult, setFileResult] = useState(null);
  const [file, setFile] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [topOccurence, setTopOcurrence] = useState('');

    const tryAgain = () => {
      setSuccess(false);
      setFileResult(null);
      setError(null);
      setFile("");
    }

    const handleDrop = acceptedFiles =>
    
      setFile(acceptedFiles.map(file => file));
   
      
      
    // eslint-disable-next-line no-unused-vars
    const { getRootProps, getInputProps } = useDropzone({ handleDrop });


    const  handleUpload = async () => {
      let formData = new FormData();
      formData.append('formFile', file[0]);
      await axios.post("/", formData)
       .then(res => {
        console.log(res);  
        setFileResult(res.data.result);
        setTopOcurrence(res.data.topOccurence)
        setSuccess(true);
        setError(null)
      }).catch(err => 
      setError(err?.message));
    
    }

    return (
      <div className="reader">

        <h1>Read using API</h1>
      {!success && <Dropzone onDrop={ handleDrop }>
        {({ getRootProps, getInputProps })=>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            Drag 'n' drop some files here or click to select files
            </p>
            </div>
        }
      </Dropzone>}
     
   
<div className="button-wrapper">
            {!success && <button onClick= { handleUpload } >
              Upload
            </button>}
            {success && <button onClick= { tryAgain } >
              Clear
            </button>}
            </div>
            {error && <h2> { error } </h2>}
            {error && <button onClick={ tryAgain }> Clear </button>}
            
            <div className="text-field">
            <article className="article-text">
            {success && <p>Word occuring the most: { topOccurence }</p>}
              <pre>
                { fileResult }
              </pre>
            </article>
            </div>
        
      </div>
    );
  };


export default Reader;