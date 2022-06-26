import Link from "next/link";
import { renderNavLink } from "./navLinks";
import MenuIcon from "../../assets/menu.svg";
import { useState } from "react";

const Navigation = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  return (
    <header className="bg-white px-[25px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] z-[99]">
      <nav className="container flex py-[25px]">
        <div className="flex items-center">
          <Link href="/">
            <a className="font-semibold text-[24px] text-black no-underline">
              Brand
            </a>
          </Link>
        </div>
        <div className="relative hidden md:flex flex-1 items-center justify-end">
          <ul className="mr-[32px]">{renderNavLink("mr-[32px] last:mr-0")}</ul>
        </div>
      </nav>
      <MenuIcon
        className="cursor-pointer absolute top-[32px] right-[25px] h-[25px] w-auto md:hidden"
        onClick={() => {
          setIsSideBar(!isSideBar);
        }}
      />
      {isSideBar && (
        <ul className="p-[20px] w-[70%] max-w-[250px] flex flex-col fixed h-full bg-[#303030] top-0 left-0 md:hidden">
          {renderNavLink("py-[15px] text-white")}
        </ul>
      )}
    </header>
  );
};

export default Navigation;
