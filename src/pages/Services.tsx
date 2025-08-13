import { FunctionComponent } from "react";
import { services } from "../data/services";

const Services: FunctionComponent = () => {
    return (
        <section className="services fade-in">
            <div className="services__header">
                <h1>Unsere Leistungen</h1>
                <p>
                    Wir bieten Ihnen ein breites Spektrum an Garten- und Landschaftsarbeiten – individuell auf Ihre Wünsche abgestimmt.
                </p>
            </div>

            <div className="services__grid">
                {services.map((service) => (
                    <div key={service.id} className="services__item">
                        <div className={`services__image ${service.focus ? `focus-${service.focus}` : ""}`}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="services__photo"
                            />
                        </div>
                        <div className="services__content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
