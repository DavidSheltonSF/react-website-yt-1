import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button.jsx";

function Navbar() {
  /* States */
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  /* Intermediary functions to handle states */
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /* Show or hidden the SIGN UP button */
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }

  }

  useEffect(() => {
    showButton()
  }, [])

  /* Call function always window is resized */
  window.addEventListener('resize', showButton)

  return <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          TRVL <i className="fab fa-typo3"/>
        </Link>
        <div className="menu-icon">
          <i onClick={handleClick} className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/react-website" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item-mobile">
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul> 
        {button && <Button buttonStyle='btn--outline'> SIGN UP</Button>} 
      </div>
    </nav>
  </>
}

export default Navbar