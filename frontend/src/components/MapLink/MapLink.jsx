import { useState } from "react";
import ClickIndicator from "./ClickIndicator";

const MapLink = () => {
    const [active, setActive] = useState(false);

    return (
        <section className="w-screen h-[90vh] bg-[#120D0A] flex flex-col justify-center items-center text-center">
            <div>
                <p className="text-[0.7rem] font-bold text-[#a79c8d] choose-subtitle">
                    Más cerca de lo que pensás
                </p>

                <h1 className="text-[5vw] leading-15 tracking-tight mt-5 text-[#F5F0EA]">
                    Trabajamos remoto con equipos<br />
                    de toda Latinoamérica y España,<br />
                </h1>
            </div>

            <ClickIndicator active={active} />

            <a
                href="#"
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="text-[#C9A68C] text-[5vw] underline hover:text-[#F5F0EA]"
            >
                agendá una llamada.
            </a>
        </section>
    );
};

export default MapLink;