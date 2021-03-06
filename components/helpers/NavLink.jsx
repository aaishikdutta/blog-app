import Link from "next/link";

const NavLink = ({ url, linkText, className }) => {
  return (
    <Link href={url}>
      <a className={className}>{linkText}</a>
    </Link>
  );
};

const NavLinks = ({ styleClass, isAuthenticated, isAdmin }) => {
  return (
    <>
      <NavLink url="/" linkText="Home" className={styleClass} />
      <NavLink url="/blogs" linkText="Blogs" className={styleClass} />
      {isAuthenticated && isAdmin && (
        <NavLink
          url="/create-post"
          linkText="Create Post"
          className={styleClass}
        />
      )}
      {!isAuthenticated && (
        <NavLink
          url="/login"
          linkText="Login/Register"
          className={styleClass}
        />
      )}
    </>
  );
};

export default NavLinks;
