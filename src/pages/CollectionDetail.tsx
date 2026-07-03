import { useParams, Link } from "react-router-dom";

const collectionData: Record<string, {
  title: string;
  subtitle: string;
  heroImg: string;
  intro: string[];
  features: { title: string; desc: string; img: string }[];
  gallery: string[];
  specs: { label: string; value: string }[];
}> = {
  marble: {
    title: "天然大理石",
    subtitle: "Natural Marble · 来自地球深处的礼物",
    heroImg: "/brand-gallery/028-materials-img-2082.jpg",
    intro: [
      "如果你把一块大理石切成薄片，对着光看——你会发现它几乎是半透明的。这种半透明不是物理上的，而是时间上的。那里面封存着二叠纪的海水、白垩纪的贝壳碎片、以及数亿年地质运动的全部记忆。",
      "康利德的大理石矿源遍布全球——从意大利卡拉拉的纯白到希腊萨索斯的雪花结晶，从土耳其安纳托利亚的温润洞石到巴西的深邃亚马逊绿。我们不做中间商，直接与矿场合作，确保每一块板材都从源头可追溯。",
    ],
    features: [
      { title: "全球矿源直采", desc: "意大利、希腊、土耳其、巴西、伊朗——我们直接与各地石材矿山建立合作关系，从源头把控品质与价格。", img: "/brand-gallery/040-materials-img-1924.jpg" },
      { title: "红外线切割", desc: "采用意大利进口红外线桥切机，精确控制每一刀的厚度与角度，确保板材尺寸零误差。", img: "/brand-gallery/084-details-img-1540.jpg" },
      { title: "六面防护处理", desc: "每一片出厂的大理石板材都经过六面防水防污处理，保证运输与安装过程中的石材完好。", img: "/brand-gallery/082-details-img-1539.jpg" },
    ],
    gallery: [
      "/brand-gallery/046-materials-img-2038.jpg",
      "/brand-gallery/047-materials-img-2030.jpg",
      "/brand-gallery/048-materials-img-2063.jpg",
      "/brand-gallery/049-materials-img-2069.jpg",
      "/brand-gallery/050-materials-img-2460.jpg",
      "/brand-gallery/051-materials-img-1923.jpg",
      "/brand-gallery/052-materials-img-1931.jpg",
      "/brand-gallery/053-materials-img-2028.jpg",
      "/brand-gallery/054-materials-img-2007.jpg",
      "/brand-gallery/055-materials-img-2035.jpg",
      "/brand-gallery/056-materials-img-1857.jpg",
      "/brand-gallery/037-materials-img-1957.jpg",
    ],
    specs: [
      { label: "厚度", value: "1.6cm / 1.8cm / 2.0cm（可定制）" },
      { label: "表面处理", value: "抛光 / 亚光 / 荔枝面 / 火烧面" },
      { label: "板面尺寸", value: "最大 320×180cm" },
      { label: "最低起订量", value: "50㎡" },
      { label: "交货周期", value: "15-25个工作日" },
      { label: "包装方式", value: "木箱加固，A级防护" },
    ],
  },
  mosaic: {
    title: "水刀拼花",
    subtitle: "Waterjet Mosaic · 以水为刀，以石为纸",
    heroImg: "/brand-gallery/105-patterns-img-1859.jpg",
    intro: [
      "水刀切割的水流速度是每秒600米——大约是音速的两倍。当这股高压水流穿过天然石材，它会精确地按照CAD图纸切割出每一个弧度、每一片花瓣、每一道几何边界。这不是简单的切割，这是一场在石头上进行的精密刺绣。",
      "我们的水刀拼花团队从图纸设计开始，到选石配色，再到切割拼装，全程手工参与。每一幅拼花，都像一幅在地板上展开的石头壁画——不同颜色、不同纹理的石材被巧妙拼接，形成令人惊叹的视觉效果。",
    ],
    features: [
      { title: "五轴数控水刀", desc: "4台五轴联动水刀切割机，精度可达±0.1mm。支持任意复杂的CAD图纸路径。", img: "/brand-gallery/083-details-img-1566.jpg" },
      { title: "石种配色库", desc: "常年备有60+种天然石材颜色样品，从纯白到墨黑，覆盖大理石、花岗岩、石英石全色域。", img: "/ai-replacements/slab-showroom-close.jpg" },
      { title: "手工拼装研磨", desc: "切割完成后由经验工匠逐片拼装、研磨、抛光，确保每一处接缝平整如一。", img: "/brand-gallery/080-details-img-1663.jpg" },
    ],
    gallery: [
      "/brand-gallery/001-spaces-img-1428.jpg",
      "/brand-gallery/002-spaces-img-1410.jpg",
      "/brand-gallery/003-spaces-img-1397.jpg",
      "/brand-gallery/004-spaces-img-1404.jpg",
      "/brand-gallery/005-spaces-img-1369.jpg",
      "/brand-gallery/008-spaces-img-1200.jpg",
      "/brand-gallery/009-spaces-img-1259.jpg",
      "/brand-gallery/010-spaces-img-1256.jpg",
      "/brand-gallery/011-spaces-img-1201.jpg",
      "/brand-gallery/012-spaces-img-2531.jpg",
      "/brand-gallery/106-patterns-img-1860.jpg",
      "/brand-gallery/107-patterns-img-1858.jpg",
    ],
    specs: [
      { label: "切割精度", value: "±0.1mm" },
      { label: "适用厚度", value: "1.6cm / 1.8cm" },
      { label: "图案定制", value: "支持CAD文件定制" },
      { label: "最低起订量", value: "1幅（不限尺寸）" },
      { label: "交货周期", value: "20-35个工作日" },
      { label: "包装方式", value: "编号拼图式木箱封装" },
    ],
  },
  furniture: {
    title: "石材家具摆件",
    subtitle: "Stone Furniture · 触手可及的地质记忆",
    heroImg: "/brand-gallery/041-materials-img-1828.jpg",
    intro: [
      "一张大理石茶几是什么？它是意大利某个山丘上的石头，在地下沉睡了上亿年，然后被开采、切割、打磨，最后放在你的客厅里。每一次触摸，你都在触碰一段地质纪元的结晶体。",
      "康利德的石材家具系列涵盖了茶几、边桌、托盘、花瓶、书挡、烛台等品类。我们将天然纹理的美感与简约现代的设计语言结合，让石材不只是建材，更是日常生活中的艺术品。",
    ],
    features: [
      { title: "设计定制", desc: "支持来图来样定制，也提供自有设计款式。从极简到新中式，多种风格可选。", img: "/brand-gallery/086-details-img-1236.jpg" },
      { title: "精密打磨", desc: "五道打磨工序，从粗砂到超细砂，最终呈现瓷器般温润的触感，却保留石材天然的视觉力量。", img: "/brand-gallery/087-details-img-1246.jpg" },
      { title: "国际物流", desc: "使用高密度泡沫+定制木箱包装，支持海运/空运/DHL小件速递，灵活满足全球客户。", img: "/ai-replacements/export-packing.jpg" },
    ],
    gallery: [
      "/brand-gallery/043-materials-img-2093.jpg",
      "/brand-gallery/088-details-img-1249.jpg",
      "/brand-gallery/089-details-img-1240.jpg",
      "/brand-gallery/090-details-img-1224.jpg",
      "/brand-gallery/013-spaces-img-1398.jpg",
      "/brand-gallery/014-spaces-img-2524.jpg",
      "/brand-gallery/015-spaces-img-1456.jpg",
      "/brand-gallery/017-spaces-img-1450.jpg",
      "/brand-gallery/019-spaces-img-1409.jpg",
      "/brand-gallery/020-spaces-img-1202.jpg",
      "/brand-gallery/021-spaces-img-1260.jpg",
      "/brand-gallery/022-spaces-img-1430.jpg",
    ],
    specs: [
      { label: "适用石种", value: "大理石 / 花岗岩 / 洞石" },
      { label: "表面处理", value: "抛光 / 哑光 / 水洗皮纹" },
      { label: "尺寸定制", value: "支持来图定制" },
      { label: "最低起订量", value: "1件起订" },
      { label: "交货周期", value: "15-20个工作日" },
      { label: "包装方式", value: "独立木箱，气垫保护" },
    ],
  },
  countertop: {
    title: "石材台面定制",
    subtitle: "Custom Countertops · 让厨房成为地质博物馆",
    heroImg: "/brand-gallery/036-materials-img-2109.jpg",
    intro: [
      "厨房台面也许是你在家里接触最多的石材表面。每天早晨你把手放在上面，也许你从未想过——你触摸的是一块已经存在了数亿年的石头。我们觉得，这件事情本身就值得认真对待。",
      "康利德的台面定制服务覆盖厨柜台面、卫浴台盆、吧台面板、窗台板等。我们从选石开始全程参与，为您推荐最适合厨房湿区/干区使用的石材品种，并提供终身保养建议。",
    ],
    features: [
      { title: "精准测量", desc: "专业测量团队上门或根据图纸进行精确计算，包含水槽、灶具开孔及特殊边型加工。", img: "/brand-gallery/071-inspection-img-1921.jpg" },
      { title: "背切加固", desc: "台面背面使用高强度石材加固网+背切工艺，确保运输及安装过程中的抗压、抗折强度。", img: "/brand-gallery/072-inspection-img-1922.jpg" },
      { title: "无缝安装", desc: "台面接缝处使用进口石材专用胶填充打磨，实现肉眼几乎不可见的无缝拼接效果。", img: "/brand-gallery/073-inspection-img-2091.jpg" },
    ],
    gallery: [
      "/brand-gallery/038-materials-img-1985.jpg",
      "/brand-gallery/039-materials-img-2049.jpg",
      "/brand-gallery/045-materials-img-2050.jpg",
      "/brand-gallery/007-spaces-img-1429.jpg",
      "/brand-gallery/008-spaces-img-1200.jpg",
      "/brand-gallery/010-spaces-img-1256.jpg",
      "/brand-gallery/023-spaces-img-1217.jpg",
      "/brand-gallery/024-spaces-img-1258.jpg",
      "/brand-gallery/025-spaces-img-1199.jpg",
      "/brand-gallery/026-spaces-img-1283.jpg",
      "/brand-gallery/082-details-img-1539.jpg",
      "/brand-gallery/086-details-img-1236.jpg",
    ],
    specs: [
      { label: "台面厚度", value: "1.8cm / 2.0cm / 3.0cm" },
      { label: "边型选择", value: "直角 / 鸭嘴边 / 法式弧边 / 台唇" },
      { label: "适用空间", value: "厨房 / 卫浴 / 吧台 / 窗台" },
      { label: "最低起订量", value: "1组台面" },
      { label: "交货周期", value: "10-18个工作日" },
      { label: "安装服务", value: "国内城市可提供安装" },
    ],
  },
};

