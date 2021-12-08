import { Container } from "@mui/material";
import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import style from "../Styles/container.css"

const Layout = (props) => {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    );
}

export default Layout;