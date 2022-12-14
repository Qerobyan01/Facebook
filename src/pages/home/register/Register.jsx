import "./register.css"
import { Link } from "react-router-dom"
export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Lamasocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you in Lamasocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">
                         <Link to="/Home">
                         Sign Up
                        </Link>
                    </button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                        <Link to="/login">
                        Log into Account
                        </Link>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

