import axios from "axios"
import { useState, useEffect} from "react"

const Reader = () => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

const loadFiles = async () => {
  const {data, status} = await axios.get('https://localhost:44326/api/Files');
  if(status ===200)
  {
  console.log(data);
  setIsLoading(false);
  }
  else
  setError(error.message);
}
  useEffect( () => {
    loadFiles();
  }, [])
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
      
      {error && <h2> {error}</h2>}
    </div>
  );
};

export default Reader;
