import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const spacesData: Record<string, string[]> = {
  "酒店大堂": [
    "/brand-gallery/spaces-lobby-01.jpg",
    "/brand-gallery/spaces-lobby-02.jpg",
    "/brand-gallery/spaces-lobby-04.jpg",
    "/brand-gallery/spaces-lobby-05.jpg",
    "/brand-gallery/spaces-lobby-06.jpg",
    "/brand-gallery/spaces-lobby-07.jpg",
    "/brand-gallery/spaces-lobby-08.jpg",
    "/brand-gallery/spaces-lobby-09.jpg",
  ],
  "别墅会所": [
    "/brand-gallery/spaces-villa-01.jpg",
    "/brand-gallery/spaces-villa-02.jpg",
    "/brand-gallery/spaces-villa-03.jpg",
    "/brand-gallery/spaces-villa-04.jpg",
    "/brand-gallery/spaces-villa-05.jpg",
    "/brand-gallery/spaces-villa-06.jpg",
    "/brand-gallery/spaces-villa-07.jpg",
    "/brand-gallery/spaces-villa-08.jpg",
    "/brand-gallery/spaces-villa-09.jpg",
  ],
  "商业空间": [
    "/brand-gallery/spaces-commercial-01.jpg",
    "/brand-gallery/spaces-commercial-02.jpg",
  ],
  "住宅应用": [
    "/brand-gallery/spaces-residential-01.jpg",
    "/brand-gallery/spaces-residential-02.jpg",
    "/brand-gallery/spaces-residential-03.jpg",
    "/brand-gallery/spaces-residential-04.jpg",
    "/brand-gallery/spaces-residential-05.jpg",
    "/brand-gallery/spaces-residential-06.jpg",
  ],
};

const categories = ["全部", "酒店大堂", "别墅会所", "商业空间", "住宅应用"];

const categoryLabels: Record<string, string> = {
  "酒店大堂": "奢华酒店大堂 · 石材是空间的第一句对白",
  "别墅会所": "私人别墅与高端会所 · 让家成为美术馆",
  "商业空间": "商业空间 · 石材与品牌气质的共鸣",
  "住宅应用": "高端住宅 · 让日常触碰亿万年的质感",
};

export default function Spaces() {
  const [activeCat, setActiveCat] = useState("全部");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredSpaces = useMemo(() => {
    if (activeCat === "全部") {
      return Object.values(spacesData).flat();
    }
    return spacesData[activeCat] || [];
  }, [activeCat]);

  return (
    <div>
      {/* Page Header / Hero */}
      <section className="relative h-[55vh] min-h-[420px] bg-[#0f0f0f] overflow-hidden">
        <img
          src="/brand-gallery/spaces-hero-2026-07-06.jpg"
          alt="空间作品"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-white text-[11px] font-bold tracking-[0.20em] uppercase">Our Spaces</span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.03em] mt-3 mb-4">
              空间作品
            </h1>
            <p className="text-white/65 text-[15px] max-w-[600px] mx-auto leading-relaxed">
              石材的最终归宿，不是仓库，而是空间。以下是我们参与的项目实景——酒店、别墅、商业空间，石材都在那里安静地发光。
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-5 py-2 text-[12px] font-semibold tracking-[0.06em] border transition-all ${
              activeCat === cat
                ? "bg-[#34c759] text-white border-[#34c759]"
                : "bg-transparent text-[var(--muted)] border-[var(--line)] hover:border-[var(--ink)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Category Description */}
      {activeCat !== "全部" && (
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <p className="text-[var(--muted)] text-[14px] italic">{categoryLabels[activeCat]}</p>
        </div>
      )}

      {/* Masonry Gallery */}
      <section className="max-w-[1280px] mx-auto px-6 pt-6 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredSpaces.map((src, i) => (
            <div
              key={i}
              className="relative break-inside-avoid overflow-hidden group cursor-pointer"
              onClick={() => setLightbox(src)}
            >
              <img
                src={src}
                alt={`空间作品 ${i + 1}`}
                className="w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 text-[28px] hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[88vh] object-contain cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="bg-[var(--panel)] py-20 px-6 text-center">
        <h2 className="text-[var(--ink)] text-[clamp(1.5rem,2.5vw,2rem)] font-black tracking-[0.02em] mb-4">
          让天然石材为您的空间添色
        </h2>
        <p className="text-[var(--muted)] text-[15px] max-w-[500px] mx-auto mb-8 leading-relaxed">
          我们期待与设计师、建筑商和业主合作，为大堂、别墅、商业空间注入最纯粹的天然质感。
        </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-3.5 bg-[#34c759] text-white text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#34c759]/80 transition-colors"
          >
            立即咨询
          </Link>
      </section>
    </div>
  );
}
