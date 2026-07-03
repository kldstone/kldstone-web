import { Link } from "react-router-dom";

const serviceSteps = [
  {
    num: "01",
    title: "需求沟通",
    desc: "无论您带着一张草图、一个 mood board，还是仅仅一个想法而来——我们的设计顾问会先理解您的空间语境、使用场景与预算范围。这不是一张表格，而是一场对话。",
    img: "/brand-gallery/077-details-img-1497.jpg",
  },
  {
    num: "02",
    title: "石种甄选",
    desc: "我们带您走进原料库，亲手触摸来自意大利、土耳其、希腊、巴西等产区的荒料。每一块石材的颜色、纹理、硬度、透光性，都会在您的指尖被感知——图片永远无法替代这种体验。",
    img: "/brand-gallery/028-materials-img-2082.jpg",
  },
  {
    num: "03",
    title: "深化设计",
    desc: "我们的设计师将您的想法转化为可执行的加工图纸。水刀拼花路径规划、异形切割放样、纹理拼接方案——每一毫米都被精确计算。这不是画图，而是将自然石材的随机性纳入可控的路径。",
    img: "/brand-gallery/106-patterns-img-1860.jpg",
  },
  {
    num: "04",
    title: "精工制造",
    desc: "进入车间，石材开始回应刀具。红外线切割、数控水刀、CNC 异形加工——现代设备的精度与工匠的手感在这里汇合。每一道工序结束，都是一次质检的起点。",
    img: "/brand-gallery/079-details-img-1573.jpg",
  },
  {
    num: "05",
    title: "预装验收",
    desc: "成品在出厂前按照最终使用场景进行预拼装。色差是否在可控范围？接缝是否达到设计要求？我们在自己的车间里模拟您的空间，确保「所见即所得」不只是一句广告语。",
    img: "/brand-gallery/075-inspection-img-2502.jpg",
  },
  {
    num: "06",
    title: "包装交付",
    desc: "每一片石材都获得专属的木箱加固、防潮处理与运输保险。从水头港出发，经厦门、深圳等主要港口，我们的物流团队会追踪到您签收的那一刻。石头的旅程到此结束，但美的旅程才刚刚开始。",
    img: "/brand-gallery/069-delivery-img-1877.jpg",
  },
];

const serviceTypes = [
  {
    title: "私宅定制",
    desc: "别墅、大平层、庭院——我们理解私宅对个性化的极致追求。从玄关大理石拼花到主卫整面石材墙面，每一块石材的色号、纹理方向、收边方式都由您决定。",
    icon: "🏠",
  },
  {
    title: "商业空间",
    desc: "酒店大堂、品牌旗舰店、高级餐厅——商业空间对石材的要求从来不只是好看，还有耐磨度、防滑等级、大面积铺贴的色差容忍度。我们同时具备设计审美与工程落地经验。",
    icon: "🏢",
  },
  {
    title: "设计师合作",
    desc: "我们长期与国内外室内设计师、建筑事务所保持协作。提供从概念阶段介入的支持，包括石种建议、大板选样、加工可行性分析。设计师说「我想要这种感觉」，我们的工作是把这种感觉变成石头。",
    icon: "✏️",
  },
  {
    title: "工程项目",
    desc: "批量供应、节点配合、现场技术支持。我们服务过多个大型建筑项目，对工期管理、批次色差控制、安装指导有成熟的标准。工程品质的底线，从来不以数量为借口。",
    icon: "🏗️",
  },
];

const processImages = [
  "/brand-gallery/078-details-img-1664.jpg",
  "/brand-gallery/079-details-img-1573.jpg",
  "/brand-gallery/082-details-img-1539.jpg",
  "/brand-gallery/083-details-img-1566.jpg",
  "/brand-gallery/086-details-img-1236.jpg",
  "/brand-gallery/087-details-img-1246.jpg",
];

export default function CustomService() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] bg-[#e5e5e5] overflow-hidden">
        <img
          src="/ai-replacements/hotel-reception.jpg"
          alt=""
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.20em] uppercase">
              Bespoke Service
            </span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-4">
              定制服务
            </h1>
            <p className="text-white/55 text-[15px] max-w-[560px] mx-auto leading-relaxed">
              从一块荒料到您空间中的点睛之笔——这不是流水线，而是一对一的全程陪伴。
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
          How We Work
        </span>
        <h2 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.03em] mb-5">
          每一块石头都有一个故事，每一个项目都有一份方案
        </h2>
        <p className="text-[var(--muted)] text-[15px] leading-[1.8] max-w-[680px] mx-auto">
          天然石材不是标准件。同一座矿山、同一个开采面出来的两块相邻石板，都可能拥有完全不同的纹路和色彩表现。正因如此，我们的定制服务不是"为您选一块石头"，而是"和您一起找到属于您的那一块"。从沟通到交付，六个环节环环相扣——这不是流程，这是我们交付信心的方式。
        </p>
      </section>

      {/* Process Steps */}
      <section className="bg-[var(--panel)] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="space-y-24">
            {serviceSteps.map((step, i) => (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <span className="text-[#111111] text-[13px] font-bold tracking-[0.12em] opacity-50">
                    {step.num}
                  </span>
                  <h3 className="text-[var(--ink)] text-[1.3rem] font-black tracking-[0.03em] mt-2 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted)] text-[14px] leading-[1.9]">
                    {step.desc}
                  </p>
                </div>
                <div className={`overflow-hidden ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full aspect-[4/3] object-cover img-hover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Gallery */}
      <section className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">
            The Workshop
          </span>
          <h2 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.03em] mt-2">
            车间里的日常
          </h2>
          <p className="text-[var(--muted)] text-[14px] mt-3 max-w-[500px] mx-auto leading-relaxed">
            这些不是摆拍。每一张图背后都是一件正在交付的订单。
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {processImages.map((src, i) => (
            <div key={i} className="overflow-hidden img-hover">
              <img
                src={src}
                alt={`工序 ${i + 1}`}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Service Types */}
      <section className="bg-[var(--panel)] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">
              Who We Serve
            </span>
            <h2 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.03em] mt-2">
              服务对象
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceTypes.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--bg)] border border-[var(--line)] p-8 hover:border-[#34c759]/20/30 transition-colors"
              >
                <span className="text-2xl mb-4 block">{item.icon}</span>
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

      {/* CTA */}
      <section className="bg-[#f8f8f8] py-16 px-6 text-center border-t border-black/8">
        <h2 className="text-[#111111] text-[1.4rem] font-black tracking-[0.02em] mb-3">
          开始您的定制之旅
        </h2>
        <p className="text-[#111111]/45 text-[14px] mb-8 max-w-[460px] mx-auto leading-relaxed">
          描述您的项目，我们会在一到两个工作日内回复完整方案。
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-3.5 bg-[#34c759] text-white text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#34c759]/80 transition-colors"
        >
          提交需求
        </Link>
      </section>
    </div>
  );
}
