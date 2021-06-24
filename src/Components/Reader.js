import Dropzone, { useDropzone } from 'react-dropzone';
import { useState } from "react";
import axios from '../Data/axiosconfig';


const Reader = () => {
  
  const [fileResult, setFileResult] = useState(null);
  const [file, setFile] = useState('');

    

    function handleDrop (e){
      setFile(e.target.value);
    } 

    // eslint-disable-next-line no-unused-vars
    const { getRootProps, getInputProps } = useDropzone({ handleDrop });


    const  handleUpload = async () => {
      let formData = new FormData();
      console.log('Recieved file: ' + file[0].name);
      formData.append('file', file[0]);
    console.log(formData.get(file[0]))
      await axios.post("/", formData)
      .then(res => {
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