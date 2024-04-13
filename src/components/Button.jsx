import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--secondary', 'btn--outline'];

const SIZES = ['btn-mediun', 'btn-large'];

function Button(
  {children, type, onClick, buttonStyle, buttonSize, link, mobileButtonStyle}
){

  /* Define a default style if button don't have a valid style*/
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  /* Define a default size if button don't have a valid size*/
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  if (link) {
    return <>

    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`
          btn 
          ${checkButtonStyle} 
          ${checkButtonSize} 
        `}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  </>
  } else {
    return <>
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  </>
  }
}


export default Button