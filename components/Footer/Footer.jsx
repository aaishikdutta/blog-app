import Link from "next/link";
import Signature from "../../assets/signature.png";
import Image from "next/image";
import NavLinks from "../helpers/NavLink";
import SocialLinks from "../helpers/SocialLinks";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";

const Footer = () => {
  const {authState} = useContext(AuthContext);
  const [isNavLinkLoading, setIsNavLinkLoading] = useState(true);
  useEffect(() => {
    !authState.isAuthLoading && setIsNavLinkLoading(false);
  },[authState]);
  const footerLinkStyle = 'link text-[16px] font-medium text-white no-underline';
  return (
    <footer className="mt-auto pt-[75px] pb-[50px] px-[25px] bg-[#303030]">
      <div className="container flex flex-col gap-[32px] md:flex-row md:gap-0">
        <div className="flex flex-1 gap-[32px] color-white flex-col items-center md:flex-row md:items-baseline md:gap-0">
          <div className="gap-[32px] flex flex-1 md:gap-0 flex-col">
            <Link href="/">
              <a className="text-center text-[24px] text-white mb-[16px] no-underline font-semibold md:text-start">
                <span>Penned</span>
                <span className="text-[12px] uppercase tracking-[-1px]">
                  by aaishik
                </span>
              </a>
            </Link>
            <ul className="gap-[16px] list-none flex mt-auto">
              <SocialLinks />
            </ul>
          </div>
          <div className="gap-[32px] flex flex-1 md:gap-0">
            <ul className="gap-[16px] list-none flex h-full justify-center flex-row flex-wrap md:flex-col">
            {!isNavLinkLoading && <NavLinks styleClass={footerLinkStyle} isAuthenticated={authState.user} isAdmin={authState.profileAdmin} />}
            </ul>
          </div>
        </div>
        <div className="flex flex-1 gap-[32px] text-white items-center flex-col md:items-end md:gap-0">
          <p>© 2022 Penned by Aaishik. All Rights Reserved</p>
          <div className="w-[250px] h-auto">
            <Image src={Signature} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
