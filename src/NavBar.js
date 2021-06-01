import { Link } from "react-router-dom"
const NavBar = () => {
    return ( 
        <div className="navbar">
            <h2>Welcome to textreader</h2>
            <Link to="/upload"> Upload </Link>
        </div>
     );
}
 
export default NavBar;