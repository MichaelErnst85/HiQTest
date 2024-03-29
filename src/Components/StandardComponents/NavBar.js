import { Link } from "react-router-dom"
const NavBar = () => {
    return ( 
        <div className="navbar">
            <h2>Textreader</h2>
            <div className="link-wrapper">
                <Link to="/">Home</Link>
                <Link to="/read">Read</Link>
                <Link to="/readWithFR">Read w FR</Link>
            </div>
        </div>
     );
}
 
export default NavBar;