import "./Signup.css"
import { FaDoorClosed } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="signup">
      <div className="icon"><FaDoorClosed/> </div>  
      <h1>Signup</h1>
      <form>
        <input autoFocus type={"email"} placeholder={"Email"}/>
        <input type={"password"} placeholder={"Password"}/>
        {/* <input type={"password"} placeholder={"Confirm password"}/> */}
        <button type={"submit"}>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
