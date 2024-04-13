import "./Form.css"
import Button from "./Button.jsx"

function Form(){
  return <>
    <form className="form" action="">
        <div className="form-header">
          <h3>Register</h3>
        </div>
        <div className="form-container">
        <input type="text" placeholder="First Name" required/>
        <input type="text" placeholder="Last Name" required/>
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required/>
        <input type="password" placeholder="Confirm Password" required/>
        </div>
        <div className="form-footer">
          <Button 
          type="submit"
          buttonStyle="btn--secondary"
          >
            Sign Up
          </Button>
        </div>
      </form>
  </>
}

export default Form