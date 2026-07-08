import { useParams, Link } from "react-router-dom";
import { optimizedImage } from "@/lib/images";

type CaseItem = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  stoneUsed: string;
  area: string;
  challenge: string;
  solution: string;
  imgs: string[];
};

const cases: CaseItem[] = [
  {
    id: "hotel-lobby-1",
    title: "五星酒店大堂",
    subtitle: "Luxury Hotel Lobby",
    category: "酒店大堂",
    location: "中国 · 成都",
    year: "2025",
    stoneUsed: "天府蓝水晶大板 · 定制米白洞石",
    area: "约 800㎡",
    challenge: "酒店大堂空间高度达 12 米，地面和墙面均需要大面积铺贴。对石材的色差控制、纹理连续性和大面积无缝拼接要求极高。同时工期紧张，需要在 45 天内完成从选材到交付的全部流程。",
    solution: "我们采用同一矿口、同一批次的天府蓝水晶大板，提前进行预拼排版。通过 CNC 精确裁切每片板材的尺寸，确保接缝处纹理自然过渡。色差被控制在肉眼几乎不可察觉的范围内。最终提前 5 天完成交付，全部板材在工地一次安装成功，无返工。",
    imgs: ["/brand-gallery/spaces-lobby-01.jpg", "/brand-gallery/spaces-lobby-04.jpg", "/brand-gallery/spaces-lobby-05.jpg", "/brand-gallery/spaces-lobby-06.jpg", "/brand-gallery/spaces-lobby-07.jpg", "/brand-gallery/spaces-lobby-08.jpg"],
  },
  {
    id: "villa-1",
    title: "私人别墅",
    subtitle: "Private Villa Project",
    category: "别墅会所",
    location: "中国 · 杭州",
    year: "2025",
    stoneUsed: "世纪冰玉 · 意大利云灰 · 蓝色多瑙河",
    area: "约 350㎡",
    challenge: "业主对石材有极高的审美要求。客厅地面选用世纪冰玉，需要大板无拼接效果；主卫需要整面石材墙，对色彩一致性要求严苛；同时还有定制的玄关水刀拼花。三种不同的石材需要在视觉上和谐统一。",
    solution: "我们为每一种石材制作了多套排版方案供业主选择。世纪冰玉大板采用激光水准仪定位铺贴方向，确保纹理自然延续。水刀拼花在工厂预拼后整体拆解编号运输，现场按图组装。全程设计师驻场配合安装。",
    imgs: ["/brand-gallery/spaces-villa-01.jpg", "/brand-gallery/spaces-villa-02.jpg", "/brand-gallery/spaces-villa-03.jpg", "/brand-gallery/spaces-villa-04.jpg"],
  },
  {
    id: "commercial-1",
    title: "品牌旗舰店",
    subtitle: "Brand Flagship Store",
    category: "商业空间",
    location: "中国 · 深圳",
    year: "2024",
    stoneUsed: "劳伦斯金 · 蓝贝露 · 定制拼花",
    area: "约 200㎡",
    challenge: "该项目位于深圳高端商场，商场对施工时间有严格限制——只能在夜间 10 点至早上 7 点进行。同时石材需要与金属、玻璃等多种材料收口，对加工精度要求极高。",
    solution: "所有石材在工厂进行预拼装和预裁切，现场仅需安装。每个安装节点的收口位置都在工厂提前加工好倒角和拼接槽。夜间施工团队采用降噪措施，全程在限定时间内完成。",
    imgs: ["/brand-gallery/spaces-commercial-01.jpg", "/brand-gallery/spaces-commercial-02.jpg"],
  },
  {
    id: "residential-1",
    title: "高端住宅公寓",
    subtitle: "Luxury Residence",
    category: "住宅应用",
    location: "中国 · 上海",
    year: "2025",
    stoneUsed: "鱼肚灰 · 新鱼肚白 · 宝格丽",
    area: "约 120㎡",
    challenge: "精装房交付标准，需要在其他工种（木作、金属、软装）已经进场的条件下完成石材安装。现场环境复杂，成品保护难度大。台面石材需要与定制家具的尺寸高度匹配。",
    solution: "采用三维扫描技术对现场进行精确测绘，确保加工尺寸与现场偏差控制在 ±1mm 以内。安装顺序与其它工种交叉安排，每道工序完成后立即进行成品保护覆盖。最终安装一次通过验收。",
    imgs: ["/brand-gallery/spaces-residential-01.jpg", "/brand-gallery/spaces-residential-02.jpg", "/brand-gallery/spaces-residential-03.jpg"],
  },
  {
    id: "waterjet-custom-1",
    title: "酒店大堂水刀拼花",
    subtitle: "Custom Waterjet Medallion",
    category: "水刀拼花",
    location: "中国 · 苏州",
    year: "2025",
    stoneUsed: "白金沙 · 黑白根 · 定制色系",
    area: "直径 6 米圆形拼花",
    challenge: "酒店大堂中央需要一幅直径 6 米的圆形水刀拼花地面，图案包含超过 200 个独立切割片段。拼花需要与周围大理石地面无缝衔接，同时图案的对称性和色彩过渡必须精确到毫米级别。",
    solution: "我们的水刀拼花团队使用多色系石材（白金沙、黑白根等），通过 CAD 精确制图 + 高压水刀切割，所有 200+ 片段在工厂 1:1 预拼，确认后编号拆解、加固包装运输至现场安装。最终拼花误差控制在 ±0.5mm 以内。",
    imgs: ["/brand-gallery/106-patterns-img-1860.jpg", "/brand-gallery/gani-products/gani_140_白金沙拼花.webp", "/brand-gallery/gani-products/gani_138_白金沙线灰拼花.webp"],
  },
];

