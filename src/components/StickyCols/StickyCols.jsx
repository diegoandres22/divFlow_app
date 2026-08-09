import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import colimg1 from "../../assets/cap1-square.jpg";
import colimg2 from "../../assets/cap2-square.jpg";
import colimg3 from "../../assets/cap3-square.jpg";

gsap.registerPlugin(ScrollTrigger);

// Simple, robust scroll reveal — no pin, no SplitText, no shared classnames
// between blocks. Each block animates itself independently via its own ref,
// so there's no selector collision risk and nothing to desync.
const StickyCols = () => {
    const sectionRef = useRef(null);
    const block1Ref = useRef(null);
    const block2Ref = useRef(null);

    useGSAP(() => {
        [block1Ref.current, block2Ref.current].forEach((el) => {
            if (!el) return;
            gsap.from(el, {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    end: "top 55%",
                    scrub: true,
                },
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full px-6 py-16 lg:py-24 flex flex-col gap-16 lg:gap-24 overflow-hidden bg-[#120D0A]">
            {/* Block 1 */}
            <div ref={block1Ref} className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                    <h3 className="text-[#F5F0EA] text-2xl lg:text-4xl font-bold leading-tight mb-4">
                        Visibilidad total sobre cada proceso automatizado, en un solo panel
                    </h3>
                    <p className="text-[#C9A68C] text-sm lg:text-base">
                        Mirá en tiempo real cada flujo corriendo sin sorpresas y con trazabilidad completa.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex gap-3">
                    <img
                        src={colimg1}
                        alt="Panel de control de flujos DivFlow"
                        loading="lazy"
                        className="w-1/2 h-[28vh] lg:h-[40vh] object-cover rounded-[2rem]"
                    />
                    <img
                        src={colimg2}
                        alt="Sincronización de datos DivFlow"
                        loading="lazy"
                        className="w-1/2 h-[28vh] lg:h-[40vh] object-cover rounded-[2rem] mt-6"
                    />
                </div>
            </div>

            {/* Block 2 */}
            <div ref={block2Ref} className="w-full flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                    <h3 className="text-[#F5F0EA] text-2xl lg:text-4xl font-bold leading-tight mb-4">
                        Trazabilidad completa en cada paso del flujo automatizado
                    </h3>
                    <p className="text-[#C9A68C] text-sm lg:text-base">
                        Sabés qué pasó, cuándo y por qué sin depender de nadie para entenderlo.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img
                        src={colimg3}
                        alt="Monitoreo de flujos DivFlow"
                        loading="lazy"
                        className="w-full h-[32vh] lg:h-[45vh] object-cover rounded-[2rem]"
                    />
                </div>
            </div>
        </section>
    );
};

export default StickyCols;
