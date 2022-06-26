import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";

const socialLinks = [
  {
    url: "/",
    svgComp: Twitter,
  },
  {
    url: "/",
    svgComp: Youtube,
  },
  {
    url: "/",
    svgComp: Linkedin,
  },
  {
    url: "/",
    svgComp: Instagram,
  },
];

export const renderSocialLinks = () => {
  return socialLinks.map((social) => {
    const { url, svgComp: SvgComp } = social;
    return (
      <li className="flex items-center">
        <a href={url}>
          <SvgComp className="w-[24px] h-auto text-white" />
        </a>
      </li>
    );
  });
};
