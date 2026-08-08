import { useRef, useState } from 'react';
import banner from '../../assets/background3.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ClickIndicator from '../MapLink/ClickIndicator';
import Brand from '../Buttons/Brand';
import { smoothScrollTo } from '../../lib/smoothScroll';


const FooterBanner = () => {
    const [active, setActive] = useState(false);
    const fbConRef = useRef(null);
    const fbImgRef = useRef(null);

    useGSAP(() => {
        if (!fbConRef.current || !fbImgRef.current) return;

        gsap.fromTo(fbImgRef.current,
            {
                scale: 1.2, // Initial scale
            },
            {
                scale: 1, // Final scale
                ease: "none",
                scrollTrigger: {
                    trigger: fbConRef.current,
                    start: "top bottom-=20%",
                    end: "bottom top+=20%",
                    scrub: true,
                    // markers: true,
                }
            }
        );

    }, { scope: fbConRef });

    return (
        < div ref={fbConRef} className="w-screen h-dvh p-2 overflow-hidden" >
            <div className='w-full relative overflow-hidden rounded-4xl'>
                <ClickIndicator active={active} label="Agendar llamada" />
                <img
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                    onClick={() => smoothScrollTo("#contact")}
                    ref={fbImgRef} src={banner} alt="" loading="lazy" className='w-full h-full object-cover cursor-pointer' />

                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl lg:text-[10vw] font-bold text-[#F5F0EA] whitespace-nowrap'><Brand /></h1>
                <div className='absolute bottom-5 px-4 w-full'>
                    <div className="w-full h-auto flex md:flex-row flex-col md:justify-between md:items-end">
                        <h2
                            className="text-start lg:mt-0 md:text-[#F5F0EA] text-[#C9A68C] text-2xl font-bold md:tracking-wider leading-5 flex flex-col gap-1"
                            style={{ textShadow: '2px 2px 4px #000' }}
                        >
                            <span>Empezá a</span>
                            <span>automatizar</span>
                            <span>hoy mismo</span>
                        </h2>

                        <p
                            className="md:w-[20%] w-[80%] text-[#F5F0EA] text-[0.7rem] font-bold  md:font-medium tracking-wide lg:text-end mt-2 text-justify"
                            style={{ textShadow: '2px 2px 4px #000' }}
                        >
                            Agendá una llamada y te mostramos cómo DivFlow puede simplificar tu operación.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FooterBanner