export function optimizedImage(src: string) {
  if (/^\/(brand-gallery|gani-home|gani-products)\/.+\.(jpe?g|png)$/i.test(src)) {
    return `/optimized${src.replace(/\.(jpe?g|png)$/i, ".webp")}`;
  }

  return src;
}

export function imgProps(src: string, alt = "", extra = "") {
  const isWebp = src.match(/\.(jpe?g|png)$/i);
  const finalSrc = isWebp ? optimizedImage(src) : src;
  const base = `src="${finalSrc}" alt="${alt}" ${extra}`;
  if (!isWebp) return base;
  return base;
}
