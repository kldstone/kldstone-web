import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${title} �?康利德石�?KLD Stone`;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
    return () => {
      // keep the last-set description; no cleanup needed
    };
  }, [title, description, pathname]);

  return null;
}
