import { Link } from "react-router-dom";
import { blogPosts } from "../content/blog-cn";

const categories = ["全部", "石材知识", "行业资讯", "展会信息", "公司动态"];

export default function BlogList() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] bg-[#0f0f0f] overflow-hidden">
        <img src="/brand-gallery/craftsmanship-hero-2026-07-06.jpg" alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-white/50 text-[11px] font-bold tracking-[0.20em] uppercase">Blog</span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-3">新闻中心</h1>
            <p className="text-white/55 text-[15px] max-w-[520px] mx-auto leading-relaxed">石材行业知识、项目故事与康利德最新动态</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1100px] mx-auto px-6 pt-12 pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Link key={cat} to={cat === "全部" ? "/blog" : `/blog?cat=${cat}`}
              className="px-4 py-2 text-[12px] font-bold tracking-[0.06em] border border-black/10 hover:border-[#34c759] hover:text-[#34c759] transition-colors">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-[1100px] mx-auto px-6 pb-20">
        <div className="space-y-10">
          {blogPosts.map(post => (
            <article key={post.slug} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start border-b border-black/5 pb-10">
              <Link to={`/blog/${post.slug}`} className="overflow-hidden md:col-span-1">
                <img src={post.image} alt={post.title} className="w-full aspect-[4/3] object-cover img-hover" loading="lazy" />
              </Link>
              <div className="md:col-span-2">
                <span className="text-[#34c759] text-[10px] font-bold tracking-[0.12em] uppercase">{post.category}</span>
                <Link to={`/blog/${post.slug}`} className="block mt-1 mb-2">
                  <h2 className="text-[var(--ink)] text-[1.2rem] font-black tracking-[0.02em] hover:text-[#34c759] transition-colors">{post.title}</h2>
                </Link>
                <p className="text-[var(--muted)] text-[13px] leading-relaxed mb-3">{post.summary}</p>
                <div className="flex items-center gap-3 text-[var(--muted)] text-[11px]">
                  <span>{post.date}</span>
                  <span>·</span>
                  <div className="flex gap-2">
                    {post.tags.map(t => <span key={t} className="bg-black/5 px-2 py-0.5">#{t}</span>)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
