import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import acImg1 from "../../assets/activities-1.jpg";
import acImg2 from "../../assets/activities-2.jpg";
import acImg3 from "../../assets/activities-3.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Showcase = () => {
    const containerRef = useRef(null);
    const imgConRef = useRef(null);

    useGSAP(() => {
        if (!imgConRef.current || !containerRef.current) return;

        // Desktop-only: the pinned/scrubbed horizontal scroll-jack is a
        // desktop interaction pattern. On mobile the same track becomes a
        // normal native horizontal swipe (overflow-x-auto + snap), so skip
        // the ScrollTrigger pin entirely there.
        if (!window.matchMedia("(min-width: 1024px)").matches) return;

        const totalWidth =
            imgConRef.current.scrollWidth - containerRef.current.offsetWidth;

        // ✅ Horizontal scroll animation (unchanged)
        gsap.to(imgConRef.current, {
            x: () => -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "-10% 10%",
                end: () => `+=${totalWidth}`,
                scrub: true,
                pin: true,
                // invalidateOnRefresh: true,
                // markers: true,

                // onUpdate: () => {
                //     const currentScroll = window.scrollY;
                //     velocity = currentScroll - lastScroll;
                //     lastScroll = currentScroll;

                //     // ✅ Smooth limited movement (no gap, no break)
                //     const move = gsap.utils.clamp(
                //         -60,
                //         60,
                //         velocity * 2.2
                //     );

                //     images.forEach((img, index) => {
                //         gsap.to(img, {
                //             x: move * (index % 2 === 0 ? 1 : -1),
                //             duration: 0.4,
                //             ease: "power3.out",
                //             overwrite: "auto"
                //         });
                //     });
                // }
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className='relative w-full h-[70vh] lg:h-dvh overflow-hidden'
        >
            <div
                ref={imgConRef}
                className="lg:absolute top-0 left-0 h-full flex items-center justify-start gap-2 p-2 overflow-x-auto lg:overflow-hidden snap-x snap-mandatory lg:snap-none"
            >
                {/* Image 1 */}
                <div className="relative flex-shrink-0 w-[85vw] lg:w-[80vw] h-full overflow-hidden snap-center">
                    <div className="w-[80vw] lg:w-[77vw] absolute top-6 left-4 lg:top-10 lg:left-5 flex justify-between items-start text-[#F5F0EA]">
                        <h1 className="text-lg lg:text-3xl font-bold">CRM conectado<br /> a facturación</h1>
                        <p className="border-[1px] rounded-3xl px-2 py-1 text-center text-[0.7rem]">n8n</p>
                    </div>
                    <img
                        src={acImg1}
                        alt="Caso de uso 1"
                        loading="lazy"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[80vw] lg:w-[77vw] absolute bottom-6 left-4 lg:bottom-10 lg:left-5 flex justify-between items-start ">
                        <p className="text-[0.68rem] font-bold text-[#F5F0EA]">Cada venta cerrada genera la factura y actualiza el<br />stock automáticamente, sin intervención manual.</p>
                        <div className="flex justify-center items-center">
                            <p className="text-[#F5F0EA] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">01</p>
                            <p className="text-[#4e484e] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="relative flex-shrink-0 w-[85vw] lg:w-[80vw] h-full overflow-hidden snap-center">
                    <div className="w-[80vw] lg:w-[77vw] absolute top-6 left-4 lg:top-10 lg:left-5 flex justify-between items-start text-[#F5F0EA]">
                        <h1 className="text-lg lg:text-3xl font-bold">Soporte al<br />cliente 24/7</h1>
                        <p className="border-[1px] rounded-3xl px-2 py-1 text-center text-[0.7rem]">n8n + IA</p>
                    </div>
                    <img
                        src={acImg2}
                        alt="Caso de uso 2"
                        loading="lazy"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[80vw] lg:w-[77vw] absolute bottom-6 left-4 lg:bottom-10 lg:left-5 flex justify-between items-start ">
                        <p className="text-[0.68rem] font-bold text-[#F5F0EA]">Un bot clasifica consultas, responde las repetitivas y<br />escala al equipo humano solo cuando hace falta.</p>
                        <div className="flex justify-center items-center">
                            <p className="text-[#F5F0EA] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">02</p>
                            <p className="text-[#4e484e] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="relative flex-shrink-0 w-[85vw] lg:w-[80vw] h-full overflow-hidden snap-center">
                    <div className="w-[80vw] lg:w-[77vw] absolute top-6 left-4 lg:top-10 lg:left-5 flex justify-between items-start text-[#F5F0EA]">
                        <h1 className="text-lg lg:text-3xl font-bold">Dashboard en<br />tiempo real</h1>
                        <p className="border-[1px] rounded-3xl px-2 py-1 text-center text-[0.7rem]">Full-stack</p>
                    </div>
                    <img
                        src={acImg3}
                        alt="Caso de uso 3"
                        loading="lazy"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[80vw] lg:w-[77vw] absolute bottom-6 left-4 lg:bottom-10 lg:left-5 flex justify-between items-start ">
                        <p className="text-[0.68rem] font-bold text-[#F5F0EA]">Métricas de tu negocio centralizadas en un panel<br />propio, sin depender de hojas de cálculo dispersas.</p>
                        <div className="flex justify-center items-center">
                            <p className="text-[#F5F0EA] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                            <p className="text-[#4e484e] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>

                {/* Extra space */}
                {/* <div className="flex-shrink-0 w-[2%]"></div> */}
            </div>
        </section>
    );
};

export default Showcase;