import Link from "next/link";

const footerLinks = [
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

  export const renderFooterLinks = () => {
    return footerLinks.map((link) => {
      return (
        <Link href={link.url}>
          <a className="link text-[16px] font-medium text-white no-underline">{link.text}</a>
        </Link>
      );
    });
  };
  