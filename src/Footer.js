import { Link } from "react-router-dom"

const Footer = () => {
    return ( 
        <div className="footer">
            <h4>
                © Michael Ernst 2021
            </h4>
            <div className="footer-links">
                <Link to="/privacy">Privacy</Link> 
            </div>
        </div>
     );
}
 
export default Footer;