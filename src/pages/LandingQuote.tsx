import { useState } from "react";
import { Link } from "react-router-dom";
import { optimizedImage } from "@/lib/images";
import { trackConversion } from "@/lib/analytics";

export default function LandingQuote() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <div className="bg-white border-b border-black/5">
        <div className="max-w-[960px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/optimized/kld-logo-web.webp" alt="康利德石材" className="w-[80px] h-[33px] object-contain" decoding="async" />
          </Link>
          <a href="tel:+8615659069988" onClick={() => trackConversion("phone_click", { source: "landing_header" })} className="text-[#34c759] text-[14px] font-bold tracking-[0.04em]">
            +86 156 5906 9988
          </a>
        </div>
      </div>

      {/* Hero + Form */}
      <section className="max-w-[960px] mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Value prop */}
          <div>
            <span className="text-[#34c759] text-[11px] font-bold tracking-[0.18em] uppercase">KLD Stone</span>
            <h1 className="text-[#111111] text-[clamp(1.6rem,3.5vw,2.4rem)] font-black tracking-[0.03em] mt-4 mb-4 leading-[1.2]">
              获取天然石材方案<br/>与工厂报价
            </h1>
            <p className="text-[#111111]/55 text-[15px] leading-[1.8] mb-8">
              提交您的项目需求，我们会在 24 小时内提供详细报价与建议。从选材到出口交付，一站式服务。
            </p>

            {/* Trust signals */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[13px]">
                <span className="w-6 h-6 bg-[#34c759]/10 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                20+ 年行业沉淀
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <span className="w-6 h-6 bg-[#34c759]/10 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                149 款天然大理石品种常备现货
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <span className="w-6 h-6 bg-[#34c759]/10 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                ±0.1mm 水刀切割精度
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <span className="w-6 h-6 bg-[#34c759]/10 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                出口 30+ 个国家  · 定制木箱加固
              </div>
            </div>

            <div className="overflow-hidden rounded img-hover">
              <img src={optimizedImage("/brand-gallery/076-inspection-img-2504.jpg")} alt="石材质检" className="w-full aspect-[16/9] object-cover" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Right: Quick form */}
          <div className="bg-[#f8f8f8] p-8 md:p-10">
            <h2 className="text-[#111111] text-[1.2rem] font-black tracking-[0.03em] mb-6">提交询盘</h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#34c759]/10 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-[#111111] text-[1.1rem] font-black mb-2">提交成功！</h3>
                <p className="text-[#111111]/55 text-[14px] leading-relaxed">我们会在 24 小时内与您联系。</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-[#111111] text-[12px] font-bold tracking-[0.06em]">提交新的询盘</button>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/kldstone.china@gmail.com"
                method="POST"
                onSubmit={() => trackConversion("form_submit", { source: "landing_quote" })}
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="KLD报价 - 落地页询盘" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

                <div>
                  <label className="block text-[#111111] text-[11px] font-bold tracking-[0.06em] mb-1.5">姓名 *</label>
                  <input type="text" name="name" required className="w-full bg-white border border-black/10 px-4 py-3 text-[14px] focus:outline-none focus:border-[#111111] transition-colors" placeholder="您的姓名" />
                </div>
                <div>
                  <label className="block text-[#111111] text-[11px] font-bold tracking-[0.06em] mb-1.5">邮箱 *</label>
                  <input type="email" name="email" required className="w-full bg-white border border-black/10 px-4 py-3 text-[14px] focus:outline-none focus:border-[#111111] transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-[#111111] text-[11px] font-bold tracking-[0.06em] mb-1.5">电话</label>
                  <input type="tel" name="phone" className="w-full bg-white border border-black/10 px-4 py-3 text-[14px] focus:outline-none focus:border-[#111111] transition-colors" placeholder="+86 156 5906 9988" />
                </div>
                <div>
                  <label className="block text-[#111111] text-[11px] font-bold tracking-[0.06em] mb-1.5">项目需求 *</label>
                  <textarea name="message" required rows={4} className="w-full bg-white border border-black/10 px-4 py-3 text-[14px] focus:outline-none focus:border-[#111111] transition-colors resize-none" placeholder="产品类型、规格尺寸、数量、目标市场……" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-[#34c759] text-white text-[13px] font-bold tracking-[0.10em] uppercase hover:bg-[#34c759]/80 transition-colors">
                  获取报价
                </button>
                <p className="text-[#111111]/35 text-[11px] text-center">我们承诺绝不泄露您的信息。提交即表示您同意我们的隐私政策。</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-black/5 py-6 text-center text-[#111111]/30 text-[11px] tracking-[0.04em]">
        &copy; {new Date().getFullYear()} KLD Stone. 福建省南安康利德石材有限公司
      </div>
    </div>
  );
}
