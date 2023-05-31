import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const loggedInUser = () => {
    //
    return true;
}

const Header = () => {
    const[isLoggedIn,setIsLoggedIn] = useState(false)
    return (
        <div className="header">
            <div className="logo-header">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact info</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className="button-items">
                {
                    (isLoggedIn ? 
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    : 
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>)
                }
                
                
            </div>
        </div>
    )
}

export default Header;