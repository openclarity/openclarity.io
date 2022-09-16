import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { ELinks } from "../types/enums";
import { IFooterLinks } from "../types/types";
import styles from "../styles/layout/Footer.module.scss";

export const topLineLeftLinks: IFooterLinks[] = [
  {
    link: ELinks.Cisco,
    text: "Cisco.com",
    ciscoLink: true,
  },
  {
    link: ELinks.TechBlogResearchTag,
    text: "About ET&I",
  },
  {
    link: ELinks.PeoplePage,
    text: "Our Team",
  },

  {
    link: ELinks.EmailLink,
    text: "Careers",
  },
];

export const topLineRightLinks: IFooterLinks[] = [
  {
    link: ELinks.Twitter,
    logo: <FiTwitter className={styles.FooterTopLineRightContainerIcon} />,
  },
  {
    link: ELinks.LinkedIn,
    logo: <FiLinkedin className={styles.FooterTopLineRightContainerIcon} />,
  },
];

export const bottomLineLinks: IFooterLinks[] = [
  {
    link: ELinks.EmailLink,
    text: "Contact",
  },
  {
    link: ELinks.CiscoHelp,
    text: "Help",
  },
  {
    link: ELinks.CiscoTermsAndConditions,
    text: "Terms & Conditions",
  },
  {
    link: ELinks.CiscoPrivacyStatement,
    text: "Statement",
  },
  {
    link: ELinks.CiscoCookieStatement,
    text: "Cookies",
  },
  {
    link: ELinks.CiscoTrademarks,
    text: "Trademarks",
  },
];
