import React from "react";
import Layout from "../../Components/Layout";
import Objectives from "../../Components/objectives/Objectives";

const HomeGuide = () => {
    console.log("home page")
    return (
        <Layout>
            <h1>
                Guide Home Page
            </h1>
            <Objectives />
        </Layout>
    );
}

export default HomeGuide;
