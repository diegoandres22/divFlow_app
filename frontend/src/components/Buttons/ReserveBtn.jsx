import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";

const ReserveBtn = () => {
    return (
        <div className="relative z-49">
            <div className="absolute right-6 top-[2vw] w-[8.5vw] bg-[#F5F0EA] px-1 py-1 flex justify-end items-center rounded-4xl gap-2">
                <AnimateBtn btnName="Contactar"/>
                <MdArrowOutward className="bg-[#1A120D] text-[#C9A68C] w-[2.5vw] h-auto rounded-full p-1" />
            </div>
        </div>
    )
}

export default ReserveBtn;