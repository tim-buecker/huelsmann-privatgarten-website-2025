import { FunctionComponent } from "react";

interface HeroSectionProps {

}

const Hero: FunctionComponent<HeroSectionProps> = (props: HeroSectionProps) => {
    const bgUrl = `${process.env.PUBLIC_URL}/heroBg.jpg`;

    return (
        <section className="hero reveal-up" aria-label="Hero">
            <div
                className="hero__bg"
                style={{ // sollte ein 16:9 Bild sein
                    backgroundImage: `linear-gradient(rgba(28,28,28,.45), rgba(28,28,28,.45)), url(${bgUrl})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className="hero__content">
                <h1 className="hero__title">Ihr Traumgarten beginnt hier</h1>
                <p className="hero__subtitle">Nachhaltige Gartenpflege & individuelle Gestaltung.</p>
                <div className="hero__actions">
                    <a className="btn btn--primary" href="/kontakt">Jetzt beraten lassen</a>
                    <a className="btn btn--ghost" href="/leistungen">Leistungen ansehen</a>
                </div>
            </div>
        </section>);
}

export default Hero;