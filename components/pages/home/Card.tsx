import Link from "next/link";
import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "../../../styles/components/Card.module.scss";
import gridStyles from "../../../styles/layout/Grid.module.scss";

type Props = {
  logo: string;
  subLogo: string;
  description: string;
  link: string;
};
const Card = ({ logo, subLogo, description, link }: Props) => {
  const { width } = useWindowSize();
  return (
    <div
      className={width > 1200 ? gridStyles.Span4 : (width > 820 ? gridStyles.Span6 : gridStyles.Span12)}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={styles.Card}>
        <img src={logo} alt="logo" className={styles.Logo} />
        <div className={styles.Details}>
          <img src={subLogo} alt="sublogo" className={styles.Sublogo} />
          <p className={styles.Description}>{description}</p>
          <Link href={link}>
            <a className={styles.Link}>Learn more {">"}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
