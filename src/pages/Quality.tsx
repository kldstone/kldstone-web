import { Link } from "react-router-dom";
import { optimizedImage } from "@/lib/images";

const inspectionImgs = [
  "/brand-gallery/071-inspection-img-1921.jpg",
  "/brand-gallery/072-inspection-img-1922.jpg",
  "/brand-gallery/073-inspection-img-2091.jpg",
  "/brand-gallery/074-inspection-img-2156.jpg",
  "/brand-gallery/075-inspection-img-2502.jpg",
  "/brand-gallery/076-inspection-img-2504.jpg",
];

const deliveryImgs = [
  "/brand-gallery/057-delivery-img-1901.jpg",
  "/brand-gallery/058-delivery-img-1890.jpg",
  "/brand-gallery/059-delivery-img-2119.jpg",
  "/brand-gallery/060-delivery-img-1889.jpg",
  "/brand-gallery/061-delivery-img-1898.jpg",
  "/brand-gallery/062-delivery-img-2122.jpg",
  "/brand-gallery/063-delivery-img-1878.jpg",
  "/brand-gallery/064-delivery-img-2124.jpg",
  "/brand-gallery/065-delivery-img-2125.jpg",
  "/brand-gallery/066-delivery-img-2120.jpg",
  "/brand-gallery/067-delivery-img-2126.jpg",
  "/brand-gallery/068-delivery-img-2123.jpg",
  "/brand-gallery/069-delivery-img-1877.jpg",
  "/brand-gallery/070-delivery-img-2116.jpg",
];

const qualityChecks = [
  {
    title: "色差管控",
    desc: "天然石材的色差是无法消除的——它是石材的身份证。我们要做的不是制造千篇一律的石板，而是在同一批次中控制色差范围，确保大面积铺贴后的视觉效果符合预期。每一批出厂的板材都附有色号卡，记录其在该批次中的色差区间。",
  },
  {
    title: "厚度与平整度",
    desc: "标准板材的厚度公差控制在 ±1mm 以内。我们使用激光平整度检测仪逐片测量，对超出标准的板材进行二次校准或标记降级。在台面等对平整度要求极高的产品上，我们采用 CNC 定厚和人工手感双重确认——仪器检测数值，手掌感知质感。",
  },
  {
    title: "六面检查",
    desc: "这大概是石材行业里最笨但也最有效的方法了——拿起一片板材，把六个面全部看一遍。正面看纹理和光泽，背面看是否有暗裂，四边看切割整齐度和倒角均匀度。机器不能替代肉眼，尤其是在判断石材天然缺陷时——比如一条隐藏在纹理中的细微裂缝，只有有经验的眼睛才能捕捉到。",
  },
  {
    title: "防护处理",
    desc: "所有出厂的大理石板材都经过六面渗透型防护处理。防护剂深入石材毛细孔，在不堵塞呼吸性的前提下，提供抗污、抗水渗透的保护层。对于台面等高频使用场景的产品，我们使用增强型防护方案并附使用维护指南。",
  },
];

const packagingSteps = [
  {
    title: "木箱加固",
    desc: "每一件订单都根据产品尺寸定制木箱。内衬 EPE 珍珠棉，板材之间用瓦楞纸板隔开，箱体外加钢带打包。我们按照海运集装箱的堆码标准来设计包装——因为我们的产品确实要漂洋过海。",
    img: "/brand-gallery/057-delivery-img-1901.jpg",
  },
  {
    title: "防潮处理",
    desc: "木箱内部放置干燥剂，箱体外覆防水膜。对于高价值拼花作品，增加真空包装层。南方的回南天、海上的盐雾、目的港的温差——这些因素都在我们的包装方案中被考虑到了。",
    img: "/brand-gallery/058-delivery-img-1890.jpg",
  },
  {
    title: "物流追踪",
    desc: "从水头港到厦门港，再到全球各大主要港口——我们的物流团队提供从装柜到目的港的全程追踪。每批货物都有独立的箱单、唛头和保险文件。发货当日，您会收到装箱照片和清单确认邮件。",
    img: "/brand-gallery/063-delivery-img-1878.jpg",
  },
];

