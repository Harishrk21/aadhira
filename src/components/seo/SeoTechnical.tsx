import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSiteUrl } from '../../config/site';
import { isIndexablePathname } from '../../config/seoRoutes';
import { BRAND_NAME } from '../../config/brand';

const DEFAULT_TITLE = `Best Paediatric Therapy Centre in Chennai | ${BRAND_NAME}`;
const DEFAULT_DESCRIPTION = `${BRAND_NAME} — occupational therapy, speech & language, ABA, sensory integration, early intervention, and special education for children in Villivakkam, Chennai.`;

/** Per-route technical SEO: canonical, OG, Twitter card, index/noindex. */
const SeoTechnical = () => {
  const { pathname } = useLocation();
  const base = getSiteUrl();
  const indexable = isIndexablePathname(pathname);

  const pathNormalized =
    pathname === '' ? '/' : pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const canonicalHref = base ? `${base}${pathNormalized === '/' ? '/' : pathNormalized}` : '';
  const defaultOgImage = base
    ? `${base}/images/pages/specialised_therapy.png`
    : '/images/pages/specialised_therapy.png';

  return (
    <Helmet>
      {/* Canonical */}
      {base && indexable && canonicalHref ? <link rel="canonical" href={canonicalHref} /> : null}

      {/* Open Graph — site-wide defaults (page-level Helmets override these) */}
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={DEFAULT_TITLE} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Arura paediatric therapy support in Chennai" />
      {canonicalHref ? <meta property="og:url" content={canonicalHref} /> : null}

      {/* Twitter / X Card — site-wide defaults */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={DEFAULT_TITLE} />
      <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
      <meta name="twitter:image" content={defaultOgImage} />

      {/* Robots */}
      {!indexable ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
    </Helmet>
  );
};

export default SeoTechnical;
