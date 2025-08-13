// src/pages/Contact.tsx
import { FunctionComponent, JSX } from "react";
import { contactTiles } from "../data/contact";

const Icons: Record<string, JSX.Element> = {
    email: (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" fill="currentColor" />
        </svg>
    ),
    phone: (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4.9c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1.1l-2.2 2.2Z" fill="currentColor" />
        </svg>
    ),
    address: (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="currentColor" />
        </svg>
    ),
    instagram: (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5ZM18.5 6A1.1 1.1 0 1 0 19.6 7.1 1.1 1.1 0 0 0 18.5 6Z" fill="currentColor" />
        </svg>
    )
};

const Contact: FunctionComponent = () => {
    return (
        <section className="contact-page fade-in">
            <div className="contact-page__header">
                <h1>Kontakt</h1>
                <p>Wir freuen uns auf Ihre Nachricht oder Ihren Anruf.</p>
            </div>

            <div className="contact-page__grid">
                {contactTiles.map((tile) => {
                    const content = (
                        <>
                            <div className={`contact-page__icon contact-page__icon--${tile.type}`}>
                                {Icons[tile.type]}
                            </div>
                            <div className="contact-page__body">
                                <h3>{tile.title}</h3>
                                <p>{tile.text}</p>
                            </div>
                        </>
                    );

                    return tile.href ? (
                        <a key={tile.type} className="contact-page__card" href={tile.href} target={tile.type === "instagram" ? "_blank" : undefined} rel={tile.type === "instagram" ? "noopener noreferrer" : undefined}>
                            {content}
                        </a>
                    ) : (
                        <div key={tile.type} className="contact-page__card">
                            {content}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Contact;
