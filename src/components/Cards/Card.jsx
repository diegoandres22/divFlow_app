import { smoothScrollTo } from "@/lib/smoothScroll";

const Card = ({ name, price, period, description, features, highlighted, ctaLabel, demoUrl }) => {
    return (
        <div
            className={`relative w-full rounded-[2.5rem] p-8 flex flex-col justify-between ${highlighted
                    ? "bg-base-200 border-2 border-accent-primary"
                    : "bg-surface border border-line"
                }`}
        >
            {highlighted && (
                <span className="absolute top-6 right-8 bg-accent-primary text-surface text-[0.65rem] font-bold px-3 py-1 rounded-full">
                    Disponible ya
                </span>
            )}

            <div>
                <h3 className="text-cream text-2xl font-bold">{name}</h3>
                <p className="text-tan text-[0.8rem] mt-2 mb-6">{description}</p>

                <div className="flex items-end gap-1 mb-8">
                    <span className="text-cream text-4xl font-bold">{price}</span>
                    {period && <span className="text-tan text-[0.8rem] mb-1">{period}</span>}
                </div>

                <ul className="flex flex-col gap-3 mb-10">
                    {features.map((feature, i) => (
                        <li key={i} className="text-cream text-[0.85rem] flex items-start gap-2">
                            <span className="text-accent-primary font-bold">＋</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                {demoUrl && (
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center rounded-full py-3 text-[0.85rem] font-bold border border-tan text-tan hover:bg-tan hover:text-surface transition-colors duration-300"
                    >
                        Ver demo
                    </a>
                )}
                <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); smoothScrollTo("#contact"); }}
                    className={`w-full text-center rounded-full py-3 text-[0.85rem] font-bold transition-colors duration-300 ${highlighted
                            ? "bg-accent-primary text-surface hover:bg-accent-hover"
                            : "bg-cream text-surface hover:bg-cream-hover"
                        }`}
                >
                    {ctaLabel}
                </a>
            </div>
        </div>
    );
};

export default Card;
