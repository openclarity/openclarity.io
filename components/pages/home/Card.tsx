import Link from "next/link";
import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "../../../styles/components/Card.module.scss";
import gridStyles from "../../../styles/layout/Grid.module.scss";
import Image from "next/image";

type Props = {
  logo: string;
  subLogo: string;
  description: string;
  link: string;
  title: string;
};
const Card = ({ logo, subLogo, description, link, title }: Props) => {
  const { width } = useWindowSize();
  return (
    <div
      className={
        width > 1200
          ? gridStyles.Span4
          : width > 820
          ? gridStyles.Span6
          : gridStyles.Span12
      }
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={styles.Card}>
        <Image src={logo} alt="logo" width={"188px"} height={"150px"} />
        <Image
          src={subLogo}
          alt="sublogo"
          className={styles.Sublogo}
          width={"270px"}
          height={"30px"}
        />
        <div className={styles.Details}>
          <p className={styles.Description}>{description}</p>
          <Link href={link}>
            <a
              target="_blank"
              className={styles.Link}
              onClick={() => {
                // @ts-ignore
                window.analytics.track(`${title} - Learn More Clicked`, {
                  property_name: `${title} - Learn More Clicked`,
                });
              }}
            >
              Learn more {">"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
