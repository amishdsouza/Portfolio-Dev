import SocialX from "@/assets/Footer/social-x.svg";
import SocialI from "@/assets/Footer/social-insta.svg";
import SocialL from "@/assets/Footer/social-linkedin.svg";
import SocialG from "@/assets/Footer/social-git.svg";
import SocialR from "@/assets/Footer/social-reddit.svg";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/amish-dickson-dsouza/",
    icon: <SocialL />,
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/amishdsouza",
    icon: <SocialG />,
    alt: "GitHub",
  },
  {
    href: "https://www.reddit.com/user/amish_here",
    icon: <SocialR />,
    alt: "Reddit",
  },
  {
    href: "https://x.com/amish_here",
    icon: <SocialX />,
    alt: "X",
  },
  {
    href: "https://www.instagram.com/amishdickson/",
    icon: <SocialI />,
    alt: "Instagram",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto">
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          {[
            "Home",
            "About",
            "Experience",
            "Education",
            "Certification",
            "Projects",
          ].map((item, index) => (
            <a key={index} href="#" className="hover:text-white">
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex justify-center gap-6 mt-6">
        {socialLinks.map(({ href, icon, alt }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
            className="hover:opacity-75"
          >
            {icon}
          </a>
        ))}
      </div>
      <p className="mt-6">&copy; Amish Dickson Dsouza. All rights reserved</p>
    </footer>
  );
};
