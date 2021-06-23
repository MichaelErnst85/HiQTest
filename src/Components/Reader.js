import Dropzone, { useDropzone } from 'react-dropzone';
import { useState } from "react";
import axios from '../Data/axiosconfig';


const Reader = () => {
  
  const [fileResult, setFileResult] = useState("");
  const [fileName, setFileName] = useState('');

    

    const handleDrop = acceptedFiles =>
    
      setFileName(acceptedFiles.map(file => file));
      console.log(fileName)

    // eslint-disable-next-line no-unused-vars
    const { getRootProps, getInputProps } = useDropzone({ handleDrop });


    const handleUpload = () => {
      let formData = new FormData();
      console.log('Recieved file: ' + fileName[0])
      formData.append('file', fileName)
      axios.post("/", formData)
      .then(async res => {
        console.log(res);  
        setFileResult(res);
      }).catch(err => console.log(err.message))
    
    }

    return (
      <div className="reader">

        <h1>Read using API</h1>
      <Dropzone onDrop={ handleDrop }>
        {({ getRootProps, getInputProps })=>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            Drag 'n' drop some files here or click to select files
            </p>
            </div>
        }
      </Dropzone>
   

            <button onClick= { handleUpload } >
              Upload
            </button>
            
            <div className="text-field">
            <article>
              <p>
                { fileResult }
              </p>
            </article>
            </div>
        
      </div>
    );
  };


export default Reader;