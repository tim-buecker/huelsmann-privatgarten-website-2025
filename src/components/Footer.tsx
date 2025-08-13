import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface FooterProps { }

const Footer: FunctionComponent<FooterProps> = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    Hülsmann Privatgarten
                </div>

                <nav className="footer__links" aria-label="Footer Navigation">
                    <Link to="/impressum">Impressum</Link>
                    <Link to="/datenschutz">Datenschutzerklärung</Link>
                </nav>

                <div className="footer__copy">
                    © {year} Hülsmann Privatgarten – Alle Rechte vorbehalten.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
