import { Link } from "react-router-dom";

const collectionCategories = [
  {
    slug: "marble",
    title: "天然大理石",
    subtitle: "Natural Marble",
    desc: "从全球知名矿场甄选的天然大理石，每片纹理皆为地质运动的孤品。我们提供板材、荒料及定制尺寸的采购服务。",
    hero: "/brand-gallery/029-materials-img-2040.jpg",
    thumb: "/brand-gallery/030-materials-img-1919.jpg",
  },
  {
    slug: "mosaic",
    title: "水刀拼花马赛克",
    subtitle: "Waterjet Mosaic",
    desc: "将天然石材变为精确至0.1毫米的艺术拼图。从古典纹样到现代几何，我们以水为刀，以石为纸。",
    hero: "/brand-gallery/031-materials-img-1954.jpg",
    thumb: "/brand-gallery/035-materials-img-2108.jpg",
  },
  {
    slug: "furniture",
    title: "石材家具摆件",
    subtitle: "Stone Furniture & Decor",
    desc: "茶几、边桌、托盘、摆件——让天然石材走进日常生活的每一个细腻角落。",
    hero: "/brand-gallery/041-materials-img-1828.jpg",
    thumb: "/brand-gallery/043-materials-img-2093.jpg",
  },
  {
    slug: "countertop",
    title: "石材台面定制",
    subtitle: "Custom Countertops",
    desc: "厨房台面、卫浴台盆、吧台面板——从选材、切割到打磨，全流程量身定制。",
    hero: "/brand-gallery/036-materials-img-2109.jpg",
    thumb: "/brand-gallery/039-materials-img-2049.jpg",
  },
];

export default function Collections() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[var(--ink)] py-20 px-6 text-center">
        <span className="text-[#b8873d] text-[11px] font-bold tracking-[0.20em] uppercase">Collections</span>
        <h1 className="text-white text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-[0.03em] mt-3 mb-4">
          石材系列
        </h1>
        <p className="text-white/50 text-[15px] max-w-[560px] mx-auto leading-relaxed">
          从荒料到成品，我们将每一块天然石材视为独立的生命体。以下是康利德的四大产品系列。
        </p>
      </section>

      {/* Collections Grid */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {collectionCategories.map((cat) => (
            <Link key={cat.slug} to={`/collections/${cat.slug}`} className="group block">
              <div className="grid grid-cols-3 gap-3 mb-6 overflow-hidden">
                <div className="col-span-2 img-hover">
                  <img src={cat.hero} alt="" className="w-full aspect-[16/10] object-cover" />
                </div>
                <div className="img-hover">
                  <img src={cat.thumb} alt="" className="w-full aspect-[3/4] object-cover" />
                </div>
              </div>
              <span className="text-[#b8873d] text-[10px] font-bold tracking-[0.16em] uppercase">{cat.subtitle}</span>
              <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.02em] mt-1 mb-2 group-hover:text-[#b8873d] transition-colors">
                {cat.title}
              </h2>
              <p className="text-[var(--muted)] text-[14px] leading-relaxed max-w-[480px]">{cat.desc}</p>
              
              {/* Sub-actions */}
              <div className="flex flex-wrap gap-2 mt-5">
                <Link
                  to={`/collections/${cat.slug}`}
                  className="inline-block px-3 py-1.5 bg-[#b8873d]/10 text-[#b8873d] text-[11px] font-semibold tracking-[0.04em] border border-[#b8873d]/25 hover:bg-[#b8873d]/20 transition-colors"
                >
                  查看详情
                </Link>
                <Link
                  to="/contact"
                  className="inline-block px-3 py-1.5 bg-[var(--panel)] text-[var(--muted)] text-[11px] font-medium tracking-[0.04em] border border-[var(--line)] hover:border-[var(--ink)] hover:text-[var(--ink)] transition-colors"
                >
                  获取报价
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Materials showcase strip */}
      <section className="bg-[var(--panel)] py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#b8873d] text-[10px] font-bold tracking-[0.16em] uppercase">Material Library</span>
            <h2 className="text-[var(--ink)] text-[1.3rem] font-black tracking-[0.03em] mt-2">石材品种精选</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: "卡拉拉白", src: "/brand-gallery/032-materials-img-2037.jpg" },
              { name: "萨索斯雪花", src: "/brand-gallery/033-materials-img-2039.jpg" },
              { name: "亚马逊绿", src: "/brand-gallery/034-materials-img-2013.jpg" },
              { name: "土耳其洞石", src: "/brand-gallery/042-materials-img-2468.jpg" },
              { name: "爵士白", src: "/brand-gallery/044-materials-img-1981.jpg" },
              { name: "金蜘蛛", src: "/brand-gallery/045-materials-img-2050.jpg" },
            ].map((m) => (
              <div key={m.name} className="group cursor-pointer">
                <div className="overflow-hidden mb-2 img-hover">
                  <img src={m.src} alt={m.name} className="w-full aspect-[1/1] object-cover" />
                </div>
                <p className="text-[var(--ink)] text-[12px] font-semibold tracking-[0.03em] text-center group-hover:text-[#b8873d] transition-colors">
                  {m.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
