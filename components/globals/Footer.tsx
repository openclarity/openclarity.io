import React from "react";
import Link from "next/link";
import styles from "../../styles/layout/Footer.module.scss";
import getYear from "date-fns/getYear";
import { ELinks } from "../../types/enums";
import {
  bottomLineLinks,
  topLineLeftLinks,
  topLineRightLinks,
} from "../../data/footerLinks";
import { IFooterLinks } from "../../types/types";

interface IFooterLinksProps extends IFooterLinks {
  line: "Top" | "Bottom";
}

function FooterLink({
  line,
  internal = false,
  link,
  text,
  logo,
  ciscoLink = false,
}: IFooterLinksProps) {
  const getLinkName = () => {
    if (ciscoLink) {
      return styles.FooterTopLineLeftContainerCiscoLink;
    }
    if (line === "Top") {
      return styles.FooterTopLineLeftContainerLink;
    }
    return styles.FooterBottomLineLeftContainerLink;
  };

  const getLinkType = () => {
    if (logo) {
      return (
        <a href={ELinks.Twitter} target="_blank" rel="noreferrer" aria-label="Link to Cisco Emerging Tech & Incubation Twitter Page">
          {logo}
        </a>
      );
    }
    if (internal) {
      return (
        <Link href={link}>
          <a
            className={
              line === "Top"
                ? styles.FooterTopLineLeftContainerLink
                : styles.FooterBottomLineLeftContainerLink
            }
            href="top"
          >
            {text}
          </a>
        </Link>
      );
    }
    return (
      <a href={link} target="_blank" className={getLinkName()} rel="noreferrer">
        {text}
      </a>
    );
  };
  return <>{getLinkType()}</>;
}

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterTopLine}>
        <div className={styles.FooterTopLineLeftContainer}>
          {topLineLeftLinks.map((item) => (
            <FooterLink
              link={item.link}
              text={item.text}
              line="Top"
              ciscoLink={item.ciscoLink}
              internal={item.internal}
              key={item.text}
            />
          ))}
        </div>
        <div className={styles.FooterTopLineRightContainer}>
          {topLineRightLinks.map((item, index) => (
            <FooterLink
              link={item.link}
              logo={item.logo}
              line="Top"
              key={`${item.text}-${index.toString()}`}
            />
          ))}
        </div>
      </div>
      <hr className={styles.FooterHorizantalRule} />
      <div className={styles.FooterBottomLine}>
        <div className={styles.FooterBottomLineLeftContainer}>
          {bottomLineLinks.map((item) => (
            <FooterLink
              link={item.link}
              text={item.text}
              line="Bottom"
              key={item.text}
            />
          ))}
        </div>
        <p className={styles.FooterBottomLineCopyrightText}>
          &#169; {getYear(new Date())} Cisco Systems, Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
