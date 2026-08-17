import { IoMdMenu } from "react-icons/io";
import AnimateBtn from "@/components/Buttons/AnimateBtn";

const Navbar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-fit h-10 p-1 flex items-center justify-end gap-2 bg-cream rounded-4xl z-50 cursor-pointer group transition-all duration-500">
      <div>
        {/* <p className="text-[12px] pl-4 hover:font-bold">Menu</p> */}
        <div className="pl-4 text-surface">
          <AnimateBtn btnName="Menú" />
        </div>
      </div>
      <div className="bg-surface rounded-full p-2">
        <IoMdMenu className="text-tan transition-transform duration-500 group-hover:rotate-[360deg]" />
      </div>
    </div>
  );
};

export default Navbar;
