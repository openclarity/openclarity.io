import { FiExternalLink } from "react-icons/fi";
import Layout from "../components/Layout";
import CustomImage from "../components/reusables/CustomImage";
import { resourcesArticles, resourcesMedia } from "../data/resourcesList";
import styles from "../styles/pages/ResourcesPage.module.scss";
import { IResourcesArticle, IResourcesMedia } from "../types/types";

const Resources = () => {
  return (
    <Layout pagePath="/resources" pageTitle="Resources">
      <div className={styles.Resources}>
        <HeaderSection />
        <div className={styles.ResourcesColumnContainer}>
          <div className={styles.ResourcesLeftContainer}>
            <div className={styles.ResourcesArticleGrid}>
              {resourcesArticles.map((article, i) => {
                return (
                  <ResourcesArticle
                    image={article.image}
                    title={
                      article.title.length > 70
                        ? `${article.title.slice(0, 71)}...`
                        : article.title
                    }
                    link={article.link}
                    linkText={article.linkText}
                    author={article.author}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.ResourcesDivider} />
          <div className={styles.ResourcesRightContainer}>
            {resourcesMedia.map((media, i) => {
              return (
                <ResourcesMedia
                  image={media.image}
                  link={media.link}
                  mediaType={media.mediaType}
                  title={media.title}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const HeaderSection = () => {
  return (
    <div className={styles.HeaderSection}>
      <h1 className={styles.HeaderSectionEyebrow}>Resources</h1>
      <h2>
        Learn more about <br />
        OpenClarity
      </h2>
      <p className={styles.HeaderSectionShortText}>
        Check out the latest blog articles, podcasts, videos, and more from the
        OpenClarity community.
      </p>
    </div>
  );
};

const ResourcesArticle = ({
  image,
  title,
  link,
  linkText,
  author,
}: IResourcesArticle) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.ResourcesArticle}
    >
      <img src={image} alt={title} />
      <div className={styles.ResourcesArticleContentContainer}>
        <a
          className={styles.ResourcesLink}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <FiExternalLink className={styles.ResourcesLinkIcon} />
          <p>Article: {linkText}</p>
        </a>
        <h6 className={styles.ResourcesArticleTitle}>{title}</h6>
        <p className={styles.ResourcesArticleAuthor}>by {author}</p>
      </div>
    </a>
  );
};

const ResourcesMedia = ({ image, mediaType, link, title }: IResourcesMedia) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.ResourcesMedia}
    >
      <div className={styles.ResourcesMediaImage}>
        <CustomImage src={image} alt={title} lazyLoad={false} />
      </div>
      <div className={styles.ResourcesMediaContent}>
        <a
          className={styles.ResourcesLink}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <FiExternalLink className={styles.ResourcesLinkIcon} />
          <p>{mediaType}</p>
        </a>
        <p className={styles.ResourcesMediaTitle}>
          {title.length > 70 ? `${title.slice(0, 70)}...` : title}
        </p>
      </div>
    </a>
  );
};

export default Resources;
