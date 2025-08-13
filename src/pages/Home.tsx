import { FunctionComponent } from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";


interface HomePageProps {

}

const HomePage: FunctionComponent<HomePageProps> = (props: HomePageProps) => {
    return (<main>
        <Hero />
        <AboutUs />
        <Testimonials />
    </main>);
}

export default HomePage;