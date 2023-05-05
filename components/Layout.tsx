import React from "react";
import Head from "next/head";
import styles from "../styles/layout/Layout.module.scss";
import Navbar from "./globals/Navbar";
import Footer from "./globals/Footer";
import { NextSeo } from "next-seo";

export const siteTitle = "OpenClarity";

const Layout = ({
  pageTitle,
  pagePath,
  children,
}: {
  pageTitle?: string;
  pagePath?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className={styles.LayoutContainer}>
      <Head>
        <link rel="icon" href="/assets/shared/logos/logo-favicon.png" />

        {/* SEGMENT SNIPPET */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
			!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="87VXOzCBIefXSDURFnDnQ7V2dspALqud";;analytics.SNIPPET_VERSION="4.15.3";
			analytics.load("87VXOzCBIefXSDURFnDnQ7V2dspALqud");
			analytics.page();
			}}();
					`,
          }}
        />
      </Head>
      <NextSeo
        title={`OpenClarity | ${pageTitle}`}
        description="OpenClarity is a suite of open source tools for cloud native security and observability — VMClarity, KubeClarity, and APIClarity."
        canonical={`https://openclarity.io${pagePath || ""}`}
        openGraph={{
          url: `https://openclarity.io${pagePath || ""}`,
          title: `OpenClarity | ${pageTitle}`,
          description:
            "OpenClarity is a suite of open source tools for cloud native security and observability — VMClarity, KubeClarity, and APIClarity.",
          images: [
            {
              url: "https://openclarity.io/assets/shared/logos/opengraph-logo.png",
              alt: "OpenClarity Logo",
              type: "image/png",
              width: 222,
              height: 128,
            },
          ],
          site_name: "OpenClarity",
        }}
        twitter={{
          handle: "@ciscoemerge",
          site: "@ciscoemerge",
          cardType: "summary_large_image",
        }}
      />
      <main className={styles.Layout}>
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
