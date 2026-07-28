import Card from "./Card";

const plans = [
    {
        name: "Automatización",
        price: "Desde USD 400",
        period: "/ proyecto",
        description: "Un flujo puntual en n8n conectando tus herramientas.",
        features: [
            "1 a 3 flujos automatizados",
            "Conexión con tus apps actuales (CRM, Sheets, WhatsApp, etc.)",
            "Entrega en 1-2 semanas",
            "Documentación del flujo",
        ],
        highlighted: false,
        ctaLabel: "Empezar",
    },
    {
        name: "Integración a medida",
        price: "Desde USD 1.200",
        period: "/ proyecto",
        description: "Varios sistemas conectados y procesos internos optimizados.",
        features: [
            "Hasta 8 flujos automatizados",
            "Integraciones con APIs propias o de terceros",
            "Panel de monitoreo básico",
            "Entrega en 3-6 semanas",
            "1 mes de soporte incluido",
        ],
        highlighted: true,
        ctaLabel: "Solicitar propuesta",
    },
    {
        name: "SaaS a medida",
        price: "A cotizar",
        period: "",
        description: "Tu producto construido de punta a punta, listo para escalar.",
        features: [
            "Diseño, desarrollo y despliegue completo",
            "Automatizaciones integradas desde el día uno",
            "Arquitectura escalable en la nube",
            "Soporte y evolución continua",
        ],
        highlighted: false,
        ctaLabel: "Agendar llamada",
    },
];

const Cards = () => {
    return (
        <section className="pricing-section w-full p-8 mt-16 mb-20">
            <p className="text-[.7rem] font-bold text-[#eae5dd]">Planes</p>
            <h2 className="text-[#EAF6F1] lg:text-[4rem] text-[2.2rem] font-medium tracking-tighter mt-2 mb-12 leading-[1.05]">
                Elegí el nivel de<br />automatización que necesitás
            </h2>

            <div className="w-full flex lg:flex-row flex-col gap-6">
                {plans.map((plan, i) => (
                    <Card key={i} {...plan} />
                ))}
            </div>
        </section>
    );
};

export default Cards;
