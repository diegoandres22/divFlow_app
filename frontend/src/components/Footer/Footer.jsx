import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-screen h-dvh px-6 mt-10'>
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10'>¿Listo para automatizar tu operación?<br />Hablemos de tu proyecto en DivFlow<span>®</span></p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex justify-between items-center text-2xl mt-14'>
                <h3 className='text-[#C9A68C]'>Desarrollamos software a medida y<br />
                    automatizamos procesos con n8n<br />
                    para equipos que quieren crecer.<br /><br />
                    Si tenés un proyecto en mente—<br />
                    <a href="#" className='text-[#F5F0EA] hover:text-[#F0B08C] underline'>contactanos.</a>
                </h3>

                <div className='flex flex-col justify-center items-end'>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Inicio</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Servicios</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Casos de uso</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Por qué DivFlow</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Planes</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Testimonios</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-20">
                <div className="flex justify-center items-center gap-1">
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaGithub className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaInstagram className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><CiLinkedin className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaXTwitter className="text-xl" /></div>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#C9A68C] text-right">
                        DivFlow—software a medida y<br />
                        automatizaciones con n8n.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;