import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import "./footertitle.css";
import Brand from "../Buttons/Brand";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FooterTitle = () => {
    const ftConRef = useRef(null);

    useGSAP(() => {
        if (!ftConRef.current) return;

        // Get the original HTML before splitting
        const originalHTML = ftConRef.current.querySelector(".footer-title h1").innerHTML;

        // Create split - exclude the sub element from being split
        const split = new SplitText(".footer-title h1", {
            type: "chars",
            charsClass: "ftChar",
            // Exclude the <sub> element from being split
            exclude: "sub"
        });

        // Wrap each character in a span for animation
        split.chars.forEach(char => {
            char.innerHTML = `<span>${char.innerHTML}</span>`;
        });

        const innerChars = split.chars.map(c => c.querySelector("span"));

        // Handle the sub element separately
        const sub = ftConRef.current.querySelector(".footer-title sub");
        if (sub) {
            sub.innerHTML = `<span>${sub.innerHTML}</span>`;
            const subSpan = sub.querySelector("span");

            // Add to innerChars array
            innerChars.push(subSpan);
        }

        // Initial state - start from left (-120%)
        gsap.set(innerChars, { x: "-120%" });

        // Animation - move to normal position
        gsap.to(innerChars, {
            x: "0%",
            stagger: 0.02, // Add stagger for character-by-character reveal
            ease: "power3.out",
            scrollTrigger: {
                trigger: ftConRef.current,
                start: "top 90%",
                end: "top 80%",
                scrub: true,
                // markers: true
            }
        });

        // Cleanup - revert the split and restore original HTML
        return () => {
            split.revert();
            // Restore the original HTML with sub element
            ftConRef.current.querySelector(".footer-title h1").innerHTML = originalHTML;
        };

    }, { scope: ftConRef });

    return (
        <section ref={ftConRef} className='relative z-1 w-screen h-[40vh] border-1 border-t-[#c4c1b9]'>
            <div className='w-full flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-0 px-6 mt-8 text-center'>
                <p className='text-[#C9A68C] text-[0.7rem]'>
                    © 2026 DivFlow. Todos los derechos reservados.
                </p>
                <div className='flex flex-wrap justify-center items-center gap-x-4 gap-y-1'>
                    <Link to="/privacidad" className='text-[#C9A68C] hover:text-[#E8734A] text-[0.7rem] transition-colors duration-300'>Política de Privacidad</Link>
                    <Link to="/terminos" className='text-[#C9A68C] hover:text-[#E8734A] text-[0.7rem] transition-colors duration-300'>Términos y Condiciones</Link>
                    <Link to="/aviso-legal" className='text-[#C9A68C] hover:text-[#E8734A] text-[0.7rem] transition-colors duration-300'>Aviso Legal</Link>
                </div>
            </div>

            <div className='footer-title w-full text-center overflow-hidden'>
                <h1 className='text-7xl sm:text-8xl lg:text-[18vw] font-bold whitespace-nowrap'>
                    <Brand />
                </h1>
            </div>
        </section>
    );
};

export default FooterTitle;