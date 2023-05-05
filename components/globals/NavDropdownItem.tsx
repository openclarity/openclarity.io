import React from "react";
import styles from "../../styles/layout/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const NavDropdownItem = ({
  link,
  text,
  internal = false,
}: {
  link?: string;
  text: string;
  disabled?: boolean;
  internal?: boolean;
}) => {
  const router = useRouter();
  return internal ? (
    <Link href={link}>
      <a
        className={
          router.pathname === link
            ? styles.PrimaryNavDropdownMenuItemActive
            : styles.PrimaryNavDropdownMenuItem
        }
        onClick={() => {
          // @ts-ignore
          window.analytics.track(`${text} - Docs Clicked`, {
            property_name: `${text} - Docs Clicked`,
          });
        }}
      >
        {text}
      </a>
    </Link>
  ) : (
    <a
      className={styles.PrimaryNavDropdownMenuItem}
      href={link}
      target="_blank"
      onClick={() => {
        // @ts-ignore
        window.analytics.track(`${text} - Docs Clicked`, {
          property_name: `${text} - Docs Clicked`,
        });
      }}
    >
      {text}
    </a>
  );
};
export default NavDropdownItem;
