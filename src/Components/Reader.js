import useGetFiles from "../Data/useGetFiles";
import FileList from "./FileList"

const endpoint = "https://localhost:44326/api";
const Reader = () => {


  const { data, error, isLoading} = useGetFiles(endpoint)


 
  return (
    <div className="reader">
      {isLoading && <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>}
      <h1>Read</h1>
      <h2>Click on a file to read it</h2>
       <FileList files={data}/>
      {error && <h2> {error}</h2>}
    </div>
  );
};

export default Reader;
