export function optimizedImage(src: string) {
  if (/^\/(brand-gallery|gani-home)\/.+\.(jpe?g|png)$/i.test(src)) {
    return `/optimized${src.replace(/\.(jpe?g|png)$/i, ".webp")}`;
  }

  return src;
}
