import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "首页", href: "/" },
  {
    label: "石材系列",
    href: "/collections",
    children: [
      { label: "天然大理石", href: "/collections/marble" },
      { label: "水刀拼花马赛克", href: "/collections/mosaic" },
      { label: "石材家具摆件", href: "/collections/furniture" },
      { label: "石材台面定制", href: "/collections/countertop" },
    ],
  },
  { label: "空间作品", href: "/spaces" },
  { label: "定制服务", href: "/custom" },
  { label: "工艺匠心", href: "/craftsmanship" },
  { label: "品质保障", href: "/quality" },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top info bar */}
      <div className="w-full bg-[#0f0e0c] text-white/60 text-[12px] tracking-[0.04em]">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between min-h-[34px]">
          <span className="truncate">天然大理石 · 水刀拼花马赛克 · 石材工艺品 · 福建南安水头</span>
          <span className="hidden sm:flex items-center gap-4 ml-4 shrink-0">
            <a href="tel:+8615959999064" className="hover:text-[#111111] transition-colors">+86 159 5999 9064</a>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              微信
            </span>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-400 border-b ${
          scrolled
            ? "bg-[rgba(18,16,13,0.97)] border-white/8 backdrop-blur-[20px]"
            : "bg-[rgba(18,16,13,0.90)] border-white/6 backdrop-blur-[20px]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between min-h-[78px] gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/kld-logo-web.png"
              alt="康利德石材"
              className="w-[96px] h-[40px] object-contain"
            />
            <span className="hidden lg:block">
              <strong className="block text-white text-[13px] tracking-[0.10em] leading-tight">康利德 KLD</strong>
              <small className="block text-white/45 text-[10px] tracking-[0.06em] mt-[2px]">天然石材 · 福建南安</small>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group/dropdown">
                <Link
                  to={link.href}
                  className={`inline-flex items-center justify-center min-h-[44px] px-[12px] text-[12.5px] font-semibold tracking-[0.05em] transition-colors whitespace-nowrap ${
                    isActive(link.href)
                      ? "text-[#111111]"
                      : "text-white/60 hover:text-white"
                  }`}
                  onMouseEnter={() => link.children && setDropdownOpen(true)}
                  onMouseLeave={() => link.children && setDropdownOpen(false)}
                >
                  {link.label}
                  {link.children && (
                    <svg className="ml-1 w-3 h-3 transition-transform group-hover/dropdown:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  )}
                </Link>

                {/* Dropdown submenu for Collections */}
                {link.children && dropdownOpen && (
                  <div
                    className="absolute top-full left-0 min-w-[190px] bg-[rgba(22,19,15,0.98)] backdrop-blur-[16px] border border-white/8 py-2 shadow-xl shadow-black/30 animate-fadeInDown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-5 py-3 text-[12px] font-medium tracking-[0.04em] transition-colors ${
                          location.pathname === child.href ? "text-[#111111]" : "text-white/50 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile visible links (partial, for mid-size screens) */}
          <div className="hidden md:flex lg:hidden items-center gap-0">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`inline-flex items-center justify-center min-h-[44px] px-[9px] text-[11px] font-semibold tracking-[0.03em] transition-colors whitespace-nowrap ${
                  isActive(link.href) ? "text-[#111111]" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <span className="text-white/20 text-[11px] px-1">···</span>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center min-h-[40px] px-5 bg-[#111111] text-white text-[12px] font-bold tracking-[0.06em] hover:bg-black/80 transition-colors whitespace-nowrap shrink-0"
          >
            获取报价
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden border border-white/15 bg-transparent text-white/80 px-3 py-2 text-[12px] font-bold tracking-[0.08em]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "关闭" : "菜单"}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[700px] border-t border-white/6" : "max-h-0"
          }`}
        >
          <div className="bg-[#15120f] px-6 py-3">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  to={link.href}
                  className={`block py-3.5 text-[13px] font-semibold tracking-[0.06em] border-b border-white/5 transition-colors ${
                    isActive(link.href) ? "text-[#111111]" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
                {/* Mobile sub-menu for collections */}
                {link.children && menuOpen && (
                  <div className="pl-5 pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block py-2.5 text-[12px] tracking-[0.04em] text-white/40 hover:text-[#111111] transition-colors border-b border-white/3"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-3 block text-center bg-[#111111] text-white py-3 text-[12px] font-bold tracking-[0.06em]"
            >
              获取报价
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
