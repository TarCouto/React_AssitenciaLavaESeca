
import Hero from "../components/Hero";
import Contact from "./Contact";
import Services from "../components/Services";
import Team from "./Team";


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-start w-full">
            <Hero />
            <Services />
            <Team />
            <Contact />
        </div>
    );
}
