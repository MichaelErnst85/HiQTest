const Upload = () => {
    return ( 
        
        <div className="upload">
            <h1>Upload</h1>
            <h2>
                Here you can upload your files
            </h2>
        <div className="submit-wrapper">
            <input 
            type="file" id="upload" onChange="{ (e) => onChange(e.)}"></input>
            <button type="submit" onClick="handleUpload">Upload</button>
            </div>            
        </div>
     );
}
 
export default Upload;