import { Link } from "react-router-dom";
import LegalLayout from "../../layouts/LegalLayout";
import { useDocumentMeta } from "../../lib/useDocumentMeta";

const Terminos = () => {
    useDocumentMeta(
        "Términos y Condiciones — DivFlow",
        "Términos y condiciones de uso de los servicios y apps de DivFlow."
    );

    return (
        <LegalLayout title="Términos y Condiciones" updatedAt="18/3/2024">
            <p className="text-[#F0B08C] text-xs italic">
                Este documento es una base estándar y no reemplaza la revisión de un abogado.
                Antes de publicar, hay que completar los datos marcados como [COMPLETAR] y validar
                el contenido según la jurisdicción de DivFlow y la de sus clientes.
            </p>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">1. Quiénes somos</h2>
                <p>
                    Este sitio es operado por DivFlow, marca personal de Diego Andrés de Jesús Velásquez Moya.
                    Al usar este sitio o contratar alguno de sus servicios, aceptás estos Términos y
                    Condiciones.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">2. Servicios ofrecidos</h2>
                <p>
                    DivFlow ofrece desarrollo de software a medida, plataformas e-commerce,
                    automatizaciones con n8n y el alquiler mensual de aplicaciones ya construidas
                    (por ejemplo, la app de e-commerce disponible en la sección "Apps"). El alcance,
                    plazos y condiciones específicas de cada proyecto a medida se acuerdan de forma
                    individual antes de comenzar el trabajo, por fuera de este documento general.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">3. Uso del sitio</h2>
                <p>
                    El contenido de este sitio (textos, imágenes, marca, código de la interfaz) no
                    puede reproducirse ni redistribuirse sin autorización previa, salvo que se indique
                    lo contrario. Nos reservamos el derecho de modificar o discontinuar el sitio o
                    partes de él en cualquier momento.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">4. Apps para alquilar</h2>
                <p>
                    Las apps ofrecidas por suscripción mensual (como la app de e-commerce) se alquilan
                    "tal cual" (as-is), con las funcionalidades que se muestran en la demo pública al
                    momento de la contratación. El acceso a la app depende del pago continuo de la
                    suscripción correspondiente.
                </p>
                <p className="mt-3">
                    [COMPLETAR: política de cancelación/reembolso — a definir por vos. Por ejemplo:
                    plazos de aviso para dar de baja, si hay reembolso proporcional o no, período de
                    prueba, etc.]
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">5. Limitación de responsabilidad</h2>
                <p>
                    DivFlow no garantiza que el sitio o las apps alquiladas vayan a estar libres de
                    errores o disponibles de forma ininterrumpida. En la medida permitida por la ley
                    aplicable, no somos responsables por daños indirectos derivados del uso del sitio
                    o de los servicios contratados.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">6. Ley aplicable</h2>
                <p>
                    Estos términos se rigen por las leyes de la República Bolivariana de Venezuela. Cualquier
                    disputa se someterá a los tribunales competentes de esa jurisdicción, salvo que la
                    ley aplicable indique lo contrario.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">7. Contacto</h2>
                <p>
                    Para consultas sobre estos términos, escribinos a{" "}
                    <a href="mailto:diego.a.v3005@gmail.com" className="text-[#E8734A] underline">
                        diego.a.v3005@gmail.com
                    </a>. Ver también nuestra{" "}
                    <Link to="/privacidad" className="text-[#E8734A] underline">
                        Política de Privacidad
                    </Link>{" "}
                    y el{" "}
                    <Link to="/aviso-legal" className="text-[#E8734A] underline">
                        Aviso Legal
                    </Link>.
                </p>
            </section>
        </LegalLayout>
    );
};

export default Terminos;
