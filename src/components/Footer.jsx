import { Link } from "react-router-dom";
import Button from "./Button"
import "./Footer.css";

function Footer() {
  return <>
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form action="">
            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works?</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works?</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works?</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works?</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="fab fa-typo3">

              </i>
            </Link>
          </div>
          <small className="website-rights">
            TVL © 2020
          </small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkeDin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link className="social-icon-link discord,"
              to="/"
              target="_blank"
              aria-label="Discord"
            >
              <i className="fab fa-discord"></i>
            </Link>
            
          </div>
        </div>,
      </section>
    </div>
  </>
}

export default Footer