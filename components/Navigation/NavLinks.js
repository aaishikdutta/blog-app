const { default: Link } = require("next/link");

const navLinks = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/blogs",
    text: "Blogs",
  },
  {
    url: "/createPosts",
    text: "Create Posts",
  },
];

export const renderNavLink = (className) => {
  return navLinks.map((link) => {
    return (
      <Link href={link.url}>
        <a className={`link font-medium py-[8px] transition-colors duration-300 ease-in-out hover:text-orange-500 ${className}`}>{link.text}</a>
      </Link>
    );
  });
};
