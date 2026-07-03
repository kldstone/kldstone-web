import { Link } from "react-router-dom";

const heritageImgs = [
  "/brand-gallery/091-heritage-img-2395.jpg",
  "/brand-gallery/092-heritage-img-2221.jpg",
  "/brand-gallery/093-heritage-img-2222.jpg",
  "/brand-gallery/094-heritage-img-1719.jpg",
  "/brand-gallery/095-heritage-img-1761.jpg",
  "/brand-gallery/096-heritage-img-2153.jpg",
  "/brand-gallery/097-heritage-img-2305.jpg",
  "/brand-gallery/098-heritage-img-2430.jpg",
  "/brand-gallery/099-heritage-img-2404.jpg",
  "/brand-gallery/100-heritage-img-2392.jpg",
  "/brand-gallery/101-heritage-img-1733.jpg",
  "/brand-gallery/102-heritage-img-1743.jpg",
  "/brand-gallery/103-heritage-img-1745.jpg",
  "/brand-gallery/104-heritage-img-2401.jpg",
];

const craftFields = [
  {
    title: "大理石大板加工",
    sub: "The Art of Slab",
    desc: "从荒料到大板，第一刀决定了石材的最终表现。我们采用金刚石框架锯和砂锯双系统——前者确保高效开料，后者保留石材天然纹理的完整性。板材出产前经过自动磨机六面抛光，光泽度稳定在 90° 以上。每一片大板都会被编号归档，记录其矿山来源、批次、色号——这是我们的石材身份证系统。",
    images: [
      "/brand-gallery/027-materials-img-2084.jpg",
      "/brand-gallery/030-materials-img-1919.jpg",
      "/brand-gallery/033-materials-img-2039.jpg",
    ],
    path: "/collections/marble",
  },
  {
    title: "水刀拼花马赛克",
    sub: "Waterjet Mosaic",
    desc: "水刀拼花是石材加工领域中最接近艺术创作的工艺。高压水流携带磨料，以每秒 800 米的速度穿透石材，切割精度达到 ±0.1mm。不同颜色、种类的石材被精确切割成设计好的形状，再像拼图般镶嵌组合。从古典欧式卷草纹到现代几何抽象，我们的水刀拼花团队由十年以上经验的工匠带领。每一件拼花作品出厂前都按图纸 1:1 预拼验收——在石头被镶嵌到您的空间之前，它已经在我们这里被完整地拼接了一次。",
    images: [
      "/brand-gallery/080-details-img-1663.jpg",
      "/brand-gallery/081-details-img-1541.jpg",
      "/brand-gallery/083-details-img-1566.jpg",
    ],
    path: "/collections/mosaic",
  },
  {
    title: "石材家具与摆件",
    sub: "Stone Furniture",
    desc: "石材家具的魅力在于它同时具备重量感和精致感。一张大理石茶几需要经过板材选料、CNC 异形切割、边缘倒角打磨、底部加肋加固、表面渗透防护处理等十几道工序。我们避免使用任何贴面或仿石材材质——这里的每一件家具，都是整块天然石材经过减法工艺后的结果。台灯下的透光纹理、指尖触到的天然温度——这些都不是「设计」出来的，而是大理石本身就是如此。",
    images: [
      "/brand-gallery/090-details-img-1224.jpg",
      "/brand-gallery/087-details-img-1246.jpg",
      "/brand-gallery/089-details-img-1240.jpg",
    ],
    path: "/collections/furniture",
  },
];

const detailImages = [
  "/brand-gallery/077-details-img-1497.jpg",
  "/brand-gallery/078-details-img-1664.jpg",
  "/brand-gallery/079-details-img-1573.jpg",
  "/brand-gallery/082-details-img-1539.jpg",
  "/brand-gallery/084-details-img-1540.jpg",
  "/brand-gallery/086-details-img-1236.jpg",
  "/brand-gallery/088-details-img-1249.jpg",
  "/brand-gallery/090-details-img-1224.jpg",
];

