import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Anushdev65" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/anush-malhotra-58b997286/",
  },
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
              aria-label={index === 0 ? "GitHub profile" : "LinkedIn profile"}
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
