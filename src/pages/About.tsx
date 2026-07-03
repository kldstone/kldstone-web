import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] bg-[#0f0e0c] overflow-hidden">
        <img src="/brand-gallery/094-heritage-img-1719.jpg" alt="" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-[#737373] text-[11px] font-bold tracking-[0.20em] uppercase">About KLD</span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-4">
              关于康利德
            </h1>
            <p className="text-white/55 text-[15px] max-w-[560px] mx-auto leading-relaxed">
              福建省南安康利德石材有限公司，扎根"中国石材之乡"南安水头，让天然石材走向世界。
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[900px] mx-auto px-6 py-20">
        <span className="text-[#737373] text-[11px] font-bold tracking-[0.18em] uppercase block text-center mb-5">
          Our Story
        </span>
        <h2 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.03em] text-center mb-10">
          在石粉染白的土地上长大
        </h2>
        <div className="space-y-6 text-[16px] leading-[1.9] text-[var(--muted)]">
          <p>
            南安水头——这个名字在中国石材行业就是一个商标级别的存在。从上世纪90年代起，这里聚集了全国最密集的石材加工产业集群。康利德的故事，就始于这片被石粉染白的土地上。
          </p>
          <p>
            我们不是一家"成立"的公司，而是一家在石材中"长大"的公司。创始人十几岁就开始触碰各种各样的石头，从最初的荒料贸易，到后来建立自己的加工车间——大理石切割机、水刀拼花线、异形加工中心，一步一步把对石头的理解转化为对客户的交付。
          </p>
          <p>
            如今，康利德的客户遍布全球——从迪拜的酒店大堂到新加坡的私人住宅，从欧洲的设计师工作室到北美的建筑承包商。石材跨越了国界，而我们对品质的坚持从未跨越任何一道底线。
          </p>
        </div>
      </section>

      {/* Navigate to sub-pages */}
      <section className="bg-[var(--panel)] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#737373] text-[11px] font-bold tracking-[0.18em] uppercase">
              深入了解
            </span>
            <h2 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.03em] mt-2">
              康利德的三个维度
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Craftsmanship */}
            <Link
              to="/craftsmanship"
              className="group bg-[var(--bg)] border border-[var(--line)] p-8 hover:border-[#737373]/40 transition-colors"
            >
              <div className="mb-5 overflow-hidden">
                <img
                  src="/brand-gallery/091-heritage-img-2395.jpg"
                  alt="工艺匠心"
                  className="w-full aspect-[4/3] object-cover img-hover"
                />
              </div>
              <h3 className="text-[var(--ink)] text-[16px] font-bold tracking-[0.04em] mb-2">
                工艺匠心
              </h3>
              <p className="text-[var(--muted)] text-[13px] leading-[1.7] mb-4">
                从荒料到精品，十四道工序。大理石切割、水刀拼花、CNC异形加工——每一种工艺背后都是一个关于专注的故事。
              </p>
              <span className="text-[#737373] text-[11px] font-bold tracking-[0.08em] uppercase group-hover:tracking-[0.12em] transition-all">
                了解更多 →
              </span>
            </Link>

            {/* Quality */}
            <Link
              to="/quality"
              className="group bg-[var(--bg)] border border-[var(--line)] p-8 hover:border-[#737373]/40 transition-colors"
            >
              <div className="mb-5 overflow-hidden">
                <img
                  src="/brand-gallery/074-inspection-img-2156.jpg"
                  alt="品质保障"
                  className="w-full aspect-[4/3] object-cover img-hover"
                />
              </div>
              <h3 className="text-[var(--ink)] text-[16px] font-bold tracking-[0.04em] mb-2">
                品质保障
              </h3>
              <p className="text-[var(--muted)] text-[13px] leading-[1.7] mb-4">
                色差管控、厚度检测、六面检查、防护处理——品质不是在客户面前表演，而是在没人看的时候依然做对的事。
              </p>
              <span className="text-[#737373] text-[11px] font-bold tracking-[0.08em] uppercase group-hover:tracking-[0.12em] transition-all">
                了解更多 →
              </span>
            </Link>

            {/* Custom Service */}
            <Link
              to="/custom"
              className="group bg-[var(--bg)] border border-[var(--line)] p-8 hover:border-[#737373]/40 transition-colors"
            >
              <div className="mb-5 overflow-hidden">
                <img
                  src="/brand-gallery/108-exhibition-img-0916.jpg"
                  alt="定制服务"
                  className="w-full aspect-[4/3] object-cover img-hover"
                />
              </div>
              <h3 className="text-[var(--ink)] text-[16px] font-bold tracking-[0.04em] mb-2">
                定制服务
              </h3>
              <p className="text-[var(--muted)] text-[13px] leading-[1.7] mb-4">
                从需求沟通到包装交付，六步走完一块石材的定制之旅。每一个项目都值得一套专属方案。
              </p>
              <span className="text-[#737373] text-[11px] font-bold tracking-[0.08em] uppercase group-hover:tracking-[0.12em] transition-all">
                了解更多 →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Exhibition */}
      <section className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden img-hover">
            <img src="/brand-gallery/108-exhibition-img-0916.jpg" alt="展会" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div>
            <span className="text-[#737373] text-[11px] font-bold tracking-[0.18em] uppercase">Exhibition</span>
            <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.02em] mt-2 mb-5">国际展会参与</h2>
            <div className="space-y-4 text-[var(--muted)] text-[14px] leading-[1.8]">
              <p>
                我们常年参加厦门国际石材展、意大利维罗纳Marmomac石材展等全球顶级行业展会。这些平台不仅是我们展示新品的窗口，更是我们感知全球设计趋势、与各国客户面对面交流的契机。
              </p>
              <p>
                展览会上，我们带去的从来不只是"产品"，而是将一整块荒料变成空间美学的完整叙事。欢迎在下一次展会上与我们相遇。
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-6 text-[var(--gold)] text-[12px] font-bold tracking-[0.08em] border-b border-[#737373]/40 pb-1 hover:text-[var(--ink)] transition-colors"
            >
              预约展会见面 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--panel)] py-16 px-6 text-center">
        <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.02em] mb-3">
          想进一步了解康利德？
        </h2>
        <p className="text-[var(--muted)] text-[14px] mb-8 max-w-[460px] mx-auto leading-relaxed">
          无论您是设计师、建筑师还是零售商，我们都期待与您建立合作。
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-3.5 bg-[#737373] text-[#111] text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#a3a3a3] transition-colors"
        >
          联系我们
        </Link>
      </section>
    </div>
  );
}
