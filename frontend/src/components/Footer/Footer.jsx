import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

import MarqueeText from '../Marquee/MarqueeText';
import Brand from '../Buttons/Brand';
import { smoothScrollTo } from '../../lib/smoothScroll';

const Footer = () => {
    return (
        <section className='w-screen min-h-dvh lg:h-dvh px-6 py-16 lg:py-0 lg:mt-10'>
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10'>¿Listo para automatizar tu operación?<br />Hablemos de tu proyecto en <Brand />®</p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0 text-lg lg:text-2xl mt-14'>
                <h3 className='text-[#C9A68C]'>Desarrollamos software a medida y<br />
                    automatizamos procesos con n8n<br />
                    para equipos que quieren crecer.<br /><br />
                    Si tenés un proyecto en mente—<br />
                    <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo("#contact"); }} className='text-[#F5F0EA] hover:text-[#F0B08C] underline'>contactanos.</a>
                </h3>

                <div className='flex flex-col justify-center lg:items-end gap-1 lg:gap-0'>
                    <a href="#welcome" className='text-[#f2ede5] text-lg lg:text-2xl'>Inicio</a>
                    <a href="#welcome" className='text-[#f2ede5] text-lg lg:text-2xl'>Servicios</a>
                    <a href="#welcome" className='text-[#f2ede5] text-lg lg:text-2xl'>Casos de uso</a>
                    <a href="#welcome" className='text-[#f2ede5] text-lg lg:text-2xl'>Por qué DivFlow</a>
                    <a href="#welcome" className='text-[#f2ede5] text-lg lg:text-2xl'>Apps</a>
                </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-center gap-6 lg:gap-0 mt-14 lg:mt-20">
                <div className="flex justify-center items-center gap-1">
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaGithub className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaInstagram className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><CiLinkedin className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaXTwitter className="text-xl" /></div>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#C9A68C] text-center lg:text-right">
                        <Brand />—software a medida y<br />
                        automatizaciones con n8n.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;