import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { optimizedImage } from "@/lib/images";
import { trackConversion } from "@/lib/analytics";

// ============================================================
// 首页 — 转化优化版
// 轮播 Banner + 信任条 + 产品/工厂/案例/品质/CTA
// ============================================================

type Slide = {
  img: string;
  titEn: string;
  tit: string;
  des: string;
  href: string;
};

const slides: Slide[] = [
  {
    img: "/gani-home/banner_01.jpg",
    titEn: "Nature Within Reach",
    tit: "隐于空间之中，重塑静谧与秩序的奢华表达",
    des: "康利德2026年空间新品全球上市",
    href: "/collections/marble",
  },
  {
    img: "/gani-home/banner_02.jpg",
    titEn: "Architecture begins with precision stone",
    tit: "建筑之始，源于精准石材表达",
    des: "We transform architectural vision into engineered stone reality.",
    href: "/collections/marble",
  },
  {
    img: "/gani-home/banner_03.jpg",
    titEn: "Where design meets structural craft",
    tit: "设计与结构工艺，在此交汇",
    des: "Not decoration — but engineered spatial performance.",
    href: "/collections/marble",
  },
  {
    img: "/gani-home/banner_04.jpg",
    titEn: "Stone systems for landmark architecture",
    tit: "构筑大型空间的石材系统语言",
    des: "We build stone systems for hotels, commercial spaces, and landmark architecture.",
    href: "/collections/mosaic",
  },
  {
    img: "/gani-home/banner_05.jpg",
    titEn: "Precision waterjet inlay systems",
    tit: "每一片地面，皆为设计体验的一部分",
    des: "Precision waterjet inlay systems for luxury interiors worldwide.",
    href: "/collections/mosaic",
  },
];

// 信任数据
const trustStats = [
  { num: "20+", label: "年行业沉淀" },
  { num: "149", label: "款大理石品种" },
  { num: "±0.1mm", label: "水刀切割精度" },
  { num: "30+", label: "出口国家" },
];

// 精选产品
const featuredProducts = [
  { name: "安第斯雪景", en: "Avalanche", img: "/gani-products/gani_003_安第斯雪景.webp", color: "白色系" },
  { name: "宝格丽", en: "Calacatta Viola", img: "/gani-products/gani_014_宝格丽.webp", color: "白色系" },
  { name: "烟雨江南", en: "Camouflage Light", img: "/gani-products/gani_011_烟雨江南.webp", color: "灰色系" },
  { name: "鱼肚灰", en: "Cenere Di Pesce", img: "/gani-products/gani_071_鱼肚灰.webp", color: "白色系" },
  { name: "阿尔卑斯", en: "Verde Alpi Premium", img: "/gani-products/gani_023_阿尔卑斯.webp", color: "绿色系" },
  { name: "经典宝石蓝", en: "Brazil Blue Sodalite", img: "/gani-products/gani_005_经典宝石蓝.webp", color: "蓝色系" },
  { name: "卡拉拉金", en: "Oro Carrara", img: "/gani-products/gani_041_卡拉拉金.webp", color: "金色系" },
  { name: "雅典木纹", en: "Twilight Ashwood", img: "/gani-products/gani_101_雅典木纹.webp", color: "棕色系" },
];

// 水刀拼花精选
const featuredMosaics = [
  { name: "序知", en: "Petal Line", img: "/gani-products/gani_107_序知.webp" },
  { name: "观境", en: "Vista Scape", img: "/gani-products/gani_112_观境.webp" },
  { name: "影棠", en: "Shadow Blossom", img: "/gani-products/gani_111_影棠.webp" },
  { name: "钛谷", en: "Titanium", img: "/gani-products/gani_121_钛谷.webp" },
];

// 工厂流程
const processSteps = [
  { num: "01", title: "选板甄材", desc: "全球矿源直采，每片大板编号归档，记录矿山来源、批次与色号。" },
  { num: "02", title: "精工切割", desc: "金刚石框架锯 + 砂锯双系统，水刀切割精度 ±0.1mm，CNC 异形加工中心。" },
  { num: "03", title: "预拼验收", desc: "出厂前按图纸 1:1 预拼装，十年以上经验工匠带队逐片检查。" },
  { num: "04", title: "包装出口", desc: "定制木箱加固、六面防护处理、防潮包装、集装箱追踪到目的港。" },
];

