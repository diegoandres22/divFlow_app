const Card = ({ name, price, period, description, features, highlighted, ctaLabel }) => {
    return (
        <div
            className={`relative w-full lg:w-1/3 rounded-[2.5rem] p-8 flex flex-col justify-between ${highlighted
                    ? "bg-[#1D140F] border-2 border-[#E8734A]"
                    : "bg-[#1A120D] border border-[#1a2f28]"
                }`}
        >
            {highlighted && (
                <span className="absolute top-6 right-8 bg-[#E8734A] text-[#04342C] text-[0.65rem] font-bold px-3 py-1 rounded-full">
                    Más elegido
                </span>
            )}

            <div>
                <h3 className="text-[#F5F0EA] text-2xl font-bold">{name}</h3>
                <p className="text-[#C9A68C] text-[0.8rem] mt-2 mb-6">{description}</p>

                <div className="flex items-end gap-1 mb-8">
                    <span className="text-[#F5F0EA] text-4xl font-bold">{price}</span>
                    {period && <span className="text-[#C9A68C] text-[0.8rem] mb-1">{period}</span>}
                </div>

                <ul className="flex flex-col gap-3 mb-10">
                    {features.map((feature, i) => (
                        <li key={i} className="text-[#F5F0EA] text-[0.85rem] flex items-start gap-2">
                            <span className="text-[#E8734A] font-bold">＋</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <a
                href="#"
                className={`w-full text-center rounded-full py-3 text-[0.85rem] font-bold transition-colors duration-300 ${highlighted
                        ? "bg-[#E8734A] text-[#04342C] hover:bg-[#25b585]"
                        : "border border-[#C9A68C] text-[#C9A68C] hover:bg-[#C9A68C] hover:text-[#1A120D]"
                    }`}
            >
                {ctaLabel}
            </a>
        </div>
    );
};

export default Card;
