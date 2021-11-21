import React from "react";
import "../Styles/header.css";
import { link } from "react-router-dom"


export function header(){
    <div>
        <Link to="#"> {/* logo */} 
            <img/>
        </Link>
        <div> {/* search bar */}
            <input/>
        </div>
        <div> {/* nav items (login/logout, profile, notif) */}
            <span></span> {/* notification button */}
            <Link to="/profile"> 
                <img/> {/* profile icon (link to profile) */}
            </Link>   
            <button></button>  {/* login/logout button */}
        </div>
    </div>
}


