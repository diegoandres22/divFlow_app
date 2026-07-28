import { useState } from "react";
import ClickIndicator from "./ClickIndicator";

const MapLink = () => {
    const [active, setActive] = useState(false);

    return (
        <section className="w-screen h-[90vh] bg-[#08110E] flex flex-col justify-center items-center text-center">
            <div>
                <p className="text-[0.7rem] font-bold text-[#a79c8d] choose-subtitle">
                    Closer than you think
                </p>

                <h1 className="text-[5vw] leading-15 tracking-tight mt-5 text-[#EAF6F1]">
                    Our Capsules® are located<br />
                    near Los Angeles with easy<br />
                </h1>
            </div>

            <ClickIndicator active={active} />

            <a
                href="#"
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="text-[#6FBE9C] text-[5vw] underline hover:text-[#EAF6F1]"
            >
                access by road.
            </a>
        </section>
    );
};

export default MapLink;