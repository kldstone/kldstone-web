import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    src: "/ai-replacements/lobby-medallion.jpg",
    title: "石之语",
    subtitle: "每一块大理石，都是地球用十亿年写给人类的信",
  },
  {
    src: "/ai-replacements/hotel-reception.jpg",
    title: "光的容器",
    subtitle: "当阳光穿过天然石材的脉络，空间便有了生命",
  },
  {
    src: "/ai-replacements/craft-detail.jpg",
    title: "永恒的质感",
    subtitle: "我们不做石材的搬运工，我们是自然的翻译者",
  },
];

const collections = [
  {
    slug: "marble",
    title: "天然大理石",
    subtitle: "来自地球深处的礼物",
    desc: "每一片大理石的纹理都是独一无二的地质档案，记录着亿万年的矿脉变迁。我们走遍意大利卡拉拉、希腊萨索斯、土耳其安纳托利亚，只为甄选那些与空间最契合的天然造物。",
    imgs: ["/brand-gallery/029-materials-img-2040.jpg", "/brand-gallery/030-materials-img-1919.jpg"],
  },
  {
    slug: "mosaic",
    title: "水刀拼花马赛克",
    subtitle: "精确到毫米的艺术",
    desc: "五轴水刀以每秒600米的水流速度，在天然石材上切割出精确到0.1毫米的弧线。这不是工业制造，这是一场发生在石头上的刺绣。",
    imgs: ["/brand-gallery/031-materials-img-1954.jpg", "/brand-gallery/035-materials-img-2108.jpg"],
  },
  {
    slug: "furniture",
    title: "石材家具摆件",
    subtitle: "触手可及的地质记忆",
    desc: "一张大理石茶几，可能就是三叠纪的某一处海底。我们相信，好的家具不只是功能性的存在，它是人与地球之间最日常的连接点。",
    imgs: ["/brand-gallery/041-materials-img-1828.jpg", "/brand-gallery/043-materials-img-2093.jpg"],
  },
  {
    slug: "countertop",
    title: "石材台面定制",
    subtitle: "让厨房成为地质博物馆",
    desc: "从选料到打磨，每一道工序都是一次与石材的对话。我们坚信，一个好的台面不止要好用，它应该让你每天早上触摸它的时候，想起某座山。",
    imgs: ["/brand-gallery/036-materials-img-2109.jpg", "/brand-gallery/039-materials-img-2049.jpg"],
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen max-h-[820px] min-h-[600px] bg-[#0f0e0c] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={s.src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45" />
          </div>
        ))}

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className={`transition-all duration-1000 ${slide === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} key={`t-${slide}`}>
            <h1 className="text-white text-[clamp(2rem,5.5vw,4.5rem)] font-black tracking-[0.04em] leading-[1.15] mb-5">
              {heroSlides[slide].title}
            </h1>
            <p className="text-white/70 text-[clamp(1rem,1.8vw,1.35rem)] font-light tracking-[0.06em] max-w-[620px] mx-auto leading-relaxed">
              {heroSlides[slide].subtitle}
            </p>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-10 flex gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-12 h-[2px] transition-all duration-500 ${
                  i === slide ? "bg-[#b8873d]" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-28 flex flex-col items-center gap-2 text-white/35 text-[11px] tracking-[0.12em] uppercase">
            <span>发现更多</span>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-bounce">
              <rect x="0.75" y="0.75" width="14.5" height="18.5" rx="7.25"/><circle cx="8" cy="6" r="1.5" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Brand Narrative */}
      <section className="py-28 px-6">
        <div className="max-w-[960px] mx-auto text-center">
          <span className="inline-block text-[#b8873d] text-[11px] font-bold tracking-[0.20em] uppercase mb-6">Since 2015 · Fujian Nan'an</span>
          <h2 className="text-[var(--ink)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-[0.02em] leading-[1.25] mb-8">
            我们相信，每一块石头，<br/>都有一段未被讲述的故事。
          </h2>
          <p className="text-[var(--muted)] text-[16px] leading-[1.9] max-w-[680px] mx-auto">
            在中国东南沿海的石都——福建南安水头镇，康利德与石材打交道已逾十年。我们不是简单的开采者与加工商。
            在我们看来，大理石是地质运动的化石，是地球内部的日记本。从意大利卡拉拉的白，到希腊萨索斯的雪花，
            从土耳其的洞石到巴西的亚马逊绿——我们在全球甄选最独特的天然石材，然后在中国最顶尖的工匠手中，
            将它们变成建筑空间中最动人的那个细节。
          </p>
        </div>
      </section>

      {/* Quote / Texture interlude */}
      <section className="relative h-[360px] overflow-hidden flex items-center justify-center">
        <img
          src="/brand-gallery/105-patterns-img-1859.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6">
          <p className="text-white/85 text-[clamp(1.1rem,2vw,1.5rem)] font-light italic tracking-[0.04em] leading-relaxed max-w-[700px]">
            "大自然没有两张相同的石材纹理,<br/>正如没有两段相同的人生。"
          </p>
        </div>
      </section>

      {/* Collections Overview */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto" id="collections">
        <div className="text-center mb-16">
          <span className="text-[#b8873d] text-[11px] font-bold tracking-[0.18em] uppercase">Our Collections</span>
          <h2 className="text-[var(--ink)] text-[clamp(1.5rem,2.8vw,2.2rem)] font-black tracking-[0.02em] mt-3">石材系列</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {collections.map((col) => (
            <Link
              key={col.slug}
              to={`/collections/${col.slug}`}
              className="group block"
            >
              <div className="grid grid-cols-2 gap-3 mb-6 img-hover overflow-hidden">
                <img src={col.imgs[0]} alt="" className="w-full aspect-[4/5] object-cover" />
                <img src={col.imgs[1]} alt="" className="w-full aspect-[4/5] object-cover mt-8" />
              </div>
              <span className="text-[#b8873d] text-[11px] font-bold tracking-[0.16em] uppercase">{col.subtitle}</span>
              <h3 className="text-[var(--ink)] text-[1.4rem] font-black tracking-[0.02em] mt-1 mb-3 group-hover:text-[#b8873d] transition-colors">
                {col.title}
              </h3>
              <p className="text-[var(--muted)] text-[14px] leading-relaxed max-w-[500px]">{col.desc}</p>
              <span className="inline-block mt-4 text-[var(--gold)] text-[12px] font-bold tracking-[0.08em] border-b border-[#b8873d]/40 pb-1">
                探索系列 →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/collections"
            className="inline-block px-10 py-3.5 bg-transparent border border-[var(--ink)] text-[var(--ink)] text-[12px] font-bold tracking-[0.10em] uppercase hover:bg-[var(--ink)] hover:text-white transition-all duration-300"
          >
            查看全部系列
          </Link>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="bg-[var(--panel)] py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 img-hover overflow-hidden">
                <img src="/brand-gallery/077-details-img-1497.jpg" alt="" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="img-hover overflow-hidden">
                <img src="/brand-gallery/078-details-img-1664.jpg" alt="" className="w-full aspect-[3/4] object-cover" />
              </div>
              <div className="img-hover overflow-hidden">
                <img src="/brand-gallery/079-details-img-1573.jpg" alt="" className="w-full aspect-[3/4] object-cover" />
              </div>
              <div className="col-span-2 img-hover overflow-hidden">
                <img src="/brand-gallery/080-details-img-1663.jpg" alt="" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-[#b8873d] text-[11px] font-bold tracking-[0.18em] uppercase">Handcrafted</span>
              <h2 className="text-[var(--ink)] text-[clamp(1.5rem,2.5vw,2rem)] font-black tracking-[0.02em] mt-3 mb-6 leading-tight">
                手工的温度，<br/>机器的精度
              </h2>
              <div className="space-y-5 text-[var(--muted)] text-[14px] leading-[1.85]">
                <p>
                  在南安水头的车间里，你会看到两种时间尺度同时存在。一种是水刀切割机上每秒600米的水流速度——你可以用它精确切割出0.1毫米的花瓣线条。另一种是老师傅用三十年的手感，在石材表面一点一点打磨出雾面、亚光、高光之间的微妙过渡。
                </p>
                <p>
                  我们从不在这两种时间尺度之间做选择。我们相信，真正了不起的石材作品，一定是机器的极端精确，加上人手的极端用心。
                </p>
              </div>
              <Link
                to="/about"
                className="inline-block mt-8 text-[var(--gold)] text-[12px] font-bold tracking-[0.08em] border-b border-[#b8873d]/40 pb-1 hover:text-[var(--ink)] transition-colors"
              >
                了解我们的工艺 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#b8873d] text-[11px] font-bold tracking-[0.18em] uppercase">Trust</span>
          <h2 className="text-[var(--ink)] text-[clamp(1.5rem,2.5vw,2rem)] font-black tracking-[0.02em] mt-3">
            我们的承诺
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="mb-6 overflow-hidden">
              <img src="/brand-gallery/071-inspection-img-1921.jpg" alt="" className="w-full aspect-[3/4] object-cover img-hover" />
            </div>
            <h3 className="text-[var(--ink)] text-[15px] font-bold tracking-[0.04em] mb-2">片片质检</h3>
            <p className="text-[var(--muted)] text-[13px] leading-relaxed">每一片出厂的石材都经过人工及仪器的双重检验，瑕疵绝不出厂。</p>
          </div>

          <div className="text-center group">
            <div className="mb-6 overflow-hidden">
              <img src="/brand-gallery/070-delivery-img-2116.jpg" alt="" className="w-full aspect-[3/4] object-cover img-hover" />
            </div>
            <h3 className="text-[var(--ink)] text-[15px] font-bold tracking-[0.04em] mb-2">专业包装</h3>
            <p className="text-[var(--muted)] text-[13px] leading-relaxed">木箱加固，防潮防撞。全球物流，确保石材安全无损抵达。</p>
          </div>

          <div className="text-center group">
            <div className="mb-6 overflow-hidden">
              <img src="/brand-gallery/058-delivery-img-1890.jpg" alt="" className="w-full aspect-[3/4] object-cover img-hover" />
            </div>
            <h3 className="text-[var(--ink)] text-[15px] font-bold tracking-[0.04em] mb-2">全球交付</h3>
            <p className="text-[var(--muted)] text-[13px] leading-relaxed">FOB/CIF灵活结算，集装箱整柜直达。合作港口覆盖全球主要城市。</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[420px] overflow-hidden flex items-center justify-center">
        <img
          src="/brand-gallery/018-spaces-img-2535.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white text-[clamp(1.5rem,2.8vw,2.3rem)] font-black tracking-[0.03em] mb-4">
            让石材成为空间的主角
          </h2>
          <p className="text-white/65 text-[15px] mb-8 max-w-[500px] mx-auto leading-relaxed">
            无论是一座别墅的大堂，还是一张厨房的台面——我们期待与您一起，让天然石材的美学价值在您的项目中落地。
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-3.5 bg-[#b8873d] text-[#111] text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-[#d4a64a] transition-colors"
          >
            开始合作
          </Link>
        </div>
      </section>
    </div>
  );
}
