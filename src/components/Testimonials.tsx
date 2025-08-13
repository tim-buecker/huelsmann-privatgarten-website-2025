import { FunctionComponent } from "react";
import { testimonials } from "../data/testimonials";

const Testimonials: FunctionComponent = () => {
    return (
        <section className="testimonials">
            <h2>Kundenrezension</h2>
            <div className="testimonials__marquee">
                <div className="testimonials__track">
                    {testimonials.concat(testimonials).map((t, idx) => (
                        <div key={idx} className="testimonial-card">
                            <div className="testimonial-images">
                                <img src={t.beforeImg} alt="Vorher" />
                                <img src={t.afterImg} alt="Nachher" />
                            </div>
                            <p className="testimonial-quote">"{t.quote}"</p>
                            <p className="testimonial-meta">
                                {t.name ?? "Anonym"} – {t.location}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
