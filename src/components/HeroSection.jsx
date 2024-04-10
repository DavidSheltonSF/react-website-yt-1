import Button from "./Button"
import "./HeroSection.css"

function HeroSection() {
  return <>
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay look="true" muted></video> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button buttonStyle='btn--outline' buttonSize='btn--large'>
          Get Started
        </Button>
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  </>
}

export default HeroSection