/** WebP sibling path for a raster image under /images/. */
export function webpFromRaster(src: string): string {
  return src.replace(/\.(png|jpe?g)$/i, '.webp');
}
