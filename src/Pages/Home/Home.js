import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/user">Login User</Link>
            <Link to="/guide">Login Guide</Link>
            <Link to="/login">Login Form</Link>
        </div>
    );
}

export default Home;
