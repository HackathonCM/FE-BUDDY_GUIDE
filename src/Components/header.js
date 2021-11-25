import React from "react";
import "../Styles/header.css";


function Header() {

    return (
        <div className="header-nav">
            <a href="/home"> {/* logo */}
                <img className="header-logo" alt="logo" src="https://cdn-icons-png.flaticon.com/512/854/854996.png" />
            </a>
            <div className="search"> {/* search bar */}
                <input className="search-bar" />    {/* search field */}
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5vh" height="auto" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                {/* search button */}
            </div>
            <div className="profile"> {/* nav items (login/logout, profile, notif) */}
                <a href="./notif"> {/* notification button */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="auto" fill="currentColor" className=" nav-img bi bi-bell" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                </a>
                <a href="/profile">   {/* profile icon (link to profile) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="auto" fill="currentColor" className="nav-img bi bi-person-badge" viewBox="0 0 16 16">
                        <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                    </svg>
                </a>
                <button className="btn btn-secondary">Login</button>  {/* login/logout button */}
            </div>
        </div>
    );

}

export default Header;
