import { webpFromRaster } from '../../utils/imagePath';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'auto' | 'sync';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const ResponsiveImage = ({
  src,
  alt,
  className,
  width,
  height,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
}: ResponsiveImageProps) => {
  const webp = webpFromRaster(src);

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
};

export default ResponsiveImage;
