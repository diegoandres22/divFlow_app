import { Link } from "react-router-dom";
import LegalLayout from "../../layouts/LegalLayout";
import { useDocumentMeta } from "../../lib/useDocumentMeta";

const AvisoLegal = () => {
    useDocumentMeta(
        "Aviso Legal — DivFlow",
        "Aviso legal e identificación del responsable del sitio DivFlow."
    );

    return (
        <LegalLayout title="Aviso Legal" updatedAt="18/3/2024">
            <p className="text-[#F0B08C] text-xs italic">
                Este documento es una base estándar y no reemplaza la revisión de un abogado.
                Antes de publicar, hay que completar los datos marcados como [COMPLETAR] y validar
                el contenido según la jurisdicción de DivFlow y la de sus clientes.
            </p>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">Identificación del responsable</h2>
                <ul className="flex flex-col gap-1">
                    <li><span className="text-[#C9A68C]">Titular / responsable: </span>Diego Andrés de Jesús Velásquez Moya</li>
                    <li><span className="text-[#C9A68C]">Nombre comercial: </span>DivFlow</li>
                    <li><span className="text-[#C9A68C]">Domicilio: </span>Caraballeda, La Guaira, Venezuela</li>
                    <li>
                        <span className="text-[#C9A68C]">Contacto: </span>
                        <a href="mailto:diego.a.v3005@gmail.com" className="text-[#E8734A] underline">
                            diego.a.v3005@gmail.com
                        </a>
                    </li>
                </ul>
                <p className="mt-3 text-xs text-[#C9A68C]">
                    Diego Andrés de Jesús Velásquez Moya opera como persona natural, contribuyente
                    registrado ante el SENIAT (Servicio Nacional Integrado de Administración
                    Aduanera y Tributaria de Venezuela).
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">Objeto del sitio</h2>
                <p>
                    Este sitio tiene como finalidad presentar los servicios de DivFlow (desarrollo de
                    software a medida, e-commerce, automatizaciones con n8n y alquiler de apps) y
                    ofrecer un canal de contacto para consultas y cotizaciones.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">Propiedad intelectual</h2>
                <p>
                    El nombre "DivFlow", el diseño del sitio y su contenido son propiedad de
                    Diego Andrés de Jesús Velásquez Moya, salvo el contenido de terceros usado bajo licencia.
                    "DivFlow" es una marca en uso; no está registrada formalmente ante ninguna oficina
                    de propiedad industrial al momento de publicar este aviso. Cualquier símbolo (®, ™)
                    usado junto al nombre en el sitio debe ser consistente con su estado real de
                    registro — actualizar esta sección y el sitio si eso cambia.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">Enlaces relacionados</h2>
                <p>
                    Ver también la{" "}
                    <Link to="/privacidad" className="text-[#E8734A] underline">
                        Política de Privacidad
                    </Link>{" "}
                    y los{" "}
                    <Link to="/terminos" className="text-[#E8734A] underline">
                        Términos y Condiciones
                    </Link>.
                </p>
            </section>
        </LegalLayout>
    );
};

export default AvisoLegal;
