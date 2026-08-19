import Card from "./Card";
import Brand from "@/components/Buttons/Brand";
import { smoothScrollTo } from "@/lib/smoothScroll";

const apps = [
    {
        name: <><Brand /> Ecommerce</>,
        price: "USD 69",
        period: "/ mes",
        description: "Tienda online lista para vender: catálogo, carrito, checkout y panel de pedidos, todo listo para empezar a vender.",
        features: [
            "Catálogo de 1000 productos ",
            "Carrito y checkout integrados",
            "Panel simple para gestionar pedidos",
            "Alta en menos de 48hs",
            "Soporte y actualizaciones incluidas",
        ],
        highlighted: true,
        ctaLabel: "Quiero alquilarla",
        demoUrl: "https://divflowecommerce.vercel.app/",
    },
    {
        name: "Portal Inmobiliario",
        price: "USD 49",
        period: "/ mes",
        description: "Plataforma inmobiliaria lista para publicar: catálogo de propiedades en venta y alquiler, filtros de búsqueda y una red de agentes que acompaña a cada interesado.",
        features: [
            "Catálogo de propiedades en venta y alquiler",
            "Filtros de búsqueda por ubicación, precio y habitaciones",
            "Red de agentes que contactan a cada interesado",
            "Alta en menos de 48hs",
            "Soporte y actualizaciones incluidas",
        ],
        highlighted: true,
        ctaLabel: "Quiero alquilarla",
        demoUrl: "https://inmobiliaria-divflow.vercel.app/",
    },
    {
        name: "Automatizaciones n8n",
        price: "Cotizar",
        period: "",
        description: "Automatizamos el proceso que te esté quitando tiempo, sin importar el tamaño: desde una tarea puntual hasta un flujo que conecta varios sistemas. El alcance define el costo, por eso no hay un precio fijo.",
        features: [
            "Alcance 100% a medida de tu proceso",
            "Desde una automatización puntual hasta flujos complejos",
            "Conectamos las herramientas que ya usás",
            "Cotización según complejidad, sin sorpresas",
        ],
        highlighted: false,
        ctaLabel: "Cotizar mi automatización",
    },
    {
        name: "Plataforma de Rifas",
        price: "USD 49",
        period: "/ mes",
        description: "Plataforma de rifas y sorteos online: publicación de sorteos activos y finalizados, participación de compradores y una sección de ganadores que da transparencia a cada edición.",
        features: [
            "Gestión de sorteos activos y finalizados",
            "Participación de compradores integrada",
            "Sección de ganadores para dar transparencia",
            "Alta en menos de 48hs",
            "Soporte y actualizaciones incluidas",
        ],
        highlighted: true,
        ctaLabel: "Quiero alquilarla",
        demoUrl: "https://patealaperola.vercel.app/",
    },
];

const Cards = () => {
    return (
        <section id="apps" className="pricing-section w-full p-8 mt-16 mb-20">
            <p className="text-[.7rem] font-bold text-cream-muted">Apps listas para usar</p>
            <h2 className="text-cream lg:text-[4rem] text-[2.2rem] font-medium tracking-tighter mt-2 mb-4 leading-[1.05]">
                Alquilá una app que<br />ya está funcionando
            </h2>
            <p className="text-tan text-[0.9rem] max-w-lg mb-12">
                En vez de esperar semanas por un desarrollo a medida, arrancá hoy con una de nuestras apps ya construidas, por una suscripción mensual económica. Vas viendo la demo antes de decidir.
            </p>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                {apps.map((app, i) => (
                    <Card key={i} {...app} />
                ))}

                <div className="relative w-full rounded-[2.5rem] p-8 flex flex-col justify-center items-start bg-surface border border-dashed border-line">
                    <h3 className="text-cream text-xl font-bold mb-2">Próximamente más apps</h3>
                    <p className="text-tan text-[0.85rem] mb-6">
                        Estamos sumando nuevas apps al catálogo de <Brand />. Si necesitás algo puntual, contanos y lo evaluamos.
                    </p>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); smoothScrollTo("#contact"); }}
                        className="rounded-full py-3 px-6 text-[0.85rem] font-bold border border-tan text-tan hover:bg-tan hover:text-surface transition-colors duration-300"
                    >
                        Contarnos qué necesitás
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cards;
