import { Link, useNavigate } from "react-router-dom";
import"./Login.scss"

const Login = () => {
    const navigate = useNavigate()

    const handlesubmit = ()=>{
        navigate("/Home")
    }
  return (
    <div className="Login">
        <div className="Login__top">
            <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
               
            </div>
        </div>
        <div className="continer">
           
            <form onSubmit={handlesubmit} >
            <h1>Sign up</h1>
                <input type="email" placeholder='email addres'/>
                <input type="password" placeholder='password'/>
                <button className="signup">Sign in</button>
                <span>New in The Netflix?
                    <Link to={"/"}>
                     <b>Sign up now</b>
                     </Link> 
                     </span>
            </form>
        </div>
    </div>
  )
}

export default Login;