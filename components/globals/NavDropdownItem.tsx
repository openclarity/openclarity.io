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
      >
        {text}
      </a>
    </Link>
  ) : (
    <a
      className={styles.PrimaryNavDropdownMenuItem}
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
};
export default NavDropdownItem;
