import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";

const ReserveBtn = () => {
    return (
        <div className="relative z-49">
            <div className="absolute right-4 top-16 lg:right-6 lg:top-[2vw] w-auto lg:w-[8.5vw] bg-[#F5F0EA] px-3 py-2 lg:px-1 lg:py-1 flex justify-end items-center rounded-4xl gap-2 whitespace-nowrap">
                <AnimateBtn btnName="Contactar" href="#contact"/>
                <MdArrowOutward className="bg-[#1A120D] text-[#C9A68C] w-6 h-6 lg:w-[2.5vw] lg:h-auto rounded-full p-1 shrink-0" />
            </div>
        </div>
    )
}

export default ReserveBtn;