import { useRef, useState } from "react"
import "./Register.scss"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom' 
const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const emailRef = useRef()
    const passRef = useRef()

    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = ()=>{
        setPass(passRef.current.value)
    }
    const handleSubmit= ()=>{
        navigate("/Home")
    }

  return (
    <div className="register">
        <div className="register__top">
            <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
                <Link to={"/Login"}>
                <button className="signButton">Sign in</button>
                </Link>
            </div>
        </div>
        <div className="continer">
            <h1>Unlimited movies, series, Tv shows, and more</h1>
            <h2>watch anywhere. cancel anytime</h2>
            <p>Enter your Email to watch now</p>
            {!email ? (
            <div className="input">
                <input  type="email" placeholder="email adress" ref={emailRef}/>
                <button className="registerbutton" onClick={handleStart}>Get Started</button>
            </div>)
            : (
                <form onSubmit={handleSubmit} className="input">
                <input  type="password" placeholder="password" ref={passRef}/>
                <button className="registerbutton" onClick={handleFinish}>Send</button>
            </form>
            )

}
        <Link to={"/Home"}>
            <button className="btn btn--play u-margin-top-big">Go to Home without Login</button>
        </Link>
        </div>
    </div>
  )
}

export default Register