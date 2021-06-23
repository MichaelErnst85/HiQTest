import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ReaderFileReader = () => {

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

    const {getRootProps, getInputProps} = useDropzone({onDrop})
    return ( <div className="file-reader">
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
            Drag 'n' drop some files here, or click to select files
            </p>
        </div>
        <div>
            <article>
                <h2>
                    Your file!
                </h2>
                <p>
                    { fileText }
                </p>
            </article>
        </div>
    </div> );
}
 
export default ReaderFileReader;