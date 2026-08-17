import { useEffect, useState } from "react";
import { initMetaPixel } from "@/lib/metaPixel";
import { initGA4 } from "@/lib/ga4";

const STORAGE_KEY = "divflow_cookie_consent";

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) setVisible(true);
        // Returning visitor who already said yes — load tracking scripts
        // without making them click "Aceptar" again.
        if (stored === "accepted") {
            initMetaPixel();
            initGA4();
        }
    }, []);

    const handleChoice = (value) => {
        localStorage.setItem(STORAGE_KEY, value);
        setVisible(false);
        // Only load tracking scripts on explicit "Aceptar" — never on
        // "Rechazar", and never before either button is clicked.
        if (value === "accepted") {
            initMetaPixel();
            initGA4();
        }
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 lg:p-6 flex justify-center">
            <div className="w-full max-w-3xl bg-surface border border-line rounded-2xl lg:rounded-3xl px-6 py-5 flex flex-col lg:flex-row items-center gap-4 shadow-2xl">
                <p className="text-cream-muted text-xs lg:text-sm text-center lg:text-left flex-1">
                    Usamos Meta Pixel para medir el rendimiento de nuestras campañas y almacenamiento
                    local para recordar tu preferencia. Solo se activa si aceptás. Más info en nuestra{" "}
                    <a href="/privacidad#cookies" className="text-accent-primary underline">
                        Política de Cookies
                    </a>.
                </p>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={() => handleChoice("rejected")}
                        className="rounded-full px-5 py-2 text-xs font-bold text-tan border border-line hover:text-cream hover:border-tan transition-colors duration-300"
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={() => handleChoice("accepted")}
                        className="rounded-full px-5 py-2 text-xs font-bold bg-accent-primary text-surface hover:bg-accent-hover transition-colors duration-300"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
