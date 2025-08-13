import { FunctionComponent } from "react";

const AboutUs: FunctionComponent = () => {
    return (
        <section className="about-us">
            <div className="about-us__inner">
                <div className="about-us__text">
                    <h2>Über uns</h2>
                    <p>
                        Wir von <strong>Hülsmann Privatgarten</strong> sind Ihr verlässlicher Partner
                        für nachhaltige Gartenpflege und kreative Gartengestaltung.
                        Mit Leidenschaft, Fachwissen und einem Auge fürs Detail schaffen
                        wir individuelle Lösungen für jeden Garten.
                    </p>
                    <p>
                        Unser Ziel: Gärten, die nicht nur schön aussehen,
                        sondern in denen Sie sich rundum wohlfühlen.
                    </p>
                </div>
                <div className="about-us__image">
                    <img
                        className="about-us__photo focus-top-center" // sollte ein 4:3 Bild sein
                        src={`${process.env.PUBLIC_URL}/about-us.jpg`} alt="Unser Team" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
