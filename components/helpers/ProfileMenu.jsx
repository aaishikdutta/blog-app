import Link from "next/link";
import { useRef, useState } from "react";
import User from "../../assets/user.svg";
import Admin from "../../assets/admin.svg";
import Signout from "../../assets/signout.svg";
import { signout } from "../../utils/auth";

const ProfileMenu = ({
  profileInitials,
  profileFirstName,
  profileLastName,
  profileUsername,
  profileEmail,
  isAdmin,
}) => {
  const profileRef = useRef(null);
  const [isProfileMenu, setIsProfileMenu] = useState(null);

  const profileMenuToggleHandler = (e) => {
    if (e.target === profileRef.current) {
      setIsProfileMenu(!isProfileMenu);
    }
  };

  const logoutHandler = () => {
    signout().then(() => {
      window.location.reload;
    });
  };
  return (
    <div
      ref={profileRef}
      onClick={profileMenuToggleHandler}
      className="relative cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-[50%] text-white bg-[#303030] mr-[40px] md:mr-0"
    >
      <span className="pointer-events-none">{profileInitials}</span>
      {isProfileMenu && (
        <div className="absolute top-[60px] right-[0] min-w-[250px] bg-[#303030] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
          <div className="flex items-center p-[15px] border-b border-solid border-b-white">
            <span className="w-[40px] h-[40px] bg-white text-[#303030] flex items-center justify-center rounded-[50%]">
              {profileInitials}
            </span>
            <div className="flex-1 ml-[24px]">
              <p className="text-[14px]">
                {profileFirstName} {profileLastName}
              </p>
              <p className="text-[12px]">{profileUsername}</p>
              <p className="text-[12px]">{profileEmail}</p>
            </div>
          </div>
          <div className="p-[15px]">
            <div className="no-underline text-white flex items-center mb-[12px]">
              <Link href="/profile">
                <a className="no-underline text-white flex items-center mb-[12px]">
                  <User className="w-[18px] h-auto" />
                  <p className="text-[14px] ml-[12px]">Profile</p>
                </a>
              </Link>
            </div>
            {isAdmin && <div className="no-underline text-white flex items-center mb-[12px]">
              <Link href="/admin">
                <a className="no-underline text-white flex items-center mb-[12px]">
                  <Admin className="w-[18px] h-auto" />
                  <p className="text-[14px] ml-[12px]">Admin</p>
                </a>
              </Link>
            </div>}
            <div
              className="no-underline text-white flex items-center"
              onClick={logoutHandler}
            >
              <Signout className="w-[18px] h-auto" />
              <p className="text-[14px] ml-[12px]">Sign Out</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
