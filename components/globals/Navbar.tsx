import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/layout/Navbar.module.scss";
import { useRouter } from "next/router";
import {
  DocsRoutes,
  ImgPaths,
  RouteNames,
  RouterPaths,
} from "../../types/enums";
import useWindowSize from "../../hooks/useWindowSize";
import Container from "../Container";
import NavDropdownItem from "./NavDropdownItem";
import NavItem from "./NavItem";

const Navbar = () => {
  const router = useRouter();
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  return (
    <div className={styles.Navbar}>
      <Container>
        <div className={styles.NavbarItems}>
          <Link href={RouterPaths.Landing}>
            <a className={styles.NavbarLogoContainer}>
              <Image
                className={styles.NavbarLogo}
                src={ImgPaths.OpenClarityLogo}
                alt="logo"
                width={'200px'}
                height={'30px'}
              />
            </a>
          </Link>
          <div className={styles.NavbarNavlinkContainer}>
            <NavItem
              route={RouterPaths.Landing}
              routeName={RouteNames.Landing}
            />
            <div
              onMouseLeave={() => setIsDocsOpen(false)}
              onMouseEnter={() => setIsDocsOpen(true)}
              className={styles.NavbarNavlinkMenu}
            >
              <NavItem routeName={RouteNames.Docs} hasDropdown={true} />
              {isDocsOpen && (
                <div
                  className={styles.NavbarNavlinkMenuDropDown}
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
              openNewWindow={true}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
