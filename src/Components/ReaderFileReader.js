import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ReaderFileReader = () => {

    const [fileText, setFileText] = useState("");

    const tryAgain = () => {
       setFileText("")
      }
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

    const {getRootProps, getInputProps} = useDropzone({onDrop})
    return ( <div className="file-reader">
        <h1>Read using Filereader API</h1>
        <h4> without adding foo or bar</h4>
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
            Drag 'n' drop some files here, or click to select files
            </p>
        </div>
       
               <button onClick= { tryAgain }>Clear</button>
               
                
        <div>
            <article className="article-text">
                <pre>
                    { fileText }
                </pre>
            </article>
        </div>
    </div> );
}
 
export default ReaderFileReader;