import Link from "next/link";

const NavLink = ({url, linkText, className}) => {
    return (
        <Link href={url}>
          <a className={className}>{linkText}</a>
        </Link>
      );
}

export default NavLink;