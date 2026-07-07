import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type PageMeta = {
  title: string;
  description: string;
  keywords: string;
};

const siteUrl = "https://www.kldstone.cn";
const englishSiteUrl = "https://www.kldstone.com";
const siteName = "康利德石材 KLD Stone";
const defaultImage = `${siteUrl}/optimized/brand-gallery/2025_12_05_14_26_IMG_0505.webp`;

const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "康利德石材 KLD Stone｜天然大理石与水刀拼花定制工厂",
    description: "康利德石材位于福建南安水头，提供天然大理石大板、水刀拼花、石材台面、异形加工、工程定制、质检包装与出口交付服务。",
    keywords: "康利德石材,天然大理石,水刀拼花,石材定制,石材工厂,南安石材,水头石材",
  },
  "/collections": {
    title: "产品系列｜天然大理石、水刀拼花与石材定制",
    description: "浏览康利德石材产品系列，包括天然大理石、水刀拼花、工程定制石材、台面与空间应用材料。",
    keywords: "石材产品系列,天然大理石,水刀拼花,工程石材,大理石大板",
  },
  "/collections/marble": {
    title: "天然大理石系列｜大理石大板与工程选材",
    description: "按色系浏览天然大理石系列，适用于酒店大堂、别墅会所、商业空间、背景墙、地面和台面定制。",
    keywords: "天然大理石,大理石大板,大理石供应商,白色大理石,灰色大理石",
  },
  "/collections/mosaic": {
    title: "水刀拼花系列｜大理石拼花与定制图案",
    description: "康利德石材提供水刀拼花、石材马赛克、地面拼花、墙面图案及工程定制拼花加工服务。",
    keywords: "水刀拼花,大理石拼花,石材马赛克,拼花地面,定制拼花",
  },
  "/spaces": {
    title: "空间案例｜酒店、别墅与商业空间石材应用",
    description: "查看康利德石材在酒店大堂、别墅会所、商业空间和高端住宅中的天然石材应用案例。",
    keywords: "石材案例,酒店大堂石材,别墅石材,商业空间石材,石材工程案例",
  },
  "/custom": {
    title: "石材定制服务｜选材、深化、加工与出口交付",
    description: "从需求沟通、石材甄选、深化设计到精工制造、预拼验收和包装交付，提供一站式石材定制服务。",
    keywords: "石材定制,台面定制,异形石材加工,CNC石材,工程石材定制",
  },
  "/craftsmanship": {
    title: "工厂品鉴｜大理石加工、水刀拼花与CNC异形",
    description: "走进康利德石材工厂，了解大板切割、水刀拼花、CNC异形加工、表面处理、质检和包装流程。",
    keywords: "石材工厂,大理石加工,水刀切割,CNC石材加工,南安水头工厂",
  },
  "/quality": {
    title: "品质保障｜石材质检、色差控制与出口包装",
    description: "康利德石材通过色差控制、厚度检查、六面检查、防护处理、木箱加固和物流跟踪保障交付品质。",
    keywords: "石材质检,色差控制,石材包装,出口木箱,石材品质保障",
  },
  "/about": {
    title: "关于康利德｜福建南安水头石材工厂",
    description: "康利德石材扎根中国石都南安水头，服务设计师、建筑商、工程客户和全球高端石材项目。",
    keywords: "关于康利德,南安石材工厂,水头石材,福建石材企业",
  },
  "/contact": {
    title: "联系我们｜获取石材报价与项目方案",
    description: "联系康利德石材，获取天然大理石、水刀拼花、台面定制、工程石材和出口包装报价方案。",
    keywords: "石材报价,联系石材工厂,大理石询盘,水刀拼花报价,康利德联系方式",
  },
};

function resolveMeta(pathname: string) {
  if (pathname.startsWith("/collections/product/")) {
    return {
      title: "石材产品详情｜天然石材与定制加工",
      description: "查看康利德石材产品细节，支持样品咨询、规格确认、深化加工、包装出口与项目报价。",
      keywords: "石材产品详情,大理石样品,石材报价,工程石材",
    };
  }

  return pageMeta[pathname] || pageMeta["/"];
}

function upsertMeta(selector: string, attr: "content" | "href", value: string, create: () => HTMLMetaElement | HTMLLinkElement) {
  let el = document.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = resolveMeta(pathname);
    const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    const canonical = `${siteUrl}${canonicalPath}`;

    document.documentElement.lang = "zh-CN";
    document.title = meta.title;

    upsertMeta('meta[name="description"]', "content", meta.description, () => {
      const el = document.createElement("meta");
      el.setAttribute("name", "description");
      return el;
    });
    upsertMeta('meta[name="keywords"]', "content", meta.keywords, () => {
      const el = document.createElement("meta");
      el.setAttribute("name", "keywords");
      return el;
    });
    upsertMeta('link[rel="canonical"]', "href", canonical, () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      return el;
    });
    upsertMeta('link[rel="alternate"][hreflang="zh-CN"]', "href", canonical, () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "alternate");
      el.setAttribute("hreflang", "zh-CN");
      return el;
    });
    upsertMeta('link[rel="alternate"][hreflang="en"]', "href", `${englishSiteUrl}${canonicalPath}`, () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "alternate");
      el.setAttribute("hreflang", "en");
      return el;
    });
    upsertMeta('link[rel="alternate"][hreflang="x-default"]', "href", `${englishSiteUrl}${canonicalPath}`, () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "alternate");
      el.setAttribute("hreflang", "x-default");
      return el;
    });

    const ogTags: Record<string, string> = {
      "og:type": "website",
      "og:site_name": siteName,
      "og:title": meta.title,
      "og:description": meta.description,
      "og:url": canonical,
      "og:image": defaultImage,
      "twitter:card": "summary_large_image",
      "twitter:title": meta.title,
      "twitter:description": meta.description,
      "twitter:image": defaultImage,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      const isTwitter = property.startsWith("twitter:");
      upsertMeta(`meta[${isTwitter ? "name" : "property"}="${property}"]`, "content", content, () => {
        const el = document.createElement("meta");
        el.setAttribute(isTwitter ? "name" : "property", property);
        return el;
      });
    });

    setJsonLd("schema-organization", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "福建省南安康利德石材有限公司",
      alternateName: "KLD Stone",
      url: siteUrl,
      logo: `${siteUrl}/kld-logo-web.png`,
      email: "kldstone.china@gmail.com",
      telephone: "+86 156 5906 9988",
      address: {
        "@type": "PostalAddress",
        streetAddress: "石井后店工业区",
        addressLocality: "南安市",
        addressRegion: "福建省",
        addressCountry: "CN",
      },
    });

    setJsonLd("schema-website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
      inLanguage: "zh-CN",
    });

    const segments = canonicalPath.split("/").filter(Boolean);
    setJsonLd("schema-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: `${siteUrl}/` },
        ...segments.map((segment, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: segment,
          item: `${siteUrl}/${segments.slice(0, index + 1).join("/")}`,
        })),
      ],
    });
  }, [pathname]);

  return null;
}
