import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "../../styles/layout/Navbar.module.scss";
import {
  Colors,
  DocsRoutes,
  ImgPaths,
  RouteNames,
  RouterPaths,
} from "../../types/enums";
import NavDropdownItem from "./NavDropdownItem";
import NavItem from "./NavItem";

const Navbar = () => {
  const router = useRouter();
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const size = useWindowSize();

  return (
    <div className={styles.Navbar}>
      <Link href={RouterPaths.Landing}>
        <a className={styles.NavbarLogoContainer}>
          <Image
            className={styles.NavbarLogo}
            src={
              size.width < 1000
                ? router.pathname === RouterPaths.Landing
                  ? ImgPaths.LogoDarkIconSVG
                  : ImgPaths.LogoLightIconSVG
                : router.pathname === RouterPaths.Landing
                ? ImgPaths.LogoDarkHorizantalSVG
                : ImgPaths.LogoLightHorizantalSVG
            }
            alt="logo"
            width={"200px"}
            height={"30px"}
          />
        </a>
      </Link>
      <div className={styles.NavbarNavlinkContainer}>
        <NavItem route={RouterPaths.Landing} routeName={RouteNames.Landing} />
        <div
          onMouseLeave={() => setIsDocsOpen(false)}
          onMouseEnter={() => setIsDocsOpen(true)}
          className={styles.NavbarNavlinkMenu}
        >
          <NavItem routeName={RouteNames.Docs} hasDropdown={true} />
          {isDocsOpen && (
            <div
              className={styles.NavbarNavlinkMenuDropDown}
              style={{
                backgroundColor:
                  router.pathname === RouterPaths.Landing
                    ? Colors.White
                    : Colors.GrayBGColor,
              }}
            >
              {Object.keys(DocsRoutes).map((item, i) => (
                <NavDropdownItem
                  link={DocsRoutes[item]}
                  text={item}
                  internal={false}
                  key={i}
                />
              ))}
            </div>
          )}
        </div>
        <NavItem
          route={RouterPaths.Resources}
          routeName={RouteNames.Resources}
        />
        <a
          target="_blank"
          href="https://github.com/openclarity"
          className={styles.NavbarNavlinkIconLink}
        >
          <AiFillGithub
            className={styles.NavbarNavlinkIcon}
            color={
              router.pathname === RouterPaths.Landing
                ? Colors.White
                : Colors.TextDark
            }
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
