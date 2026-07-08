import { Link } from "react-router-dom";
import { optimizedImage } from "@/lib/images";

const steps = [
  {
    num: "01", title: "荒料选材",
    desc: "康利德直接从意大利、土耳其、希腊、巴西等全球顶级矿山采购荒料。每一块荒料进厂后编号入库，记录矿山来源、品种、批次和色号——这是石材质检的第一步，也是最重要的一步。",
    imgs: ["/brand-gallery/028-materials-img-2082.jpg"],
  },
  {
    num: "02", title: "大板切割",
    desc: "采用金刚石框架锯与砂锯双系统，将荒料切割为标准厚度的大板。自动磨机六面抛光，光泽度稳定在 90° 以上。每片大板出厂前经过编号归档，确保可追溯。",
    imgs: ["/brand-gallery/079-details-img-1573.jpg", "/brand-gallery/082-details-img-1539.jpg"],
  },
  {
    num: "03", title: "水刀拼花",
    desc: "高压水流携带磨料，以每秒 800 米的速度穿透石材，切割精度 ±0.1mm。双系统全程数控，十年以上经验工匠带队操作。图纸经反复确认后进入生产，出厂前 1:1 预拼验收。",
    imgs: ["/brand-gallery/106-patterns-img-1860.jpg"],
  },
  {
    num: "04", title: "CNC 异形加工",
    desc: "数控雕刻、异型线条、罗马柱、雕花柱头——从设计图纸到成品一站式交付。CNC 加工中心精准执行复杂造型，减少手工试错，确保每一个弧度、每一条线条都精准到位。",
    imgs: ["/brand-gallery/083-details-img-1566.jpg", "/brand-gallery/086-details-img-1236.jpg"],
  },
  {
    num: "05", title: "表面处理",
    desc: "根据设计需求提供抛光、哑光、火烧、酸洗、锤纹等多种表面处理方式。每道处理工序由专人检查，确保表面效果与客户确认的样品一致。",
    imgs: ["/brand-gallery/077-details-img-1497.jpg"],
  },
  {
    num: "06", title: "预拼验收",
    desc: "成品出厂前按最终使用场景进行 1:1 预拼装。色差是否在可控范围？接缝是否达到设计要求？我们在自己的车间里模拟您的项目空间，确保「所见即所得」不只是一句广告语。",
    imgs: ["/brand-gallery/075-inspection-img-2502.jpg", "/brand-gallery/071-inspection-img-1921.jpg"],
  },
  {
    num: "07", title: "品质质检",
    desc: "色差管控、厚度检测、六面检查、防护处理——品质不是在客户面前表演，而是在没人看的时候依然做对的事。每批出厂板材附有色号卡和检测报告。",
    imgs: ["/brand-gallery/076-inspection-img-2504.jpg", "/brand-gallery/074-inspection-img-2156.jpg"],
  },
  {
    num: "08", title: "包装加固",
    desc: "每一件订单都根据产品尺寸定制木箱。内衬 EPE 珍珠棉，板材之间用瓦楞纸板隔开，箱体外加钢带打包。木箱内部放置干燥剂，箱体外覆防水膜。高价值拼花增加真空包装层。",
    imgs: ["/brand-gallery/057-delivery-img-1901.jpg", "/brand-gallery/058-delivery-img-1890.jpg"],
  },
  {
    num: "09", title: "装柜发运",
    desc: "从水头港到厦门港，装柜过程拍照存档。每批货物都有独立的箱单、唛头和保险文件。发货当日，您会收到装箱照片和清单确认邮件。每一件包裹背后都有一个人在认真打包。",
    imgs: ["/brand-gallery/068-delivery-img-2123.jpg", "/brand-gallery/069-delivery-img-1877.jpg"],
  },
  {
    num: "10", title: "出口交付",
    desc: "经厦门、深圳等主要港口出海，我们的物流团队提供从装柜到目的港的全程追踪。石头的旅程到此结束，但您空间中的美才刚刚开始。",
    imgs: ["/brand-gallery/063-delivery-img-1878.jpg"],
  },
];

export default function Process() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] bg-[#0f0f0f] overflow-hidden">
        <img
          src={optimizedImage("/brand-gallery/craftsmanship-hero-2026-07-06.jpg")}
          alt="康利德石材制造流程"
          className="w-full h-full object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-white text-[11px] font-bold tracking-[0.20em] uppercase">10-Step Process</span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-4">
              从荒料到精品，十道工序
            </h1>
            <p className="text-white/55 text-[15px] max-w-[560px] mx-auto leading-relaxed">
              设备可以采购，经验无法复制。在精确到毫米的机械语言与依靠直觉的天然材料之间，我们说一种共同的语言。
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-[960px] mx-auto px-6 py-20">
        <div className="space-y-24">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative"
            >
              {/* Step number — left line */}
              <div className="flex items-start gap-8 lg:gap-12">
                <div className="hidden md:flex flex-col items-center shrink-0 pt-1">
                  <span className="text-[#34c759] text-[2.8rem] font-black tracking-[0.02em] leading-none">
                    {step.num}
                  </span>
                  <div className="w-[1px] flex-1 bg-[#34c759]/20 mt-4" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Mobile step num */}
                  <span className="md:hidden text-[#34c759] text-[1.4rem] font-black tracking-[0.02em] block mb-2">
                    {step.num}
                  </span>
                  <h2 className="text-[#111111] text-[1.4rem] font-black tracking-[0.03em] mb-4">
                    {step.title}
                  </h2>
                  <p className="text-[#111111]/60 text-[15px] leading-[1.9] mb-6">
                    {step.desc}
                  </p>

                  {/* Images */}
                  <div className={`grid gap-3 ${step.imgs.length > 1 ? "grid-cols-2" : "grid-cols-1 max-w-[560px]"}`}>
                    {step.imgs.map((src, j) => (
                      <div key={j} className="overflow-hidden img-hover">
                        <img
                          src={optimizedImage(src)}
                          alt={`${step.title} ${j + 1}`}
                          className="w-full aspect-[4/3] object-cover"
                          loading="lazy" decoding="async"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Spacer line */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden w-full h-[1px] bg-[#34c759]/20 mt-12" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f0f0f] py-20 px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-white text-[clamp(1.4rem,3vw,2rem)] font-black tracking-[0.03em] mb-3">
            想亲眼看看这些工艺？
          </h2>
          <p className="text-white/55 text-[15px] leading-[1.9] mb-8">
            从厦门高崎机场出发约 40 分钟车程，我们可安排工厂参观。百闻不如一见。
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-3.5 bg-[#34c759] text-white text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#34c759]/80 transition-colors"
          >
            预约参观
          </Link>
        </div>
      </section>
    </div>
  );
}
