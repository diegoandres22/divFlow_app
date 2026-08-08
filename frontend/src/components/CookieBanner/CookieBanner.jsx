import { useEffect, useState } from "react";

const STORAGE_KEY = "divflow_cookie_consent";

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) setVisible(true);
    }, []);

    const handleChoice = (value) => {
        localStorage.setItem(STORAGE_KEY, value);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 lg:p-6 flex justify-center">
            <div className="w-full max-w-3xl bg-[#1A120D] border border-[#2a1f17] rounded-2xl lg:rounded-3xl px-6 py-5 flex flex-col lg:flex-row items-center gap-4 shadow-2xl">
                <p className="text-[#eae5dd] text-xs lg:text-sm text-center lg:text-left flex-1">
                    Usamos almacenamiento local para recordar tus preferencias en este sitio. No usamos
                    cookies de seguimiento ni de terceros por el momento. Más info en nuestra{" "}
                    <a href="/privacidad#cookies" className="text-[#E8734A] underline">
                        Política de Cookies
                    </a>.
                </p>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={() => handleChoice("rejected")}
                        className="rounded-full px-5 py-2 text-xs font-bold text-[#C9A68C] border border-[#2a1f17] hover:text-[#F5F0EA] hover:border-[#C9A68C] transition-colors duration-300"
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={() => handleChoice("accepted")}
                        className="rounded-full px-5 py-2 text-xs font-bold bg-[#E8734A] text-[#1A120D] hover:bg-[#f08a63] transition-colors duration-300"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
