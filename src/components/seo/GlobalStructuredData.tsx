import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSiteUrl } from '../../config/site';
import {
  getMedicalClinicJsonLd,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
} from '../../config/structuredDataClinic';
import { getBreadcrumbJsonLd } from '../../config/breadcrumbJsonLd';

/** Site-wide JSON-LD: Organization, MedicalClinic, WebSite; BreadcrumbList on inner routes. */
const GlobalStructuredData = () => {
  const { pathname } = useLocation();
  const siteUrl = getSiteUrl();
  if (!siteUrl) return null;

  const org = getOrganizationJsonLd(siteUrl);
  const clinic = getMedicalClinicJsonLd(siteUrl);
  const website = getWebSiteJsonLd(siteUrl);
  const breadcrumb = getBreadcrumbJsonLd(pathname, siteUrl);

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(org)}</script>
      <script type="application/ld+json">{JSON.stringify(clinic)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
      {breadcrumb ? <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script> : null}
    </Helmet>
  );
};

export default GlobalStructuredData;
