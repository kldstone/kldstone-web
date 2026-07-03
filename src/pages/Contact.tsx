import { useState } from "react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          subject: `[KLD询盘] 来自 ${form.name}${form.company ? ` - ${form.company}` : ""}`,
          from_name: "康利德石材官网",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "提交失败，请稍后重试或直接发送邮件。");
      }
    } catch {
      setError("网络错误，请稍后重试或直接发送邮件至 kldstone.china@gmail.com。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] bg-[#0f0e0c] overflow-hidden">
        <img src="/ai-replacements/client-inspection.jpg" alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-[#737373] text-[11px] font-bold tracking-[0.20em] uppercase">Contact</span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-3">
              联系我们
            </h1>
            <p className="text-white/55 text-[15px] max-w-[460px] mx-auto leading-relaxed">
              无论您有项目需要询盘，还是想了解更多产品信息，我们都期待听到您的声音。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Info */}
          <div>
            <h2 className="text-[var(--ink)] text-[1.6rem] font-black tracking-[0.02em] mb-8">与我们取得联系</h2>

            <div className="space-y-8">
              {/* Address */}
              <div>
                <span className="text-[#737373] text-[10px] font-bold tracking-[0.16em] uppercase block mb-2">公司地址</span>
                <p className="text-[var(--ink)] text-[15px] font-semibold leading-relaxed">
                  福建省南安市水头镇惠典工业区
                </p>
                <p className="text-[var(--muted)] text-[13px] mt-1">
                  福建省南安康利德石材有限公司
                </p>
              </div>

              {/* Phone */}
              <div>
                <span className="text-[#737373] text-[10px] font-bold tracking-[0.16em] uppercase block mb-2">电话</span>
                <a href="tel:+8615959999064" className="text-[var(--ink)] text-[18px] font-black tracking-[0.02em] hover:text-[#737373] transition-colors">
                  +86 159 5999 9064
                </a>
              </div>

              {/* Email */}
              <div>
                <span className="text-[#737373] text-[10px] font-bold tracking-[0.16em] uppercase block mb-2">邮箱</span>
                <a href="mailto:kldstone.china@gmail.com" className="text-[var(--ink)] text-[15px] font-semibold hover:text-[#737373] transition-colors">
                  kldstone.china@gmail.com
                </a>
              </div>

              {/* WeChat */}
              <div>
                <span className="text-[#737373] text-[10px] font-bold tracking-[0.16em] uppercase block mb-2">微信</span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#6b6b6b] rounded-full flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[var(--ink)] text-[14px] font-semibold">微信联系</p>
                    <p className="text-[var(--muted)] text-[12px]">添加微信获取实时报价与石材咨询</p>
                    <p className="text-[var(--ink)] text-[13px] font-medium mt-0.5">微信号：159 5999 9064</p>
                  </div>
                </div>
              </div>

              {/* Factory image */}
              <div className="overflow-hidden img-hover">
                <img src="/ai-replacements/slab-showroom.jpg" alt="康利德工厂" className="w-full aspect-[16/9] object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="text-[var(--ink)] text-[1.6rem] font-black tracking-[0.02em] mb-8">发送询盘</h2>

            {submitted ? (
              <div className="bg-[var(--panel)] border border-[var(--line)] p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#737373]/10 rounded-full flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-[var(--ink)] text-[1.2rem] font-black tracking-[0.03em] mb-2">感谢您的来信！</h3>
                <p className="text-[var(--muted)] text-[14px] leading-relaxed max-w-[320px] mx-auto">
                  我们会在24小时内通过邮件或微信与您联系。如需紧急咨询，请直接拨打电话。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", message: "" }); }}
                  className="mt-8 text-[#737373] text-[13px] font-bold tracking-[0.06em] hover:text-[var(--ink)] transition-colors"
                >
                  发送另一条消息
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[var(--ink)] text-[12px] font-bold tracking-[0.06em] mb-2">姓名 *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-[var(--line)] px-4 py-3 text-[14px] text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[#737373] transition-colors"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--ink)] text-[12px] font-bold tracking-[0.06em] mb-2">邮箱 *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-[var(--line)] px-4 py-3 text-[14px] text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[#737373] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--ink)] text-[12px] font-bold tracking-[0.06em] mb-2">公司名称</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white border border-[var(--line)] px-4 py-3 text-[14px] text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[#737373] transition-colors"
                    placeholder="您的公司名称"
                  />
                </div>

                <div>
                  <label className="block text-[var(--ink)] text-[12px] font-bold tracking-[0.06em] mb-2">询盘内容 *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    className="w-full bg-white border border-[var(--line)] px-4 py-3 text-[14px] text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[#737373] transition-colors resize-none"
                    placeholder="请描述您的需求：产品类型、规格尺寸、数量、交货时间等……"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-[13px] px-4 py-3 leading-relaxed">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-[#737373] text-[#111] text-[12px] font-bold tracking-[0.10em] uppercase hover:bg-[#a3a3a3] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "提交中……" : "发送询盘"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
