import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <p className="site-name">Buddy Guide</p>
                <ul className="flex-row">
                    <li>
                        <a href="#" className="footer-link">link1</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">link2</a>
                    </li>
                </ul>
                <p>&copy; All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;