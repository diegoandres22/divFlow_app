import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gallery.css';
import { BsFillPlusCircleFill } from "react-icons/bs";
import Brand from "@/components/Buttons/Brand";

import gbg1 from '@/assets/background1.jpg';
import gbg2 from '@/assets/background2.jpg';
import gbg3 from '@/assets/background3.jpg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const pageRef = useRef(null);

    useEffect(() => {

        // Desktop-only: the pinned scroll-jack that morphs the 3 background
        // cards into each other is a large-screen interaction. On mobile the
        // 3 cards stack in normal document flow (see gallery.css), so skip
        // the pin/scrub timeline entirely there.
        if (!window.matchMedia("(min-width: 1024px)").matches) return;

        // document.fonts.ready.then(() => {
        // Create new timeline
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-page4",
                start: "10% 10%",
                end: "220% 30%",
                scrub: 1,
                pin: true,
            }
        });

        // Add background color animation
        tl4.to(".gallery-page4", {
            backgroundColor: "#120D0A",
        }, 'start');

        gsap.set(".gallery-topText h4, .gallery-topText h3, .gallery-bottomText h3", {
            opacity: 1,
            x: 0
        });

        // Animation sequence
        tl4.to(".gallery-box h3", {
            opacity: 0,
        }, 'a')
            .to(".gallery-page4 .gallery-background", {
                width: "calc(100vw - 1rem)",
                height: "calc(100vh - 1rem)",
                borderRadius: "3.5rem",
                y: -40,
            }, 'a')
            .to(".gallery-page4 .gallery-background img", {
                transform: "scale(1)",
            }, 'a')
            .from(".gallery-background .gallery-topText h4, .gallery-background .gallery-topText h3, .gallery-background .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")

            .to("#gallery-second", {
                transform: "translate(-50%, -56%)",
            }, 'b')
            .to("#gallery-second img", {
                transform: "scale(1)",
            }, 'b')
            .to(".gallery-page4 .gallery-background", {
                scale: 0.9,
                opacity: 0,
                y: -50
            }, 'b')
            .from("#gallery-second .gallery-topText h4, #gallery-second .gallery-topText h3, #gallery-second .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")
            .to("#gallery-third", {
                transform: "translate(-50%, -56%)",
            }, 'c')
            .to("#gallery-third img", {
                transform: "scale(1)",
            }, 'c')
            .to("#gallery-second", {
                scale: 0.9,
                opacity: 0,
            }, 'c')
            .from("#gallery-third .gallery-topText h4, #gallery-third .gallery-topText h3, #gallery-third .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0");

        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Generate repeating DivFlow® elements
    const generateCapsules = (quantity = 6) => {
        const capsules = [];
        for (let i = 1; i <= quantity; i++) {
            capsules.push(
                <h3 key={i} style={{ "--index": i }} className='tracking-tighter'>
                    <Brand />®
                </h3>
            );
        }
        return capsules;
    };

    return (
        <section id="casos-de-uso" className="gallery-page4" ref={pageRef}>
            <div className="gallery-slider">
                <div
                    className="gallery-box"
                    style={{ "--time": "40s", "--quantity": 6 }}
                >
                    {generateCapsules(6)}
                </div>
            </div>

            <div className="gallery-background">
                <img src={gbg1} alt="Automatización de ventas" loading="lazy" />
                <div className="gallery-topText">
                    <h4>Automatización de procesos</h4>
                </div>
                <div className="gallery-bottomText">
                    <div className='w-full flex justify-center items-center gap-0'>
                        <BsFillPlusCircleFill className='w-8 h-8 text-tan' />
                        <h3>Despertás, y tu pipeline ya creció solo <br /> mientras vos dormías</h3>
                    </div>
                    <div className="relative z-9 w-50 h-[0.1rem] bg-gray-warm">
                        <div className="progress-line absolute z-10 bg-accent-primary w-[33%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>

            <div id="gallery-second" className="gallery-background2">
                <img src={gbg2} alt="Sincronización de datos" loading="lazy" />
                <div className="gallery-topText">
                    <h4>Sincronización de datos</h4>
                </div>
                <div className="gallery-bottomText">
                    <div className='w-full flex justify-center items-center gap-0'>
                        <BsFillPlusCircleFill className='w-8 h-8 text-tan' />
                        <h3>Conectamos tus herramientas para que la información viaje <br /> sola entre sistemas, sin duplicados ni planillas manuales</h3>
                    </div>
                    <div className="relative z-9 w-50 h-[0.1rem] bg-gray-warm">
                        <div className="progress-line absolute z-10 bg-accent-primary w-[67%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>

            <div id="gallery-third" className="gallery-background2">
                <img src={gbg3} alt="SaaS a medida" loading="lazy" />
                <div className="gallery-topText">
                    <h4>SaaS a medida</h4>
                </div>
                <div className="gallery-bottomText">
                    <div className='w-full flex justify-center items-center gap-0'>
                        <BsFillPlusCircleFill className='w-8 h-8 text-tan' />
                        <h3>Tu producto, construido desde cero: dashboard, base de <br /> datos y lógica de negocio, listo para escalar</h3>
                    </div>
                    <div className="relative z-9 w-50 h-[0.1rem] bg-gray-warm">
                        <div className="progress-line absolute z-10 bg-accent-primary w-[100%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;