import LegalLayout from "../../layouts/LegalLayout";
import { useDocumentMeta } from "../../lib/useDocumentMeta";

const Privacidad = () => {
    useDocumentMeta(
        "Política de Privacidad — DivFlow",
        "Política de privacidad de DivFlow: qué datos recogemos, cómo los usamos y tus derechos."
    );

    return (
        <LegalLayout title="Política de Privacidad" updatedAt="18/3/2024">
            <p className="text-[#F0B08C] text-xs italic">
                Este documento es una base estándar y no reemplaza la revisión de un abogado.
                Antes de publicar, hay que completar los datos marcados como [COMPLETAR] y validar
                el contenido según la jurisdicción de DivFlow y la de sus clientes.
            </p>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">1. Responsable del tratamiento</h2>
                <p>
                    DivFlow es la marca personal de Diego Andrés de Jesús Velásquez Moya, con domicilio en
                    Caraballeda, La Guaira, Venezuela. Para cualquier consulta relacionada con esta política o
                    con tus datos personales, podés escribir a{" "}
                    <a href="mailto:diego.a.v3005@gmail.com" className="text-[#E8734A] underline">
                        diego.a.v3005@gmail.com
                    </a>.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">2. Qué datos recogemos</h2>
                <p>
                    A través del formulario de contacto del sitio recogemos únicamente los datos que
                    ingresás vos mismo: nombre, dirección de email y el mensaje que escribís. No
                    recogemos datos de pago, ni datos sensibles, ni información de navegación mediante
                    cookies de analítica o publicidad (ver sección de Cookies más abajo).
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">3. Con qué finalidad y base legal</h2>
                <p>
                    Usamos los datos del formulario exclusivamente para responder tu consulta y, si
                    corresponde, avanzar en la contratación de un servicio o el alquiler de una app.
                    La base legal es tu consentimiento explícito, otorgado al marcar la casilla de
                    aceptación antes de enviar el formulario.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">4. Cómo se procesan y almacenan tus datos</h2>
                <p>
                    El formulario de contacto se procesa a través de{" "}
                    <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#E8734A] underline">
                        Formspree
                    </a>, un proveedor externo que recibe y reenvía por email el contenido que enviás.
                    No almacenamos tus datos en una base propia. Formspree tiene su propia política de
                    privacidad, disponible en el enlace de arriba, que rige el procesamiento técnico
                    del envío.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">5. Tus derechos</h2>
                <p>
                    Podés pedir en cualquier momento acceder a los datos que nos diste, corregirlos,
                    o que los eliminemos de nuestros registros (por ejemplo, del historial de emails
                    recibidos), escribiendo a{" "}
                    <a href="mailto:diego.a.v3005@gmail.com" className="text-[#E8734A] underline">
                        diego.a.v3005@gmail.com
                    </a>.
                </p>
            </section>

            <section id="cookies">
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">6. Política de Cookies</h2>
                <p>
                    Se guarda en tu navegador una preferencia técnica (mediante <code>localStorage</code>,
                    no una cookie tradicional) para recordar si ya aceptaste o rechazaste este aviso, y
                    así no volver a mostrártelo en cada visita.
                </p>
                <p className="mt-3">
                    Si aceptás el aviso de cookies, este sitio activa el <strong>Meta Pixel</strong> (Meta/Facebook),
                    una herramienta de medición publicitaria que nos permite entender qué visitantes
                    completan el formulario de contacto y mostrar anuncios más relevantes en Instagram y
                    Facebook. Meta puede establecer sus propias cookies en tu navegador para esto. Además,
                    si completás el formulario de contacto, tu email (y tu nombre, si lo indicás) se envían
                    a Meta en formato encriptado (hash) para mejorar la atribución de nuestras campañas
                    publicitarias — Meta no recibe estos datos en texto plano. También usamos{" "}
                    <strong>Google Analytics</strong> para entender cómo se navega el sitio (páginas
                    visitadas, tiempo de permanencia, dispositivo) de forma agregada, sin identificarte
                    individualmente. Podés
                    consultar sus políticas en{" "}
                    <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#E8734A] underline">
                        facebook.com/privacy/policy
                    </a>{" "}
                    y{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E8734A] underline">
                        policies.google.com/privacy
                    </a>. Si rechazás el aviso, ninguna de estas herramientas se carga.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">7. Cambios a esta política</h2>
                <p>
                    Esta política puede actualizarse. Los cambios relevantes se van a reflejar en la
                    fecha de "Última actualización" al inicio de este documento.
                </p>
            </section>
        </LegalLayout>
    );
};

export default Privacidad;
