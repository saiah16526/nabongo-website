import logo from "../../assets/images/example.jpg"


function NavigationBar() {
    return(
        <>
        <nav id="navigation2">
            {/* Brand Name & Logo */}
            <div className="brand">
                <img className="logo"  src={logo} alt="" />
                <div className="name" >Company Name</div>
            </div>

            {/* Navigation Links */}
            <ul className="nav-btns">
                <li className="nav-btn"> <img src={logo} alt="" /> home</li>
                <li className="nav-btn"> <img src={logo} alt="" /> Programs</li>
                <li className="nav-btn"> <img src={logo} alt="" /> Student Life</li>
                <li className="nav-btn"> <img src={logo} alt="" /> Team</li>
            </ul>

            {/* Extras */}
            <div className="nav-panel-btn">
                <button>Contact us</button>
            </div>
             

        </nav>
        </>
    )
}

export default NavigationBar