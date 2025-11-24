import { Helmet } from "react-helmet-async";
import seoConfig, { siteUrl } from "./seoConfig";

const getKeywords = (keywords = []) =>
  Array.from(new Set(keywords.filter(Boolean))).join(", ");

const SeoHelmet = ({ page = "default", overrides = {} }) => {
  const config = seoConfig[page] || seoConfig.default;
  const mergedConfig = { ...config, ...overrides };
  const {
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage = `${siteUrl}/plumeria.png`,
    robots = "index, follow",
    noindex = false,
    structuredData,
    extraMeta = [],
  } = mergedConfig;

  const keywordsValue = getKeywords(keywords);
  const robotsValue = noindex ? "noindex, nofollow" : robots;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywordsValue && <meta name="keywords" content={keywordsValue} />}

      <meta property="og:type" content="website" />
      {canonical && (
        <>
          <link rel="canonical" href={canonical} />
          <meta property="og:url" content={canonical} />
        </>
      )}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="robots" content={robotsValue} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      {extraMeta.map(({ name, property, content }) => (
        <meta
          key={`${name || property}-${content}`}
          name={name}
          property={property}
          content={content}
        />
      ))}
    </Helmet>
  );
};

export default SeoHelmet;