// 精选案例
const featuredSpaces = [
  { img: "/brand-gallery/spaces-lobby-01.jpg", cat: "酒店大堂" },
  { img: "/brand-gallery/spaces-villa-01.jpg", cat: "别墅会所" },
  { img: "/brand-gallery/spaces-lobby-04.jpg", cat: "酒店大堂" },
  { img: "/brand-gallery/spaces-residential-01.jpg", cat: "住宅应用" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setActive((s) => (s + 1) % slides.length), []);
  const prev = useCallback(() => setActive((s) => (s - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [isPaused, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div>
      {/* ================================================================ */}
      {/* HERO CAROUSEL */}
      {/* ================================================================ */}
      <div
        className="relative w-full h-screen overflow-hidden bg-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              i === active
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <Link to={s.href} className="block w-full h-full relative">
              <img
                src={optimizedImage(s.img)}
                alt={s.tit}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding={i === 0 ? "sync" : "async"}
                className="w-full h-full object-cover"
                style={{
                  transform: i === active ? "scale(1)" : "scale(1.08)",
                  transition: "transform 6s ease-out",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            </Link>
          </div>
        ))}

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <div
              key={active}
              className="max-w-[640px]"
              style={{ animation: "slideFadeIn 1.2s ease-out" }}
            >
              <p className="text-white/60 text-[clamp(0.7rem,1.2vw,0.9rem)] font-light tracking-[0.25em] uppercase mb-4 md:mb-6">
                {slides[active].titEn}
              </p>
              <h1 className="text-white text-[clamp(2rem,5vw,4rem)] font-light tracking-[0.08em] leading-[1.2] mb-4 md:mb-6">
                {slides[active].tit}
              </h1>
              <p className="text-white/80 text-[clamp(0.85rem,1.4vw,1.1rem)] font-light tracking-[0.06em] leading-relaxed">
                {slides[active].des}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pb-8 md:pb-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="group relative h-[3px] transition-all duration-500"
                    style={{
                      width: i === active ? "48px" : "24px",
                      backgroundColor: i === active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prev} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 group" aria-label="上一张">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/60 group-hover:text-white transition-colors">
                    <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button onClick={next} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 group" aria-label="下一张">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/60 group-hover:text-white transition-colors">
                    <path d="M6 2L12 8L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[0.15em] uppercase">
          <span className="hidden md:inline">Scroll</span>
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none" stroke="currentColor" strokeWidth="1" className="animate-bounce">
            <rect x="0.5" y="0.5" width="11" height="17" rx="5.5"/>
            <line x1="6" y1="4" x2="6" y2="7" strokeLinecap="round"/>
          </svg>
        </div>

        <style>{`
          @keyframes slideFadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>

      {/* ================================================================ */}
      {/* 信任数据条 */}
      {/* ================================================================ */}
      <section className="bg-white border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[#34c759] text-[clamp(1.8rem,3vw,2.5rem)] font-black tracking-[0.02em] leading-none mb-2">
                  {s.num}
                </div>
                <div className="text-[#111111]/50 text-[13px] tracking-[0.06em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 产品系列 — 天然大理石精选 */}
      {/* ================================================================ */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-10">
        <div className="text-center mb-12">
          <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
            Collections
          </span>
          <h2 className="text-[#111111] text-[clamp(1.4rem,2.5vw,1.8rem)] font-black tracking-[0.03em] mb-3">
            天然大理石精选
          </h2>
          <p className="text-[#111111]/45 text-[14px] max-w-[520px] mx-auto leading-relaxed">
            从全球矿山直采，涵盖白、灰、黑、米、棕、蓝、绿、红、金九大色系，现货常备。
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
          {featuredProducts.map((p, i) => (
            <Link
              key={i}
              to="/collections/marble"
              className="group relative block overflow-hidden bg-[#f5f5f5] aspect-[3/4]"
            >
              <img
                src={optimizedImage(p.img)}
                alt={p.name}
                loading="lazy" decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 px-4 py-3">
                <p className="text-white text-[13px] font-semibold tracking-[0.04em] leading-tight">{p.name}</p>
                <p className="text-white/65 text-[10px] font-medium tracking-[0.08em] mt-0.5">{p.en}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/collections"
            onClick={() => trackConversion("cta_click", { source: "home_marble_all" })}
            className="inline-flex items-center gap-2 text-[#111111] text-[12px] font-bold tracking-[0.10em] uppercase border-b-2 border-[#34c759] pb-1 hover:text-[#34c759] transition-colors"
          >
            查看全部产品系列
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L12 8L6 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 水刀拼花精选 */}
      {/* ================================================================ */}
      <section className="bg-[#f8f8f8] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
              Waterjet
            </span>
            <h2 className="text-[#111111] text-[clamp(1.4rem,2.5vw,1.8rem)] font-black tracking-[0.03em] mb-3">
              水刀拼花定制
            </h2>
            <p className="text-[#111111]/45 text-[14px] max-w-[520px] mx-auto leading-relaxed">
              高压水刀切割精度 ±0.1mm，十年以上工匠带队，出厂前 1:1 预拼验收。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {featuredMosaics.map((p, i) => (
              <Link
                key={i}
                to="/collections/mosaic"
                className="group relative block overflow-hidden bg-[#f5f5f5] aspect-square"
              >
                <img
                  src={optimizedImage(p.img)}
                  alt={p.name}
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 px-4 py-3">
                  <p className="text-white text-[13px] font-semibold tracking-[0.04em] leading-tight">{p.name}</p>
                  <p className="text-white/65 text-[10px] font-medium tracking-[0.08em] mt-0.5">{p.en}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/collections/mosaic"
              onClick={() => trackConversion("cta_click", { source: "home_mosaic_all" })}
              className="inline-flex items-center gap-2 text-[#111111] text-[12px] font-bold tracking-[0.10em] uppercase border-b-2 border-[#34c759] pb-1 hover:text-[#34c759] transition-colors"
            >
              查看全部水刀拼花
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L12 8L6 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 工厂能力 — 四步可视化 */}
      {/* ================================================================ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
              How We Make It
            </span>
            <h2 className="text-[#111111] text-[clamp(1.4rem,2.5vw,1.8rem)] font-black tracking-[0.03em] mb-3">
              从荒料到成品，每一步都在自己手中
            </h2>
            <p className="text-[#111111]/45 text-[14px] max-w-[520px] mx-auto leading-relaxed">
              自有工厂，全程品控——不外包，不让品质离开我们的视线。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#f8f8f8] p-8 h-full">
                  <span className="text-[#34c759] text-[2.5rem] font-black tracking-[0.02em] leading-none block mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-[#111111] text-[16px] font-bold tracking-[0.04em] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#111111]/45 text-[13px] leading-[1.8]">
                    {step.desc}
                  </p>
                </div>
                {/* Arrow between steps (desktop only) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-[#34c759]/30 text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/craftsmanship"
              onClick={() => trackConversion("cta_click", { source: "home_factory_tour" })}
              className="inline-flex items-center gap-2 text-[#111111] text-[12px] font-bold tracking-[0.10em] uppercase border-b-2 border-[#34c759] pb-1 hover:text-[#34c759] transition-colors"
            >
              走进工厂车间
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L12 8L6 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 视频展示 */}
      {/* ================================================================ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
              Video
            </span>
            <h2 className="text-[#111111] text-[clamp(1.4rem,2.5vw,1.8rem)] font-black tracking-[0.03em] mb-3">
              广州国际石材展
            </h2>
            <p className="text-[#111111]/45 text-[14px] max-w-[560px] mx-auto leading-relaxed">
              2026年厦门国际石材展康利德展位现场，展示水刀拼花工艺与奢石家居新品。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 max-w-[760px] mx-auto">
            <div className="aspect-video bg-[#f5f5f5] overflow-hidden relative">
              <video className="w-full h-full object-cover" controls preload="none" poster="/brand-gallery/home-exhibition-2026-07-09.jpg">
                <source src="/videos/waterjet-cutting.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 项目案例精选 */}
      {/* ================================================================ */}
      <section className="bg-[#0f0f0f] py-20 px-6 text-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-white/50 text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
              Project Cases
            </span>
            <h2 className="text-white text-[clamp(1.4rem,2.5vw,1.8rem)] font-black tracking-[0.03em] mb-3">
              石材的归宿不是仓库，而是空间
            </h2>
            <p className="text-white/40 text-[14px] max-w-[520px] mx-auto leading-relaxed">
              以下是我们服务的酒店大堂、别墅会所、商业空间与住宅应用案例。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {featuredSpaces.map((s, i) => (
              <Link
                key={i}
                to="/spaces"
                className="group relative block overflow-hidden bg-white/5 aspect-[3/4]"
              >
                <img
                  src={optimizedImage(s.img)}
                  alt={s.cat}
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 px-4 py-3">
                  <p className="text-white text-[12px] font-semibold tracking-[0.06em]">{s.cat}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/spaces"
              onClick={() => trackConversion("cta_click", { source: "home_spaces_all" })}
              className="inline-flex items-center gap-2 text-white text-[12px] font-bold tracking-[0.10em] uppercase border-b-2 border-[#34c759] pb-1 hover:text-[#34c759] transition-colors"
            >
              查看全部空间案例
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L12 8L6 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 品质与出口信任 */}
      {/* ================================================================ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
                Quality & Export
              </span>
              <h2 className="text-[#111111] text-[clamp(1.4rem,2.5vw,1.8rem)] font-black tracking-[0.03em] mb-6">
                漂洋过海的品质承诺
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#34c759]/10 rounded-full flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h3 className="text-[#111111] text-[14px] font-bold tracking-[0.04em] mb-1">六道出厂质检</h3>
                    <p className="text-[#111111]/45 text-[13px] leading-[1.7]">色差管控、厚度检测、六面检查、防护处理——每一片出厂前都经过严格筛选。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#34c759]/10 rounded-full flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
                  </div>
                  <div>
                    <h3 className="text-[#111111] text-[14px] font-bold tracking-[0.04em] mb-1">定制木箱加固</h3>
                    <p className="text-[#111111]/45 text-[13px] leading-[1.7]">根据产品尺寸定制木箱，内衬 EPE 珍珠棉，钢带打包，按海运堆码标准设计。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#34c759]/10 rounded-full flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h3 className="text-[#111111] text-[14px] font-bold tracking-[0.04em] mb-1">全程物流追踪</h3>
                    <p className="text-[#111111]/45 text-[13px] leading-[1.7]">从水头港到全球主要港口，独立的箱单、唛头和保险文件，发货当日发送装箱照片。</p>
                  </div>
                </div>
              </div>
              <Link
                to="/quality"
                onClick={() => trackConversion("cta_click", { source: "home_quality" })}
                className="inline-flex items-center gap-2 mt-8 text-[#111111] text-[12px] font-bold tracking-[0.10em] uppercase border-b-2 border-[#34c759] pb-1 hover:text-[#34c759] transition-colors"
              >
                了解品质保障体系
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L12 8L6 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>

            <div className="overflow-hidden img-hover">
              <img
                src={optimizedImage("/brand-gallery/home-exhibition-2026-07-09.jpg")}
                alt="石材展会"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy" decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 底部强 CTA */}
      {/* ================================================================ */}
      <section className="bg-[#34c759] py-16 px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-white text-[clamp(1.4rem,2.5vw,1.8rem)] font-black tracking-[0.03em] mb-3">
            获取专属石材方案与报价
          </h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-[460px] mx-auto leading-relaxed">
            无论您是设计师、建筑商还是零售商，我们会在24小时内回复您的询盘。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => trackConversion("quote_cta", { source: "home_bottom" })}
              className="inline-flex items-center gap-2 px-10 py-3.5 bg-white text-[#34c759] text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-white/90 transition-colors"
            >
              在线询盘
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </Link>
            <a
              href="tel:+8615659069988"
              onClick={() => trackConversion("phone_click", { source: "home_bottom" })}
              className="inline-flex items-center gap-2 px-10 py-3.5 bg-transparent border-2 border-white/30 text-white text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-white/10 transition-colors"
            >
              电话咨询
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
