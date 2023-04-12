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
				<link
					rel="icon"
					href="/assets/shared/logos/logo-favicon.png"
				/>
				
				{/*<!--Tracking Code Start of HubSpot Embed Code -->*/}
				{/* <script
					type="text/javascript"
					id="hs-script-loader"
					async
					defer
					src="//js.hs-scripts.com/19886599.js"
				></script> */}
				{/*<!--Tracking Code End of HubSpot Embed Code -->*/}
			</Head>
			<NextSeo
				title={`OpenClarity | ${pageTitle}`}
				description="OpenClarity is a suite of open source tools for cloud native security and observability—APIClarity, KubeClarity and VMClarity."
				canonical={`https://openclarity.io${pagePath || ""}`}
				openGraph={{
					url: `https://openclarity.io${pagePath || ""}`,
					title: `OpenClarity | ${pageTitle}`,
					description:
						"OpenClarity is a suite of open source tools for cloud native security and observability—APIClarity, KubeClarity and VMClarity.",
					images: [
						{
							url: "https://openclarity.io/assets/shared/logos/opengraph-logo.png",
							alt: "OpenClarity Logo",
							type: "image/png",
							width: 222,
							height: 128
						},
					],
					site_name: "OpenClarity",
				}}
				twitter={{
					handle: "@ciscoemerge",
					site: "@ciscoemerge",
					cardType: "summary_large_image"
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
