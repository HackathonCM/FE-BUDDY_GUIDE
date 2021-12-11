import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";

const Home = () => {

    return (
        <Layout>
            <Link to="/">Home</Link>
            <Link to="/user">Login User</Link>
            <Link to="/guide">Login Guide</Link>
            <Link to="/login">Login Form</Link>
        </Layout>
    );
}

export default Home;