const casesByCategory: Record<string, CaseItem[]> = {};
cases.forEach((c) => {
  if (!casesByCategory[c.category]) casesByCategory[c.category] = [];
  casesByCategory[c.category].push(c);
});

export default function CaseDetail() {
  const { id } = useParams<{ id: string }>();
  const item = cases.find((c) => c.id === id);

  if (!item) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black text-[#111] mb-4">未找到该案例</h1>
          <Link to="/spaces" className="text-[#111] font-bold tracking-[0.06em]">← 返回空间案例</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] bg-[#0f0f0f] overflow-hidden">
        <img src={optimizedImage(item.imgs[0])} alt={item.title} className="w-full h-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-white/70 text-[11px] font-bold tracking-[0.18em] uppercase">{item.category}</span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-2">{item.title}</h1>
            <p className="text-white/60 text-[14px]">{item.subtitle}</p>
            <div className="mt-4 flex items-center justify-center gap-4 text-white/50 text-[12px]">
              <span>{item.location}</span>
              <span>·</span>
              <span>{item.year}</span>
              <span>·</span>
              <span>{item.area}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[900px] mx-auto px-6 py-16">
        {/* Stone Used */}
        <div className="bg-[#f8f8f8] p-6 mb-10">
          <span className="text-[#111111] text-[11px] font-bold tracking-[0.18em] uppercase block mb-1">所用石材</span>
          <p className="text-[#111111] text-[18px] font-semibold">{item.stoneUsed}</p>
        </div>

        {/* Challenge */}
        <h2 className="text-[#111111] text-[1.2rem] font-black tracking-[0.03em] mb-4">项目挑战</h2>
        <p className="text-[#111111]/60 text-[15px] leading-[1.9] mb-10">{item.challenge}</p>

        {/* Solution */}
        <h2 className="text-[#111111] text-[1.2rem] font-black tracking-[0.03em] mb-4">康利德方案</h2>
        <p className="text-[#111111]/60 text-[15px] leading-[1.9] mb-12">{item.solution}</p>

        {/* Gallery */}
        <h2 className="text-[#111111] text-[1.2rem] font-black tracking-[0.03em] mb-6">项目图集</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {item.imgs.map((src, i) => (
            <div key={i} className="overflow-hidden img-hover">
              <img src={optimizedImage(src)} alt={`${item.title} ${i + 1}`} className="w-full aspect-[4/3] object-cover" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </section>

      {/* Related cases */}
      {casesByCategory[item.category]?.length > 1 && (
        <section className="bg-[#f8f8f8] py-16 px-6">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[#111111] text-[1.2rem] font-black tracking-[0.03em] mb-8 text-center">更多 {item.category} 案例</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {casesByCategory[item.category].filter((c) => c.id !== item.id).slice(0, 3).map((c) => (
                <Link key={c.id} to={`/cases/${c.id}`} className="group block overflow-hidden bg-white border border-black/5">
                  <img src={optimizedImage(c.imgs[0])} alt={c.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="p-4">
                    <h3 className="text-[#111111] text-[14px] font-bold tracking-[0.03em]">{c.title}</h3>
                    <p className="text-[#111111]/40 text-[11px] mt-1">{c.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-[#111111] text-[1.4rem] font-black tracking-[0.02em] mb-3">想实现类似的项目？</h2>
        <p className="text-[#111111]/45 text-[14px] mb-8 max-w-[460px] mx-auto">告诉我们您的项目需求，我们会提供专属石材方案与报价。</p>
        <Link to="/contact" className="inline-block px-10 py-3.5 bg-[#34c759] text-white text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#34c759]/80 transition-colors">
          立即咨询
        </Link>
      </section>
    </div>
  );
}
