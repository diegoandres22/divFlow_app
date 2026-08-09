import { useState } from "react";
import ClickIndicator from "./ClickIndicator";
import { smoothScrollTo } from "../../lib/smoothScroll";

const MapLink = () => {
    const [active, setActive] = useState(false);

    return (
        <section className="w-screen h-[90vh] bg-[#120D0A] flex flex-col justify-center items-center text-center px-6 lg:px-0">
            <div>
                <p className="text-[0.7rem] font-bold text-[#a79c8d] choose-subtitle">
                    Más cerca de lo que pensás
                </p>

                <h1 className="text-[9vw] sm:text-4xl lg:text-[5vw] leading-tight lg:leading-15 tracking-tight mt-5 text-[#F5F0EA]">
                    Trabajamos remoto 
                
                </h1>
            </div>

            <ClickIndicator active={active} />

            <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); smoothScrollTo("#contact"); }}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="text-[#C9A68C] text-lg lg:text-[5vw] underline hover:text-[#F5F0EA]"
            >
                agendá una llamada.
            </a>
        </section>
    );
};

export default MapLink;