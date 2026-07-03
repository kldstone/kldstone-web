import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#f8f8f8] text-[#111111]/65 border-t border-black/8">
      <div className="relative max-w-[1280px] mx-auto px-6">
        {/* Top: Brand */}
        <div className="py-16 border-b border-black/6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <img src="/kld-logo-web.png" alt="康利德石材" className="w-[120px] mb-6 opacity-90" />
              <p className="text-[#111111]/45 text-[13px] leading-relaxed max-w-[240px]">
                以天然石材为语言,<br/>让每一寸纹理都讲述大地的故事。
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-[#111111]/90 text-[12px] font-bold tracking-[0.10em] uppercase mb-5">探索</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: "石材系列", to: "/collections" },
                  { label: "空间作品", to: "/spaces" },
                  { label: "关于我们", to: "/about" },
                  { label: "联系我们", to: "/contact" },
                ].map((l) => (
                  <Link key={l.to} to={l.to} className="text-[#111111]/45 text-[13px] hover:text-[#34c759] transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Collections */}
            <div>
              <h4 className="text-[#111111]/90 text-[12px] font-bold tracking-[0.10em] uppercase mb-5">产品分类</h4>
              <div className="flex flex-col gap-3">
                <Link to="/collections/marble" className="text-[#111111]/45 text-[13px] hover:text-[#34c759] transition-colors">天然大理石</Link>
                <Link to="/collections/mosaic" className="text-[#111111]/45 text-[13px] hover:text-[#34c759] transition-colors">水刀拼花</Link>
                <Link to="/collections/furniture" className="text-[#111111]/45 text-[13px] hover:text-[#34c759] transition-colors">石材家具摆件</Link>
                <Link to="/collections/countertop" className="text-[#111111]/45 text-[13px] hover:text-[#34c759] transition-colors">石材台面定制</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#111111]/90 text-[12px] font-bold tracking-[0.10em] uppercase mb-5">联系</h4>
              <div className="flex flex-col gap-3 text-[13px] text-[#111111]/45">
                <p>福建省南安市石井镇后店工业区</p>
                <p className="text-[#34c759] font-medium">+86 156 5906 9988</p>
                <p>
                  <a href="mailto:kldstone.china@gmail.com" className="hover:text-[#34c759] transition-colors">
                    kldstone.china@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-1.5 text-[#111111]/30">微信联系</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#111111]/30 tracking-[0.04em]">
          <span>&copy; {new Date().getFullYear()} 福建省南安康利德石材有限公司. KLD Stone.</span>
          <span>闽ICP备XXXXXXXX号-1</span>
        </div>
      </div>
    </footer>
  );
}
