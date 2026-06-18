/** WebP sibling path for a raster image under /images/. */
export function webpFromRaster(src: string): string {
  return src.replace(/\.(png|jpe?g)$/i, '.webp');
}

/** Only paths with an actual .webp file in public/images should use <picture>. */
export function hasWebpVariant(src: string): boolean {
  if (!src.startsWith('/images/') || !/\.(png|jpe?g)$/i.test(src)) {
    return false;
  }
  return (
    src.startsWith('/images/services/') ||
    src === '/images/branding/logo.png' ||
    src === '/images/pages/specialised_therapy.png'
  );
}
