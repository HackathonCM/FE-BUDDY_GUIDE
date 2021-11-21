import React from "react";
import "../Styles/header.css";
import { link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';


export function header(){
    <div>
        <Link to="#"> {/* logo */} 
            <img className="header_logo" src="./Logo.png"/>
        </Link>
        <div> {/* search bar */}
            <input/>    {/* search field */}
            <SearchIcon className="header_searchIcon" /> {/* search button */}
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


