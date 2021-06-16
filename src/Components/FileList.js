const FileList = (props) => {
    const files = props.files;

    return (  
        <div className="file-list">
            {files.map((file) =>(
            <div className="file-preview" key={file.id}>
                <h2> {file.fileName }</h2>
            </div>    
            ))}
        </div>
    );
}
 
export default FileList;