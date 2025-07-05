import "../../assets/styles/nabongo-institute/NavigationBar.css";
import logo from "../../assets/images/example.jpg";

function NavigationBar() {
    return (
        <nav id="navigation">
            {/* Brand Logo and Name */}
            <div className="nav-brand">
                <img className="nav-logo" src={logo} alt="Company Logo" />
                <div className="nav-brand-name">Company Name</div>
            </div>

            {/* Primary Navigation Links */}
            <ul className="nav-links">
                <li className="nav-link"><img src={logo} alt="" /> Home</li>
                <li className="nav-link"><img src={logo} alt="" /> Institutes</li>
                <li className="nav-link"><img src={logo} alt="" /> Community</li>
            </ul>

            {/* Navigation Utility Button */}
            <div className="nav-action">
                <button className="menu-toggle-btn"></button>
            </div>
        </nav>
    );
}

export default NavigationBar;
