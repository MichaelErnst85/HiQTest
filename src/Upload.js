import { useState } from "react";
import { useHistory } from "react-router-dom"


const Upload = () => {
    const history = useHistory();
    
    const [isUploading, setIsUploading] = useState(false);
    const [fileName, setFileName] = useState('');
    const [error, setError] =useState(null);
    // const [fileData, setFileData] = useState('');

    const handleUpload= (e) => {
            e.preventDefault();
            const file = {fileName};
            
            setIsUploading(true);

            fetch('https://localhost:44326/Files', {
                method: 'POST', 
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(file)
            }).then(res => {
                if(!res.ok){
                    throw Error("Something went wrong")
                }
                return res.json();
            })
            .then(()=> {
                console.log("New file added");
                setIsUploading(false);
                history.push('/');
            }).catch(err => {
                setIsUploading(false);
                setError(err.message);
            })

    }
    return ( 
        
        <div className="upload">
            <h1>Upload</h1>
            <h2>
                Here you can upload your files
            </h2>
        <div className="submit-wrapper">
            <input 
            type="file" id="upload" value = {fileName} onChange={(e) => setFileName(e.target.value)}></input>
            {!isUploading && <button type="submit" onClick={ handleUpload }>Upload</button>}
            {isUploading && <button disabled>Uploading..</button>}
            {error && <h2> {error} </h2>}
            {!error && <h2> Successfully uploaded file </h2>}
            </div>           
             
        </div>
     );
}

export default Upload;