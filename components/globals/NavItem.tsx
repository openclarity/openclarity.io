import React from "react";
import styles from "../../styles/layout/Navbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { Colors, ImgPaths, RouteNames, RouterPaths } from "../../types/enums";

const NavItem = ({
  link = "",
  route = "",
  openNewWindow = false,
  routeName,
  hasDropdown = false,
}: {
  link?: string;
  route?: string;
  routeName: string;
  openNewWindow?: boolean;
  hasDropdown?: boolean;
}) => {
  const router = useRouter();
  return hasDropdown ? (
    <div
      style={{
        color: router.pathname === RouterPaths.Landing
          ? Colors.White
          : Colors.TextDark,
        borderBottom:
          router.pathname === route
            ? `2px solid ${
                router.pathname === RouterPaths.Landing
                  ? Colors.White
                  : Colors.TextDark
              }`
            : "none",
      }}
      className={styles.NavbarNavlink}
    >
      {routeName}
    </div>
  ) : (
    <Link href={route}>
      <a
        style={{
          color: router.pathname === RouterPaths.Landing
            ? Colors.White
            : Colors.TextDark,
          textDecoration: router.pathname === route ? "underline" : "none",
          textUnderlineOffset: '.7rem',
          textDecorationThickness: '2px'
        }}
        className={styles.NavbarNavlink}
        target={openNewWindow ? "_blank" : "_self"}
      >
        {routeName}
      </a>
    </Link>
  );
};

export default NavItem;
