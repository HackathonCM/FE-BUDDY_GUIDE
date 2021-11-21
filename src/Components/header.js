import React from "react";
import "../Styles/header.css";


function Header(){
    
    return(
    <div className="header-nav">
        <a href="/home"> {/* logo */} 
            <img className="header-logo" alt="logo" src="https://cdn-icons-png.flaticon.com/512/854/854996.png"/>
        </a>
        <div className="search"> {/* search bar */}
            <input className="search-bar"/>    {/* search field */}
            <img className="search-icon" alt="search" src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031293.png?token=exp=1637492710~hmac=d9e03bfb7a8c71449a1d73cb9c732a78"/> {/* search button */}
        </div>
        <div className="profile"> {/* nav items (login/logout, profile, notif) */}
            <a href="./notif"> {/* notification button */}
                <img className="notification-image" alt="notif" src="https://cdn-icons.flaticon.com/png/512/2529/premium/2529521.png?token=exp=1637493934~hmac=68b0df91390bf6e6208c48d1c460913f"/> {/* profile icon (link to profile) */}
            </a>    
            <a href="/profile">   {/* profile icon (link to profile) */}
                <img className="profile-image" alt="profile" src="https://cdn-icons.flaticon.com/png/512/561/premium/561845.png?token=exp=1637493830~hmac=276bab26d0bbb91f859023c692e5f1a6"/>
            </a>   
            <button className="login-button">Login</button>  {/* login/logout button */}
        </div>
    </div>
    );
    
}

export default Header;
