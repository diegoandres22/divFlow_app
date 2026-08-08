import { Link } from "react-router-dom";
import Brand from "../components/Buttons/Brand";

const LegalLayout = ({ title, updatedAt, children }) => {
    return (
        <div className="min-h-dvh bg-[#120D0A] text-[#F5F0EA] px-6 py-12 lg:px-0 lg:py-20">
            <div className="max-w-3xl mx-auto">
                <Link
                    to="/"
                    className="text-[#C9A68C] text-sm hover:text-[#E8734A] transition-colors duration-300"
                >
                    ← Volver a <Brand />
                </Link>

                <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mt-6 mb-2">{title}</h1>
                {updatedAt && (
                    <p className="text-[#C9A68C] text-xs mb-10">Última actualización: {updatedAt}</p>
                )}

                <div className="legal-content flex flex-col gap-6 text-[#eae5dd] text-sm lg:text-base leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
