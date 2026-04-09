import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSiteUrl } from '../../config/site';
import { isIndexablePathname } from '../../config/seoRoutes';

/** Per-route technical SEO: canonical URL, index/noindex for soft 404s. */
const SeoTechnical = () => {
  const { pathname, search } = useLocation();
  const base = getSiteUrl();
  const indexable = isIndexablePathname(pathname);

  const pathNormalized =
    pathname === '' ? '/' : pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const canonicalHref = base ? `${base}${pathNormalized === '/' ? '/' : pathNormalized}${search}` : '';

  return (
    <Helmet>
      {base && indexable && canonicalHref ? (
        <link rel="canonical" href={canonicalHref} />
      ) : null}
      {!indexable ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
    </Helmet>
  );
};

export default SeoTechnical;
