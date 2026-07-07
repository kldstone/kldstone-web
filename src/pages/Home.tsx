import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// ============================================================
// 首页 — gani.com.cn 风格
// 全屏轮播 Banner，左对齐文字叠加
// 图片来源：gani.com.cn 首页轮播图
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

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
            i === active
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <Link to={s.href} className="block w-full h-full relative">
            <img
              src={s.img}
              alt={s.tit}
              className="w-full h-full object-cover"
              style={{
                transform: i === active ? "scale(1)" : "scale(1.08)",
                transition: "transform 6s ease-out",
              }}
            />
            {/* Gradient overlay — left side darker for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          </Link>
        </div>
      ))}

      {/* Text overlay — left aligned, vertically centered */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div
            key={active}
            className="max-w-[640px]"
            style={{ animation: "slideFadeIn 1.2s ease-out" }}
          >
            {/* English subtitle */}
            <p className="text-white/60 text-[clamp(0.7rem,1.2vw,0.9rem)] font-light tracking-[0.25em] uppercase mb-4 md:mb-6">
              {slides[active].titEn}
            </p>

            {/* Chinese title */}
            <h1 className="text-white text-[clamp(2rem,5vw,4rem)] font-light tracking-[0.08em] leading-[1.2] mb-4 md:mb-6">
              {slides[active].tit}
            </h1>

            {/* Description */}
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
            {/* Pagination dots */}
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

            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 group"
                aria-label="上一张"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/60 group-hover:text-white transition-colors">
                  <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 group"
                aria-label="下一张"
              >
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

      {/* Keyframe animation */}
      <style>{`
        @keyframes slideFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
