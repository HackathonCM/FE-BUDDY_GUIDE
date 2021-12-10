import { Container } from "@mui/material";

import Header from "./header/Header"
import Footer from "./footer/Footer";
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