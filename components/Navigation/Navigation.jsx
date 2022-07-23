import Link from "next/link";
import MenuIcon from "../../assets/menu.svg";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";
import NavLinks from "../helpers/NavLink";
import classNames from "classnames";
import ProfileMenu from "../helpers/ProfileMenu";
import Close from "../../assets/close.svg";

const Navigation = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const { authState } = useContext(AuthContext);

  const headerNavLinkStyle =
    "link font-medium py-[8px] default-transition hover:text-teal-500";
  const headerNavLinkDesktopStyle = classNames([
    headerNavLinkStyle,
    "mr-[32px] last:mr-0",
  ]);
  const headerNavLinkMobileStyle = classNames([
    headerNavLinkStyle,
    "py-[15px] text-white",
  ]);
  return (
    <header className="bg-[#303030] px-[25px] z-[99] default-shadow">
      <nav className="container flex py-[25px] min-h-[90px]">
        <div className="flex items-center">
          <Link href="/">
            <a className="font-semibold text-[24px] text-white no-underline">
              <span>Penned</span>
              <span className="text-[12px] uppercase tracking-[-1px]">
                by aaishik
              </span>
            </a>
          </Link>
        </div>

        <div className="relative flex flex-1 items-center justify-end">
          <ul className="mr-[32px] hidden md:block">
            <NavLinks
              styleClass={headerNavLinkDesktopStyle}
              isAuthenticated={authState.user}
              isAdmin={authState.profileAdmin}
            />
          </ul>
          {authState.user && (
            <ProfileMenu
              profileInitials={authState.profileInitials}
              profileFirstName={authState.profileFirstName}
              profileLastName={authState.profileLastName}
              profileUsername={authState.profileUsername}
              profileEmail={authState.profileEmail}
              isAdmin={authState.profileAdmin}
            />
          )}
        </div>
      </nav>
      <MenuIcon
        className="cursor-pointer absolute top-[32px] right-[25px] h-[25px] w-auto md:hidden text-white"
        onClick={() => {
          setIsSideBar(true);
        }}
      />
      {isSideBar && (
        <ul className="p-[20px] w-[70%] max-w-[250px] flex flex-col fixed h-full bg-black top-0 right-0 md:hidden">
          <Close
            className="w-[24px] h-auto cursor-pointer text-[24px] absolute top-[15px] right-[15px] text-white"
            onClick={() => setIsSideBar(false)}
          />
          <NavLinks
            styleClass={headerNavLinkMobileStyle}
            isAuthenticated={authState.user}
            isAdmin={authState.profileAdmin}
          />
        </ul>
      )}
    </header>
  );
};

export default Navigation;
