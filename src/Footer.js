import { Link } from "react-router-dom"

const Footer = () => {
    return ( 
        <div className="footer">
            <h2>
                This is a footer!
            </h2>
            <div className="footer-links">
                <Link to="/privacy">Privacy</Link> 
            </div>
        </div>
     );
}
 
export default Footer;