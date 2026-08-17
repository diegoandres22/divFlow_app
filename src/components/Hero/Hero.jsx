import gsap from "gsap/all";
import smoke from "@/assets/smoke_final.mp4";
import robotHeroBg from "@/assets/robot-1.jpg"
import Brand from "@/components/Buttons/Brand";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {

    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });


    useGSAP(() => {
        if (!isMobHero) {
            gsap.to(".hero-section .hero-img", {
                yPercent: "-5",
                stagger: 0.02,
                scale: 1.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                    // markers: true
                }
            });
        };
    }, [isMobHero]);

    return (
        <section id="hero" className="hero-section w-dvw md:h-dvh h-[100vh] md:p-2 p-2.5 mb-20">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                {/* Background image (desktop only, capa de fondo) */}
                <div
                    className="hero-img absolute inset-0 bg-no-repeat bg-cover bg-center z-0 lg:block hidden"
                    style={{ backgroundImage: `url(${robotHeroBg})` }}
                />
                <div className="hero-img absolute inset-0 bg-base-100/40 z-[1] lg:block hidden" />

                {/* Smoke video (capa superior): siempre relativa a la tarjeta completa,
                    en todos los breakpoints */}
                <video
                    src={smoke}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 md:w-full md:h-full object-cover z-10 pointer-events-none object-center opacity-40 mix-blend-hard-light md:top-0 top-[5%] h-[90%]  rounded-[2rem] md:px-0"
                ></video>

                <div className="relative z-20 p-4 flex flex-col md:justify-center">
                    {/* Bajo lg, Logo (top-izq) y ReserveBtn (top-der) flotan sobre los
                        primeros ~110px de la sección: el título y el bloque de texto se
                        corren en flujo normal (mt-28) para no chocar con ellos, centrados,
                        y solo a partir de lg pasan a la composición absoluta original. */}
                    <div className="relative h-auto lg:h-dvh">
                        <h1
                            className="text-cream text-center lg:text-start text-6xl md:text-9xl font-bold tracking-wider mt-28 lg:mt-0 lg:absolute lg:left-2"
                            style={{ textShadow: '2px 2px 4px #aaa' }}
                        >
                            <Brand />
                        </h1>

                        <div className="w-full h-auto relative lg:absolute mt-6 lg:mt-0 lg:bottom-[9%] flex lg:flex-row flex-col lg:justify-between lg:items-end">
                            <h2
                                className="text-center lg:text-start lg:mt-0 md:text-cream text-accent-secondary text-2xl font-bold md:tracking-wider leading-5 flex flex-col gap-1"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                <span>Software a medida,</span>
                                <span>automatizado</span>
                                <span>con n8n</span>
                            </h2>

                            <p
                                className="md:w-[20%] w-[80%] mx-auto lg:mx-0 text-cream text-[0.7rem] font-bold  md:font-medium tracking-wide lg:text-end mt-2 text-center lg:text-justify"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                Construimos productos SaaS y flujos automatizados que hacen crecer tu operación sin fricción—<Brand />.
                            </p>
                        </div>
                    </div>

                    {/* Imagen mobile: sigue el flujo normal, siempre debajo del texto,
                        sin coordenadas fijas que puedan volver a chocar */}
                    <div className="block lg:hidden mt-8 mb-6">
                        <img
                            src={robotHeroBg}
                            alt="DivFlow bot"
                            className="w-full rounded-[2rem] object-cover shadow-[0_-25px_45px_-10px_rgba(232,115,74,0.25)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
