// import css
import "./NavBar.css";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  return <nav>
        <h1>OAuth Assignment</h1>
  
        
        <div >
            {/* icone for profile */}
            <div className="icon"><FaUser/> </div>
            <p>Welcome sir <span>Bagzcode</span></p>
            
        </div> 
    </nav>      
}

export default NavBar
