import Link from "next/link";
import MenuIcon from "../../assets/menu.svg";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";
import NavLinks from "../helpers/NavLink";
import classNames from "classnames";
import ProfileMenu from "../helpers/ProfileMenu";

const Navigation = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isNavLinkLoading, setIsNavLinkLoading] = useState(true);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    !authState.isAuthLoading && setIsNavLinkLoading(false);
  },[authState]);

  const headerNavLinkStyle =
    "link font-medium py-[8px] transition-colors duration-300 ease-in-out hover:text-orange-500";
  const headerNavLinkDesktopStyle = classNames([
    headerNavLinkStyle,
    "mr-[32px] last:mr-0",
  ]);
  const headerNavLinkMobileStyle = classNames([
    headerNavLinkStyle,
    "py-[15px] text-white",
  ]);
  return (
    <header className="bg-white px-[25px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] z-[99]">
      <nav className="container flex py-[25px]">
        <div className="flex items-center">
          <Link href="/">
            <a className="font-semibold text-[24px] text-black no-underline">
              <span>Penned</span>
              <span className="text-[12px] uppercase tracking-[-1px]">
                by aaishik
              </span>
            </a>
          </Link>
        </div>
        {!isNavLinkLoading && (
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
        )}
      </nav>
      <MenuIcon
        className="cursor-pointer absolute top-[32px] right-[25px] h-[25px] w-auto md:hidden"
        onClick={() => {
          setIsSideBar(!isSideBar);
        }}
      />
      {isSideBar && (
        <ul className="p-[20px] w-[70%] max-w-[250px] flex flex-col fixed h-full bg-[#303030] top-0 left-0 md:hidden">
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
