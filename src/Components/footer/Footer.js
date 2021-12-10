import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <p class="site-name">Buddy Guide</p>
                <ul class="flex-row">
                    <li>
                        <a href="#" class="footer-link">link1</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">link2</a>
                    </li>
                </ul>
                <p>&copy; All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;