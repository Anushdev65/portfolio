import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Anushdev65" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/anush-malhotra-58b997286/",
  },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} legacyBehavior passHref>
            <a
              href={item.path}
              className={iconStyles}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
