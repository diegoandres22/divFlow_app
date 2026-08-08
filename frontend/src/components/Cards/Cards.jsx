import Card from "./Card";
import Brand from "../Buttons/Brand";
import { smoothScrollTo } from "../../lib/smoothScroll";

const apps = [
    {
        name: "DivFlow Ecommerce",
        price: "USD 49",
        period: "/ mes",
        description: "Tienda online lista para vender: catálogo, carrito, checkout y panel de pedidos, sin desarrollar nada desde cero.",
        features: [
            "Catálogo de productos ilimitado",
            "Carrito y checkout integrados",
            "Panel simple para gestionar pedidos",
            "Alta en menos de 48hs",
            "Soporte y actualizaciones incluidas",
        ],
        highlighted: true,
        ctaLabel: "Quiero alquilarla",
        demoUrl: "https://divflowecommerce.vercel.app/",
    },
];

const Cards = () => {
    return (
        <section className="pricing-section w-full p-8 mt-16 mb-20">
            <p className="text-[.7rem] font-bold text-[#eae5dd]">Apps listas para usar</p>
            <h2 className="text-[#F5F0EA] lg:text-[4rem] text-[2.2rem] font-medium tracking-tighter mt-2 mb-4 leading-[1.05]">
                Alquilá una app que<br />ya está funcionando
            </h2>
            <p className="text-[#C9A68C] text-[0.9rem] max-w-lg mb-12">
                En vez de esperar semanas por un desarrollo a medida, arrancá hoy con una de nuestras apps ya construidas, por una suscripción mensual económica. Vas viendo la demo antes de decidir.
            </p>

            <div className="w-full flex lg:flex-row flex-col gap-6">
                {apps.map((app, i) => (
                    <Card key={i} {...app} />
                ))}

                <div className="relative w-full lg:w-1/3 rounded-[2.5rem] p-8 flex flex-col justify-center items-start bg-[#1A120D] border border-dashed border-[#2a1f17]">
                    <h3 className="text-[#F5F0EA] text-xl font-bold mb-2">Próximamente más apps</h3>
                    <p className="text-[#C9A68C] text-[0.85rem] mb-6">
                        Estamos sumando nuevas apps al catálogo de <Brand />. Si necesitás algo puntual, contanos y lo evaluamos.
                    </p>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); smoothScrollTo("#contact"); }}
                        className="rounded-full py-3 px-6 text-[0.85rem] font-bold border border-[#C9A68C] text-[#C9A68C] hover:bg-[#C9A68C] hover:text-[#1A120D] transition-colors duration-300"
                    >
                        Contarnos qué necesitás
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cards;
