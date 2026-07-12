import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { optimizedImage } from "@/lib/images";

const categorySummaries = [
  { key: "carved-parts", name: "欧式雕花构件", subtitle: "European Carved Components", description: "大理石欧式雕花构件系列，涵盖罗马柱、窗套线、浮雕、壁炉等装饰构件。", heroImg: "/catalog-images/carved-hero.jpg", productCount: 24 },
  { key: "wall-panels", name: "石材护墙板", subtitle: "Stone Wall Panels", description: "法式与新中式风格石材护墙板，将天然石材质感融入经典墙面设计。", heroImg: "/catalog-images/wall-hero.jpg", productCount: 48 },
  { key: "furniture", name: "石材家具", subtitle: "Stone Furniture", description: "天然大理石餐桌、茶几、边几与台面，让石材的永恒质感融入日常生活。", heroImg: "/catalog-images/furniture-hero.jpg", productCount: 122 },
  { key: "arttech", name: "艺术拼花图集", subtitle: "ARTTECH Mosaic Atlas", description: "涵盖欧式古典、中式意境与现代简约风格的水刀拼花图集。", heroImg: "/catalog-images/arttech-hero.jpg", productCount: 43 },
] as const;

export default function LazyCatalogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#34c759] text-[11px] font-bold tracking-[0.20em] uppercase">CATALOG</span>
          <h2 className="text-[#111] text-[clamp(1.5rem,3vw,2.4rem)] font-black tracking-[0.02em] mt-3">
            产品画册精选
          </h2>
          <p className="text-[#111]/50 text-[15px] mt-3 max-w-[560px] mx-auto">
            从经典欧式雕花到现代石材家具，浏览康利德的完整产品画册系列
          </p>
        </div>

        {!isVisible ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-[4/3] bg-[#f0f0f0] animate-pulse rounded-sm" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorySummaries.map((cat) => (
                <Link
                  key={cat.key}
                  to={`/catalog/${cat.key}`}
                  className="group relative block overflow-hidden bg-[#f5f5f5] aspect-[4/3]"
                >
                  <img
                    src={optimizedImage(cat.heroImg)}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <h3 className="text-white text-[22px] font-bold tracking-[0.06em] mb-2">{cat.name}</h3>
                    <p className="text-white/60 text-[12px] font-medium tracking-[0.12em] uppercase mb-4">{cat.subtitle}</p>
                    <p className="text-white/70 text-[14px] max-w-[320px] leading-relaxed">
                      {cat.description.length > 80 ? cat.description.slice(0, 80) + "..." : cat.description}
                    </p>
                    <span className="mt-5 inline-block text-[11px] font-bold tracking-[0.12em] text-white border border-white/30 px-5 py-2 group-hover:bg-white group-hover:text-[#111] transition-colors">
                      共 {cat.productCount} 件产品
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center min-h-[48px] px-8 border border-[#111]/20 text-[#111] text-[12px] font-bold tracking-[0.06em] hover:bg-[#111] hover:text-white transition-colors"
              >
                查看全部产品画册
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
