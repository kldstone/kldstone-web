import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { optimizedImage } from "@/lib/images";

/* 全部工厂实景图片（36张） */
const allPhotos = Array.from({ length: 35 }, (_, i) => ({
  src: `/brand-gallery/factory/factory-${String(i + 1).padStart(2, "0")}.jpg`,
  label: `实景 ${String(i + 1).padStart(2, "0")}`,
}));

/* 核心数据 */
const stats = [
  { num: "20+", label: "年行业沉淀", sub: "从荒料贸易到精加工" },
  { num: "149", label: "款大理石品种", sub: "现货大板常备" },
  { num: "±0.1mm", label: "水刀切割精度", sub: "双系统 · 全程数控" },
  { num: "6", label: "道出厂质检", sub: "色差 / 厚度 / 防护" },
];

/* 工厂配置清单 */
const facilities = [
  {
    title: "大理石大板线",
    desc: "金刚石框架锯 + 砂锯双系统，自动磨机六面抛光，光泽度稳定 90° 以上。每片大板编号归档，记录矿山来源、批次、色号——石材身份证系统。",
  },
  {
    title: "水刀拼花中心",
    desc: "高压水流携带磨料，每秒 800 米穿透石材，切割精度 ±0.1mm。十年以上经验工匠带队，出厂前按图纸 1:1 预拼验收。",
  },
  {
    title: "CNC 异形加工",
    desc: "数控雕刻、异型线条、罗马柱、雕花柱头——从设计图纸到成品一站式交付，复杂造型不再依赖手工试错。",
  },
  {
    title: "品质管控中心",
    desc: "色差管控、厚度检测、六面检查、防护处理——品质不是在客户面前表演，而是在没人看的时候依然做对的事。",
  },
];

export default function Craftsmanship() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevPhoto = useCallback(
    () => setLightbox((p) => (p === null ? null : (p - 1 + allPhotos.length) % allPhotos.length)),
    []
  );
  const nextPhoto = useCallback(
    () => setLightbox((p) => (p === null ? null : (p + 1) % allPhotos.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, prevPhoto, nextPhoto]);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] bg-[#0f0f0f] overflow-hidden">
        <img
          src={optimizedImage("/brand-gallery/craftsmanship-hero-2026-07-06.jpg")}
          alt=""
          className="w-full h-full object-cover object-top opacity-80"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-white text-[11px] font-bold tracking-[0.20em] uppercase">
              Factory Tour
            </span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-4">
              工厂品鉴
            </h1>
            <p className="text-white/65 text-[15px] max-w-[560px] mx-auto leading-relaxed">
              扎根中国石材之乡南安水头，从荒料到大板、从切割到拼花——欢迎实地走进康利德的工厂。
            </p>
          </div>
        </div>
      </section>

      {/* 工厂概况 - 数据展示 */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
            Overview
          </span>
          <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.03em] mb-4">
            一座长在石头上的工厂
          </h2>
          <p className="text-[var(--muted)] text-[15px] leading-[1.9] max-w-[680px] mx-auto">
            南安水头——这个名字在中国石材行业就是一个商标级别的存在。康利德不是一家"成立"的公司，而是一家在石材中"长大"的公司。从十几岁触碰石头的创始人，到今天拥有完整大板线、水刀拼花中心、CNC异形加工和品质管控车间的综合工厂，我们用二十多年把对石头的理解转化为对客户的交付。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center py-8 border-t border-[var(--line)]">
              <div className="text-[#34c759] text-[clamp(2rem,4vw,2.8rem)] font-black tracking-[0.02em] mb-2">
                {s.num}
              </div>
              <div className="text-[var(--ink)] text-[14px] font-bold tracking-[0.04em] mb-1">
                {s.label}
              </div>
              <div className="text-[var(--muted)] text-[12px] leading-relaxed">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 工厂实景图集 - 全部37张 */}
      <section className="bg-[var(--panel)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">
              On Site
            </span>
            <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.03em] mt-2 mb-3">
              走进车间
            </h2>
            <p className="text-[var(--muted)] text-[14px] max-w-[500px] mx-auto leading-relaxed">
              从荒料堆场到成品发货，每一张都是工厂的真实切面。点击图片可放大查看。
            </p>
          </div>

          {/* Masonry 瀑布流 */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [&>*]:mb-3">
            {allPhotos.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden group cursor-pointer relative"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={optimizedImage(photo.src)}
                  alt={photo.label}
                  className="w-full block object-cover img-hover"
                  loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-3">
                  <span className="text-white text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工厂配置清单 */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">
            Facilities
          </span>
          <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.03em] mt-2 mb-3">
            四大核心车间
          </h2>
          <p className="text-[var(--muted)] text-[14px] max-w-[560px] mx-auto leading-relaxed">
            设备可以采购，经验无法复制。在精确到毫米的机械语言与依靠直觉的天然材料之间，我们说一种共同的语言。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-[var(--line)] hover:border-[#34c759]/40 transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-[#34c759] text-[1.8rem] font-black tracking-[0.02em]">
                  0{i + 1}
                </span>
                <h3 className="text-[var(--ink)] text-[1.2rem] font-black tracking-[0.03em]">
                  {f.title}
                </h3>
              </div>
              <p className="text-[var(--muted)] text-[14px] leading-[1.9]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 参观邀请 CTA */}
      <section className="bg-[#0f0f0f] py-20 px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <span className="text-white/60 text-[11px] font-bold tracking-[0.18em] uppercase">
            Visit Us
          </span>
          <h2 className="text-white text-[clamp(1.4rem,3vw,2rem)] font-black tracking-[0.03em] mt-3 mb-4">
            百闻不如一见
          </h2>
          <p className="text-white/55 text-[15px] leading-[1.9] mb-8">
            好的工艺不需要解释——如果您想亲眼看看，我们随时欢迎您到水头来。从厦门高崎机场出发约 40 分钟车程，我们可安排接送。
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-3.5 bg-[#34c759] text-white text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#34c759]/80 transition-colors"
          >
            预约参观
          </Link>
        </div>
      </section>

      {/* Lightbox 灯箱 */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* 关闭按钮 */}
          <button
            className="absolute top-5 right-6 text-white text-[2rem] z-10 hover:text-[#34c759] transition-colors"
            onClick={closeLightbox}
          >
            &times;
          </button>

          {/* 上一张 */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-[2rem] z-10 hover:text-white transition-colors px-3"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            &#10094;
          </button>

          {/* 图片 */}
          <img
            src={optimizedImage(allPhotos[lightbox].src)}
            alt={allPhotos[lightbox].label}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* 下一张 */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 text-[2rem] z-10 hover:text-white transition-colors px-3"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            &#10095;
          </button>

          {/* 计数器 */}
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/60 text-[13px]">
            {lightbox + 1} / {allPhotos.length} · {allPhotos[lightbox].label}
          </div>
        </div>
      )}
    </div>
  );
}
