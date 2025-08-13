import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

interface NavbarProps { }

const Navbar: FunctionComponent<NavbarProps> = () => {
    const logoUrl = `${process.env.PUBLIC_URL}/logo.jpg`;
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);

    const close = () => setOpen(false);

    // Scroll-Lock & Navbar-Höhe als CSS-Var
    useEffect(() => {
        const root = document.documentElement;
        const updateHeights = () => {
            const h = innerRef.current?.getBoundingClientRect().height ?? 64;
            root.style.setProperty("--navbar-height", `${Math.round(h)}px`);
        };
        updateHeights();
        window.addEventListener("resize", updateHeights);
        return () => window.removeEventListener("resize", updateHeights);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("nav-open", open);
        return () => document.documentElement.classList.remove("nav-open");
    }, [open]);

    return (
        <nav ref={wrapRef} className={`navbar fade-in ${open ? "is-open" : ""}`}>
            <div ref={innerRef} className="navbar__inner">
                <div className="navbar__brand">
                    <Link to="/" onClick={close} aria-label="Startseite">
                        <img className="navbar__icon" src={logoUrl} alt="Logo Icon" />
                        Hülsmann Privatgarten
                    </Link>
                </div>

                <button
                    className={`navbar__toggle ${open ? "is-open" : ""}`}
                    aria-expanded={open}
                    aria-controls="primary-nav"
                    aria-label={open ? "Menü schließen" : "Hauptmenü öffnen"}
                    onClick={() => setOpen(o => !o)}
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>

                {/* Desktop/Tablet Links (sichtbar >= bp-md) */}
                <ul className="navbar__links navbar__links--desktop">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/leistungen">Leistungen</NavLink></li>
                    <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                </ul>
            </div>

            {/* Overlay (bedeckt die ganze Seite), aber Navbar bleibt darüber */}
            <div
                className="navbar__overlay"
                hidden={!open}
                // onClick={close}
                aria-hidden="true"
            />

            {/* Mobile Panel (sichtbar < bp-md) */}
            <ul
                id="primary-nav"
                className={`navbar__links navbar__links--mobile ${open ? "is-open" : ""}`}
            >
                <li><NavLink to="/" onClick={close}>Home</NavLink></li>
                <li><NavLink to="/leistungen" onClick={close}>Leistungen</NavLink></li>
                <li><NavLink to="/kontakt" onClick={close}>Kontakt</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
