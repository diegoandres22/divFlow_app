import { useState } from "react";
import { Link } from "react-router-dom";
import { trackMetaEvent } from "../../lib/metaPixel";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdnowda";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");
    const [consent, setConsent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!consent) return;
        setStatus("sending");
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(e.target),
            });
            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
                trackMetaEvent("Lead");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="w-full px-6 py-24 flex justify-center">
            <div className="relative w-full max-w-2xl rounded-[2.5rem] p-10 md:p-14 bg-[#1A120D] border border-[#2a1f17] overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#E8734A]/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#E8734A]/10 blur-3xl pointer-events-none" />

                <p className="text-[.7rem] font-bold text-[#C9A68C] mb-3 relative">Hablemos</p>
                <h2 className="text-[#F5F0EA] text-4xl md:text-5xl font-bold tracking-tighter mb-4 relative">
                    Contá tu idea,<br />armamos el flujo
                </h2>
                <p className="text-[#C9A68C] text-sm mb-10 relative max-w-md">
                    Contanos qué proceso te quita tiempo o qué producto querés construir. Te respondemos en menos de 24hs.
                </p>

                <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
                    {/* Formspree reads this hidden field to set the email subject —
                        makes the notification stand out in the inbox without needing
                        a custom backend (Gmail ignores email "Importance" headers). */}
                    <input type="hidden" name="_subject" value={`🔴 Nuevo lead — DivFlow: ${form.name || "sin nombre"}`} />

                    <div className="flex flex-col gap-2">
                        <label className="text-[#C9A68C] text-xs font-bold uppercase tracking-wide">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="¿Cómo te llamás?"
                            className="bg-[#120D0A] border border-[#2a1f17] focus:border-[#E8734A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8734A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A120D] rounded-2xl px-5 py-3 text-[#F5F0EA] text-sm transition-colors duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[#C9A68C] text-xs font-bold uppercase tracking-wide">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="vos@empresa.com"
                            className="bg-[#120D0A] border border-[#2a1f17] focus:border-[#E8734A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8734A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A120D] rounded-2xl px-5 py-3 text-[#F5F0EA] text-sm transition-colors duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[#C9A68C] text-xs font-bold uppercase tracking-wide">Contanos tu idea</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Quiero automatizar..."
                            className="bg-[#120D0A] border border-[#2a1f17] focus:border-[#E8734A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8734A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A120D] rounded-2xl px-5 py-3 text-[#F5F0EA] text-sm resize-none transition-colors duration-300"
                        />
                    </div>

                    <label className="flex items-start gap-3 text-[#C9A68C] text-xs cursor-pointer select-none">
                        <input
                            type="checkbox"
                            required
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 w-4 h-4 shrink-0 accent-[#E8734A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8734A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A120D] rounded"
                        />
                        <span>
                            Acepto la{" "}
                            <Link to="/privacidad" target="_blank" rel="noopener noreferrer" className="text-[#E8734A] underline">
                                Política de Privacidad
                            </Link>{" "}
                            y entiendo que mis datos van a ser procesados por Formspree para poder responderte.
                        </span>
                    </label>

                    <button
                        type="submit"
                        disabled={status === "sending" || !consent}
                        className="mt-2 w-full md:w-fit self-start rounded-full px-8 py-3 text-sm font-bold bg-[#E8734A] text-[#1A120D] hover:bg-[#f08a63] transition-colors duration-300 disabled:opacity-60"
                    >
                        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                    </button>

                    {status === "success" && (
                        <p className="text-[#9FE1CB] text-sm">¡Listo! Ya te vamos a escribir a tu email.</p>
                    )}
                    {status === "error" && (
                        <p className="text-[#E24B4A] text-sm">Algo falló. Escribinos directo a diego.a.v3005@gmail.com.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
