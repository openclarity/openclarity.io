import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";
import { ImgPaths } from "../types/enums";
import { ICompanyObj } from "../types/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useWindowSize from "../hooks/useWindowSize";
import Container from "../components/Container";
import gridStyles from "../styles/layout/Grid.module.scss";
import { whatIsData } from "../data/whatIsData";
import ThreeCardSection from "../components/pages/home/ThreeCardSection";
import WhatIsSection from "../components/pages/home/WhatIsSection";
const Home = () => {
  return (
    <Layout pageTitle="Home">
      <div className={styles.Home}>
        <HeroBanner />
        <ThreeCardSection />
        <div style={{ marginTop: 50 }}>
          {whatIsData.map(
            (
              {
                title,
                description,
                keyCapabilities,
                githubLink,
                documentationLink,
                mainColor,
                thumbnail,
                diagram,
                videoID,
              },
              index
            ) => {
              return (
                <WhatIsSection
                  mainColor={mainColor}
                  githubLink={githubLink}
                  documentationLink={documentationLink}
                  thumbnail={thumbnail}
                  title={title}
                  description={description}
                  keyCapabilities={keyCapabilities}
                  diagram={diagram}
                  videoID={videoID}
                  key={index}
                />
              );
            }
          )}
        </div>
        <CodeSection />
      </div>
    </Layout>
  );
};

const HeroBanner = () => {
  const { width } = useWindowSize();
  return (
    <div className={styles.HomeHeader}>
      <img
        src={ImgPaths.HeroBackground}
        className={styles.HomeBackground}
        alt="Home Background Image"
      />
      <img
        src={ImgPaths.HeroForeground}
        className={styles.HomeForeground}
        alt="Home Foreground Image"
      />
      <Container>
        <div className={gridStyles.Grid}>
          <div className={gridStyles.Span1} />
          <div className={width < 500 ? gridStyles.Span8 : gridStyles.Span4}>
            <img
              className={styles.HomeHeaderLogo}
              src={ImgPaths.OpenClarityLogo}
              alt="logo"
            />

            <h2 className={styles.HomeHeaderTextSubheader}>
              Cisco's complementary open source projects
            </h2>
          </div>
        </div>
      </Container>
      <div className={styles.ClipPathWrapper}>
        <div className={styles.LowerClipPath}></div>
      </div>
      <Container>
        <div className={styles.LowerInfo}>
          <div className={gridStyles.Grid}>
            <div className={gridStyles.Span1} />
            <div className={gridStyles.Span10}>
              <h1>What is OPENClarity?</h1>
              <h2>
                OpenClarity is a suite of open source tools for cloud-native
                security and observability—APIClarity, KubeClarity, and
                FunctionClarity (which will be launched at
                KubeCon+CloudNativeCon USA in October, 2022). These tools
                complement the functionality in Cisco’s cloud-native application
                security platform, Panoptica.
              </h2>
              <h2>Read more about each project below.</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const CodeSection = () => {
  return (
    <div className={styles.CodeSection}>
      <div className={styles.ClipPathHeader}>
        <h1>Adopted by</h1>
      </div>

      <div className={styles.CodeSectionSubSection}>
        <div className={styles.CodeSectionSubSectionList}>
          <IndividualCompanyCard
            company={{
              name: "Panoptica",
              logo: ImgPaths.PanopticaLogo,
              link: "https://panoptica.app",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const IndividualCompanyCard = ({ company }: { company: ICompanyObj }) => {
  return (
    <a
      href={company.link}
      target="_blank"
      className={styles.IndividualContributorContainer}
    >
      <div className={styles.IndividualContributorLogoContainer}>
        <img
          className={styles.IndividualContributorLogo}
          src={company.logo}
          alt={`${company.name} Logo`}
        />
      </div>
    </a>
  );
};

export default Home;
