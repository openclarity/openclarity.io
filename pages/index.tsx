import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";
import { getAllPosts } from "../lib/api";
import {
  BlogMetadata,
  ImgPaths,
  SectionHeaders,
} from "../types/enums";
import { IBlogMetadata, ICompanyObj, IFeatureObj } from "../types/types";
import {
  eventsArr,
  featuresArr,
} from "../data/landingPageArrs";
import { Carousel } from "react-responsive-carousel";
import SectionHeader from "../components/reusables/SectionHeader";
import { parseAuthors } from "../utils/parseAuthors";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";
import useWindowSize from "../hooks/useWindowSize";
import Container from "../components/Container";
import gridStyles from "../styles/layout/Grid.module.scss";
import { whatIsData } from "../data/whatIsData";
import ThreeCardSection from "../components/pages/home/ThreeCardSection";
import WhatIsSection from "../components/pages/home/WhatIsSection";
const Home = ({ allPosts }: { allPosts: IBlogMetadata[] }) => {
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
            <img src={ImgPaths.OpenClarityLogo} alt="logo" />

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
                OpenClarity is an umbrella branding for Cisco's complementary
                open source projects in the areas of security and observability
                called APIClarity, KubeClarity, and soon the be launched
                FunctionClarity.
              </h2>
              <h2>Read more about each project below</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className={styles.FeaturesSection}>
      <div className={styles.FeaturesSectionShortDescriptionContainer}>
        <p className={styles.FeaturesSectionShortDescriptionContainerText}>
          APIClarity, an open source cloud native visibility tool for APIs,
          utilizes a Service Mesh framework to capture and analyze API traffic,
          and identify potential&nbsp;risks.
        </p>
        <p className={styles.FeaturesSectionShortDescriptionContainerText}>
          Use APIClarity to compare your OpenAPI specification to its state at
          runtime. For apps that don’t have an OpenAPI specification, leverage
          APIClarity to reconstruct a specification in a live&nbsp;environment.
        </p>
        <p className={styles.FeaturesSectionShortDescriptionContainerText}>
          Cloud native applications use and expose APIs, which have been the
          source of many highly publicized cyber-attacks and breaches. Leverage
          APIClarity to improve your API visibility and your applications
          security&nbsp;posture.
        </p>
      </div>
      <div className={styles.FeaturesSectionList}>
        {featuresArr.map((feature: IFeatureObj, i: number) => (
          <IndividualCard key={i} feature={feature} />
        ))}
      </div>
    </div>
  );
};

interface IIndividualCardProps {
  feature: IFeatureObj;
}

const IndividualCard = ({ feature }: IIndividualCardProps) => {
  return (
    <div className={styles.IndividualCard}>
      {feature.icon}
      <div className={styles.IndividualCardTextContainer}>
        <p className={styles.IndividualCardTextBold}>{feature.textBold}</p>
        <p className={styles.IndividualCardText}>{feature.text}</p>
      </div>
    </div>
  );
};

const UpcomingEventsSection = () => {
  return (
    <div className={styles.UpcomingEventsSection}>
      <SectionHeader text={SectionHeaders.UpcomingEvents} light />
      <div className={styles.UpcomingEventsSectionList}>
        <Carousel
          emulateTouch
          autoPlay
          interval={5000}
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          {eventsArr.map((event) => (
            <IndividualEvent key={event.link} event={event} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const IndividualEvent = ({ event }) => {
  const window = useWindowSize();
  return (
    <div className={styles.IndividualEvent}>
      <img className={styles.IndividualEventImage} src={event.banner} />
      <p className={styles.IndividualEventTitle}>{event.title}</p>
      <p className={styles.IndividualEventDate}>{event.date}</p>
      <a
        className={styles.IndividualEventLink}
        href={event.link}
        target="_blank"
      >
        Learn More
      </a>
    </div>
  );
};

const VideoSection = () => {
  return (
    <div className={styles.VideoSection}>
      <SectionHeader text={SectionHeaders.VideoSection} />
      <div className={styles.VideoSectionVideoContainer}>
        <ReactPlayer
          url={"/assets/shared/apiclarity.mp4"}
          className={styles.VideoSectionVideo}
          width="100%"
          height="100%"
          controls={true}
          // light={"/assets/shared/homepage-filler.jpg"}
        />
      </div>
    </div>
  );
};

const BlogSliderSection = ({ allPosts }: { allPosts: IBlogMetadata[] }) => {
  const router = useRouter();
  return (
    <div className={styles.BlogSliderSection}>
      <SectionHeader text={SectionHeaders.Resources} light />
      <div className={styles.BlogSliderSectionList}>
        {allPosts.map((post: IBlogMetadata) => {
          return (
            <div
              onClick={() => router.push(`${post[BlogMetadata.Slug]}`)}
              className={styles.BlogSliderSectionArticle}
              key={post[BlogMetadata.Slug]}
            >
              <img
                className={styles.BlogSliderSectionArticleImage}
                src={post[BlogMetadata.Img]}
                alt={post[BlogMetadata.Title]}
              />
              <h3 className={styles.BlogSliderSectionArticleTitle}>
                {post[BlogMetadata.Title]}{" "}
                <span className={styles.BlogSliderSectionArticleAuthor}>
                  - {parseAuthors(post[BlogMetadata.Authors])}
                </span>
              </h3>
            </div>
          );
        })}
      </div>
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

export async function getStaticProps() {
  const allPosts = getAllPosts([
    BlogMetadata.Title,
    BlogMetadata.Date,
    BlogMetadata.PublishDate,
    BlogMetadata.Authors,
    BlogMetadata.AuthorImage,
    BlogMetadata.Img,
    BlogMetadata.Tags,
    BlogMetadata.Layout,
    BlogMetadata.Slug,
  ]);

  return {
    props: { allPosts },
  };
}

export default Home;