export default function Quality() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] bg-[#e5e5e5] overflow-hidden">
        <img
          src={optimizedImage("/brand-gallery/076-inspection-img-2504.jpg")}
          alt=""
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.20em] uppercase">
              Quality Assurance
            </span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-4">
              品质保障
            </h1>
            <p className="text-white/55 text-[15px] max-w-[560px] mx-auto leading-relaxed">
              标准不是写在墙上给人看的。它写在每一块出厂石材的背面。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
          Our Standard
        </span>
        <h2 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.03em] mb-5">
          品质就是在没有人看的时候，依然把事做对
        </h2>
        <p className="text-[var(--muted)] text-[15px] leading-[1.9] max-w-[680px] mx-auto">
          当一块板材被安装在客户家里的时候，没有人知道它在出厂前经历了什么——没有人看到它被放在检测台上测量厚度偏差的那个下午，没有人知道它因为色差超标被从 50 片里单独挑出来返工的那一次。但我们会知道。品质的底线不是客户会不会发现，而是我们自己能不能过得去。
        </p>
      </section>

      {/* Quality Control */}
      <section className="bg-[var(--panel)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">
              品质管控
            </span>
            <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.03em] mt-2">
              每一片都值得被认真对待
            </h2>
          </div>

          {/* Inspection Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-16">
            {inspectionImgs.map((src, i) => (
              <div key={i} className="overflow-hidden img-hover">
                <img
                  src={optimizedImage(src)}
                  alt={`质检 ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy" decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Quality Check Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityChecks.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--bg)] border border-[var(--line)] p-8 hover:border-[#34c759]/20/30 transition-colors"
              >
                <h3 className="text-[var(--ink)] text-[16px] font-bold tracking-[0.04em] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] text-[13px] leading-[1.8]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Delivery */}
      <section className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">
            物流与交付
          </span>
          <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.03em] mt-2">
            石头的旅程还未结束
          </h2>
          <p className="text-[var(--muted)] text-[14px] mt-3 max-w-[500px] mx-auto leading-relaxed">
            我们对待包装的认真程度，不亚于对待石材本身。
          </p>
        </div>

        {packagingSteps.map((step, i) => (
          <div
            key={step.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
              i !== packagingSteps.length - 1 ? "mb-16 pb-16 border-b border-[var(--line)]" : ""
            } ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
          >
            <div className={`overflow-hidden ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
              <img
                src={optimizedImage(step.img)}
                alt={step.title}
                className="w-full aspect-[4/3] object-cover img-hover"
                loading="lazy" decoding="async"
              />
            </div>
            <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
              <span className="text-[#111111] text-[11px] font-bold tracking-[0.12em] opacity-60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[var(--ink)] text-[1.25rem] font-black tracking-[0.03em] mt-2 mb-4">
                {step.title}
              </h3>
              <p className="text-[var(--muted)] text-[14px] leading-[1.9]">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Full Delivery Gallery */}
      <section className="bg-[var(--panel)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">
              包装现场
            </span>
            <h2 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.03em] mt-2">
              每一件包裹背后都有一个人在认真打包
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {deliveryImgs.map((src, i) => (
              <div key={i} className="overflow-hidden img-hover">
                <img
                  src={optimizedImage(src)}
                  alt={`包装 ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy" decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f8f8] py-16 px-6 text-center border-t border-black/8">
        <h2 className="text-[#111111] text-[1.4rem] font-black tracking-[0.02em] mb-3">
          可靠的品质来自可靠的流程
        </h2>
        <p className="text-[#111111]/45 text-[14px] mb-8 max-w-[460px] mx-auto leading-relaxed">
          如果您有具体的品质标准或检测要求，我们很乐意按您的规范执行。
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-3.5 bg-[#34c759] text-white text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#34c759]/80 transition-colors"
        >
          沟通品质需求
        </Link>
      </section>
    </div>
  );
}