export default function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? collectionData[slug] : null;

  if (!data) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black text-[var(--ink)] mb-4">未找到该系列</h1>
          <Link to="/collections" className="text-[#111111] font-bold tracking-[0.06em]">← 返回石材系列</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] bg-[#e5e5e5] overflow-hidden">
        <img src={data.heroImg} alt="" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">{data.subtitle}</span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-3">
              {data.title}
            </h1>
            <Link to="/collections" className="inline-block text-white/50 text-[12px] tracking-[0.08em] hover:text-[#34c759] transition-colors mt-2">
              ← 返回石材系列
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[920px] mx-auto px-6 py-20">
        <div className="space-y-6">
          {data.intro.map((p, i) => (
            <p key={i} className="text-[var(--muted)] text-[16px] leading-[1.9]">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-[var(--panel)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">Process</span>
            <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.03em] mt-2">生产工艺</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.features.map((f) => (
              <div key={f.title} className="text-center group">
                <div className="overflow-hidden mb-5 img-hover">
                  <img src={f.img} alt="" className="w-full aspect-[4/3] object-cover" />
                </div>
                <h3 className="text-[var(--ink)] text-[15px] font-bold tracking-[0.04em] mb-2">{f.title}</h3>
                <p className="text-[var(--muted)] text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">Gallery</span>
          <h2 className="text-[var(--ink)] text-[1.5rem] font-black tracking-[0.03em] mt-2">产品图集</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.gallery.map((src, i) => (
            <div key={i} className="overflow-hidden img-hover cursor-pointer">
              <img src={src} alt="" className="w-full aspect-[4/3] object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Specs Table */}
      <section className="bg-[#f8f8f8] py-20 px-6 border-t border-black/8">
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase">Specifications</span>
            <h2 className="text-[#111111] text-[1.5rem] font-black tracking-[0.03em] mt-2">规格参数</h2>
          </div>
          <div className="bg-white border border-black/8">
            {data.specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center justify-between px-8 py-5 ${
                  i < data.specs.length - 1 ? "border-b border-black/5" : ""
                }`}
              >
                <span className="text-[#111111]/50 text-[13px] font-medium tracking-[0.04em]">{s.label}</span>
                <span className="text-[#111111]/85 text-[13px] font-semibold text-right max-w-[60%]">{s.value}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-block px-10 py-3.5 bg-[#34c759] text-white text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#34c759]/80 transition-colors"
            >
              咨询该系列
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