export default function Craftsmanship() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] bg-[#0f0e0c] overflow-hidden">
        <img
          src="/brand-gallery/100-heritage-img-2392.jpg"
          alt=""
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-[#737373] text-[11px] font-bold tracking-[0.20em] uppercase">
              Craftsmanship
            </span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-4">
              工艺匠心
            </h1>
            <p className="text-white/55 text-[15px] max-w-[560px] mx-auto leading-relaxed">
              工具在变，但对石头的敬畏不变。从矿山到空间，每一步都被认真对待。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <span className="text-[#737373] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
          Philosophy
        </span>
        <h2 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.03em] mb-5">
          石头不会说谎，手艺人也不应该
        </h2>
        <p className="text-[var(--muted)] text-[15px] leading-[1.9] max-w-[680px] mx-auto">
          在南安水头，石材行业有一条不成文的规矩——"刀下有分寸"。意思是说，每一刀切下去的位置、角度、深度，都决定了一块石材最终能释放多少美，也暴露了一个手艺人的道行深浅。康利德的工匠团队中，有做了半辈子大理石的老师傅，也有数控编程比年轻人还熟练的老厂长。设备更新得很快，但经验是无法被替代的。在精确到毫米的机械语言与依靠直觉的天然材料之间，我们说一种共同的语言：对"做好"的执念。
        </p>
      </section>

      {/* Heritage Gallery */}
      <section className="bg-[var(--panel)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#737373] text-[11px] font-bold tracking-[0.18em] uppercase">
              匠艺传承
            </span>
            <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.03em] mt-2">
              从荒料到精品
            </h2>
            <p className="text-[var(--muted)] text-[14px] mt-3 max-w-[500px] mx-auto leading-relaxed">
              十四张图，十四道工序。不是流程展示，是一块石头走向它最终形态的路径。
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {heritageImgs.map((src, i) => (
              <div key={i} className="overflow-hidden img-hover">
                <img
                  src={src}
                  alt={`传承 ${i + 1}`}
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Craft Fields */}
      {craftFields.map((field, idx) => (
        <section
          key={field.title}
          className={`py-20 px-6 max-w-[1280px] mx-auto ${
            idx % 2 === 1 ? "bg-[var(--panel)] max-w-none" : ""
          }`}
        >
          <div className={idx % 2 === 1 ? "max-w-[1280px] mx-auto" : ""}>
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <span className="text-[#737373] text-[11px] font-bold tracking-[0.18em] uppercase">
                  {field.sub}
                </span>
                <h3 className="text-[var(--ink)] text-[1.35rem] font-black tracking-[0.03em] mt-2 mb-4">
                  {field.title}
                </h3>
                <p className="text-[var(--muted)] text-[14px] leading-[1.9] mb-6">
                  {field.desc}
                </p>
                <Link
                  to={field.path}
                  className="inline-block text-[var(--gold)] text-[12px] font-bold tracking-[0.08em] border-b border-[#737373]/40 pb-1 hover:text-[var(--ink)] transition-colors"
                >
                  了解详情 →
                </Link>
              </div>
              <div
                className={`grid grid-cols-3 gap-2 ${
                  idx % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                {field.images.map((src, j) => (
                  <div key={j} className="overflow-hidden img-hover">
                    <img
                      src={src}
                      alt=""
                      className="w-full aspect-[3/4] object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Detail Gallery */}
      <section className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#737373] text-[11px] font-bold tracking-[0.18em] uppercase">
            工艺细节
          </span>
          <h2 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.03em] mt-2">
            毫米级的讲究
          </h2>
          <p className="text-[var(--muted)] text-[14px] mt-3 max-w-[500px] mx-auto leading-relaxed">
            真正的品质不在于远处看得到的光洁，而在于俯身靠近时经得起推敲的细节。
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {detailImages.map((src, i) => (
            <div key={i} className="overflow-hidden img-hover">
              <img
                src={src}
                alt={`细节 ${i + 1}`}
                className="w-full aspect-[1/1] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--ink)] py-16 px-6 text-center">
        <h2 className="text-white text-[1.4rem] font-black tracking-[0.02em] mb-3">
          好的工艺不需要解释
        </h2>
        <p className="text-white/45 text-[14px] mb-8 max-w-[460px] mx-auto leading-relaxed">
          但如果您想亲眼看看，我们随时欢迎您到水头的工厂来。
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-3.5 bg-[#737373] text-[#111] text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#a3a3a3] transition-colors"
        >
          预约参观
        </Link>
      </section>
    </div>
  );
}
