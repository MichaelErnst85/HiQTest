import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from "react";


const Reader = () => {
  
  const [fileText, setFileText] = useState("");

    const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log('reading was aborted');
        reader.onerror = () => console.log('error reading file');
        reader.onload = () => {
          const binaryStr = reader.result;
          setFileText(binaryStr);
          console.log(binaryStr);
        }
        reader.readAsText(file)
      });
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop });




    return (
      <div className="reader">

        <h1>Read</h1>

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            Drag 'n' drop some files here or click to select files
            </p>
            <p>
            { fileText }
            </p>
        </div>
      </div>
    );
  };


export default Reader;