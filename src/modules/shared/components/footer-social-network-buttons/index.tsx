import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import classes from "clsx";

const socialNetworks = [
  {
    icon: faInstagram,
    link: "https://www.instagram.com/famosos.ads/",
  },
  // {
  //   icon: faFacebookF,
  //   link: "https://www.facebook.com/contratafamosos",
  // },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/company/famosos-ads/",
  },
  // {
  //   icon: faTwitter,
  //   link: "https://twitter.com/famososapp",
  // },
];

interface FooterSocialNetworkButtonsProps {
  className?: string;
}

export function FooterSocialNetworkButtons({
  className,
}: FooterSocialNetworkButtonsProps) {
  return (
    <div className={classes("space-x-6", className)}>
      {socialNetworks.map((socialNetwork, index) => (
        <a
          href={socialNetwork.link}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-square lg:btn-lg btn-white text-3xl"
          key={index}
        >
          <FontAwesomeIcon icon={socialNetwork.icon} />
        </a>
      ))}
    </div>
  );
}
