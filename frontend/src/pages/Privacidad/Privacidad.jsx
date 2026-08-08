import LegalLayout from "../../layouts/LegalLayout";

const Privacidad = () => {
    return (
        <LegalLayout title="Política de Privacidad" updatedAt="[COMPLETAR FECHA]">
            <p className="text-[#F0B08C] text-xs italic">
                Este documento es una base estándar y no reemplaza la revisión de un abogado.
                Antes de publicar, hay que completar los datos marcados como [COMPLETAR] y validar
                el contenido según la jurisdicción de DivFlow y la de sus clientes.
            </p>

            <section>
                <h2 className="text-xl font-bold text-[#F5F0EA] mb-2">1. Responsable del tratamiento</h2>
                <p>
                    DivFlow es la marca personal de [COMPLETAR NOMBRE COMPLETO], con domicilio en
                    [COMPLETAR CIUDAD, PAÍS]. Para cualquier consulta relacionada con esta política o
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
                    Este sitio, en su versión actual, no utiliza cookies de analítica, publicidad ni
                    seguimiento de terceros (por ejemplo, Google Analytics o Meta Pixel). Solo se
                    guarda en tu navegador una preferencia técnica (mediante <code>localStorage</code>,
                    no una cookie tradicional) para recordar si ya aceptaste o rechazaste el aviso de
                    cookies, y así no volver a mostrártelo en cada visita.
                </p>
                <p className="mt-3">
                    Si en el futuro se incorpora algún servicio de analítica o publicidad, esta sección
                    se va a actualizar para detallar qué cookies se agregan, con qué finalidad, y ese
                    tipo de trackers solo se van a activar después de que aceptes el aviso
                    correspondiente.
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
