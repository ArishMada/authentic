import "./Login.css"
import { FaDoorOpen } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login">
      <div className="icon"><FaDoorOpen/> </div>  
      <h1>Login</h1>
      <form>
        <input autoFocus type={"email"} placeholder={"Email"}/>
        <input type={"password"} placeholder={"Password"}/>
        <button type={"submit"}>Login</button>
      </form>
    </div>
  )
}

export default Login
