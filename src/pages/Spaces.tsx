import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const spacesData: Record<string, string[]> = {
  "酒店大堂": [
    "/brand-gallery/001-spaces-img-1428.jpg",
    "/brand-gallery/002-spaces-img-1410.jpg",
    "/brand-gallery/003-spaces-img-1397.jpg",
    "/brand-gallery/004-spaces-img-1404.jpg",
    "/brand-gallery/005-spaces-img-1369.jpg",
    "/brand-gallery/006-spaces-img-2607.jpg",
    "/brand-gallery/007-spaces-img-1429.jpg",
  ],
  "别墅会所": [
    "/brand-gallery/008-spaces-img-1200.jpg",
    "/brand-gallery/009-spaces-img-1259.jpg",
    "/brand-gallery/010-spaces-img-1256.jpg",
    "/brand-gallery/011-spaces-img-1201.jpg",
    "/brand-gallery/012-spaces-img-2531.jpg",
    "/brand-gallery/013-spaces-img-1398.jpg",
    "/brand-gallery/014-spaces-img-2524.jpg",
  ],
  "商业空间": [
    "/brand-gallery/015-spaces-img-1456.jpg",
    "/brand-gallery/016-spaces-img-2534.jpg",
    "/brand-gallery/017-spaces-img-1450.jpg",
    "/brand-gallery/018-spaces-img-2535.jpg",
    "/brand-gallery/019-spaces-img-1409.jpg",
    "/brand-gallery/020-spaces-img-1202.jpg",
  ],
  "住宅应用": [
    "/brand-gallery/021-spaces-img-1260.jpg",
    "/brand-gallery/022-spaces-img-1430.jpg",
    "/brand-gallery/023-spaces-img-1217.jpg",
    "/brand-gallery/024-spaces-img-1258.jpg",
    "/brand-gallery/025-spaces-img-1199.jpg",
    "/brand-gallery/026-spaces-img-1283.jpg",
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
      {/* Page Header */}
      <section className="bg-[#f8f8f8] py-20 px-6 text-center border-b border-black/8">
        <span className="text-[#111111] text-[11px] font-bold tracking-[0.20em] uppercase">Our Spaces</span>
        <h1 className="text-[#111111] text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-[0.03em] mt-3 mb-4">
          空间作品
        </h1>
        <p className="text-[#111111]/50 text-[15px] max-w-[600px] mx-auto leading-relaxed">
          石材的最终归宿，不是仓库，而是空间。以下是我们参与的项目实景——酒店、别墅、商业空间，石材都在那里安静地发光。
        </p>
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
              className="break-inside-avoid overflow-hidden group cursor-pointer"
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
