import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { chooseLinesLG, chooseLinesSM } from "@/constants/welcome";
import Brand from "@/components/Buttons/Brand";

const Choose = () => {

    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const chooseLines = isMobD ? chooseLinesSM : chooseLinesLG;

    useGSAP(() => {

        const lines = gsap.utils.toArray(".choose-title-clip");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".choose-section",
                start: "top 75%",
                end: "bottom 100%",
                scrub: true,
                // markers: true,
            },
        });

        tl.from(".choose-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        // Animate the div height
        if (!isMobD) {
            tl.fromTo(
                ".title-part",
                { height: "10vh" },
                { height: `${isMobD ? "22vh" : "50vh"}`, ease: "none" }
            );
        }

        // Animate text reveal — run *at the same time*
        tl.to(
            lines,
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            },
            "<" // 👈 runs at the same time as the previous animation
        );

        if (!isMobD) {
            tl.from(".choose-sec", {
                yPercent: 100,
                duration: 1,
            }, "<");
        }
    });

    return (
        <section id="por-que-divflow" className="choose-section w-full min-h-dvh lg:h-dvh p-6 lg:p-8 pt-10 overflow-hidden">
            <p className='text-[.7rem] text-cream-muted choose-subtitle'>Conocé <Brand />®</p>
            <div className="lg:mt-10 mt-7 title-part origin-bottom ">
                {
                    chooseLines.map((line, index) => (
                        <h1 key={index} className="choose-heading choose-title text-cream lg:text-[9.5rem] text-[3rem] leading-[0.9] font-medium tracking-tighter">
                            <span className={`choose-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}<span className={`choose-title-clip ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}</span></span>
                        </h1>
                    ))
                }
            </div>
            <div className="choose-sec w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-0">
                <div className='lg:w-1/2 w-full text-tan lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-8 lg:pr-16'>
                    <p>Diseñamos software y automatizaciones a medida de tu operación. Cada proyecto se construye con los más altos estándares de calidad, escalabilidad y seguridad, adaptado a tus necesidades reales.</p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className=" lg:w-[30%] w-[60%]">
                        <p className="text-[.7rem] text-cream-muted">Todo lo que construimos
                            en <Brand /> comparte estos principios:</p>
                    </div>
                    <div className="flex flex-1 flex-wrap justify-start items-start gap-2 mt-8">
                        <div className="border-[1px] border-tan text-tan lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Escalable
                        </div>
                        <div className="border-[1px] border-cream text-cream lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Seguro
                        </div>
                        <div className="border-[1px] border-tan text-tan lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Sin código
                        </div>
                        <div className="border-[1px] border-cream text-cream lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Integrable
                        </div>
                        <div className="border-[1px] border-tan text-tan lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Soporte 24/7
                        </div>
                        <div className="border-[1px] border-cream text-cream lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            A medida
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;