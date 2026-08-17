import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import MarqueeText from '@/components/Marquee/MarqueeText';
import Brand from '@/components/Buttons/Brand';
import { smoothScrollTo } from '@/lib/smoothScroll';

const Footer = () => {
    return (
        <section className='w-screen min-h-dvh lg:h-dvh px-6 py-16 lg:py-0 lg:mt-10'>
            <p className='text-[.7rem] text-cream-muted choose-subtitle mt-10'>¿Listo para automatizar tu operación?<br />Hablemos de tu proyecto en <Brand />®</p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0 text-lg lg:text-2xl mt-14'>
                <h3 className='text-tan'>Desarrollamos software a medida y<br />
                    automatizamos procesos con n8n<br />
                    para equipos que quieren crecer.<br /><br />
                    Si tenés un proyecto en mente—<br />
                    <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo("#contact"); }} className='text-cream hover:text-accent-secondary underline'>contactanos.</a>
                </h3>

                <div className='flex flex-col justify-center lg:items-end gap-1 lg:gap-0'>
                    <a href="#hero" onClick={(e) => { e.preventDefault(); smoothScrollTo("#hero"); }} className='text-cream hover:text-accent-primary text-lg lg:text-2xl transition-colors duration-300'>Inicio</a>
                    <a href="#servicios" onClick={(e) => { e.preventDefault(); smoothScrollTo("#servicios"); }} className='text-cream hover:text-accent-primary text-lg lg:text-2xl transition-colors duration-300'>Servicios</a>
                    <a href="#casos-de-uso" onClick={(e) => { e.preventDefault(); smoothScrollTo("#casos-de-uso"); }} className='text-cream hover:text-accent-primary text-lg lg:text-2xl transition-colors duration-300'>Casos de uso</a>
                    <a href="#por-que-divflow" onClick={(e) => { e.preventDefault(); smoothScrollTo("#por-que-divflow"); }} className='text-cream hover:text-accent-primary text-lg lg:text-2xl transition-colors duration-300'>Por qué <Brand /></a>
                    <a href="#apps" onClick={(e) => { e.preventDefault(); smoothScrollTo("#apps"); }} className='text-cream hover:text-accent-primary text-lg lg:text-2xl transition-colors duration-300'>Apps</a>
                </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-center gap-6 lg:gap-0 mt-14 lg:mt-20">
                <div className="flex justify-center items-center gap-1">
                    <a
                        href="https://github.com/diegoandres22"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className='border-[1px] border-line-light rounded-full p-3 text-cream hover:border-accent-primary hover:text-accent-primary transition-colors duration-300'
                    >
                        <FaGithub className="text-xl" />
                    </a>
                    <a
                        href="https://www.instagram.com/div_flow/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className='border-[1px] border-line-light rounded-full p-3 text-cream hover:border-accent-primary hover:text-accent-primary transition-colors duration-300'
                    >
                        <FaInstagram className="text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/diegovelasquez22"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className='border-[1px] border-line-light rounded-full p-3 text-cream hover:border-accent-primary hover:text-accent-primary transition-colors duration-300'
                    >
                        <CiLinkedin className="text-xl" />
                    </a>
                    <a
                        href="https://www.tiktok.com/@div_flow"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className='border-[1px] border-line-light rounded-full p-3 text-cream hover:border-accent-primary hover:text-accent-primary transition-colors duration-300'
                    >
                        <FaTiktok className="text-xl" />
                    </a>
                </div>

                <div>
                    <p className="text-[0.8rem] text-tan text-center lg:text-right">
                        <Brand />—software a medida y<br />
                        automatizaciones con n8n.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;