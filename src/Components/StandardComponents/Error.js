import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="error">
            <h1>Error</h1>
            <h2>
                The page was not found!
            </h2>
            <Link to="/">Return to Home</Link>
        </div>
     );
}
 
export default Error;