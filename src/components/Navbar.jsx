import { NAV_LINKS } from "../data/portofolioData";
import { useEffect, useState } from "react";

export default function Navbar({
  active,
  scrollTo,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mOpen, setMOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, background: scrolled ? "rgba(255,255,255,.95)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent", transition:"all .35s ease" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", height:68, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span className="serif" style={{ fontSize:22, color:"#0F172A", cursor:"pointer", letterSpacing:".5px" }} onClick={() => scrollTo("home")}>
          Hazna<span style={{ color:"#2563EB" }}>.</span>
        </span>
        <div className="hide-sm" style={{ display:"flex", gap:28, alignItems:"center" }}>
          {NAV_LINKS.map(id => (
            <span key={id} className={`nav-link ${active===id?"active":""}`} onClick={() => scrollTo(id)}>{id}</span>
          ))}
        </div>
        <button className="btn-p hide-sm" style={{ padding:"9px 20px", fontSize:13 }} onClick={() => scrollTo("contact")}>
          Hire Me ↗
        </button>
        <button className="show-sm" style={{ display:"none", background:"none", border:"1.5px solid #E2E8F0", borderRadius:10, padding:"7px 12px", cursor:"pointer", color:"#0F172A", fontSize:20, lineHeight:1 }} onClick={() => setMOpen(o => !o)}>
          {mOpen ? "✕" : "☰"}
        </button>
      </div>
      {mOpen && (
        <div style={{ background:"#fff", borderTop:"1px solid #E2E8F0", padding:"12px 24px 20px" }}>
          {NAV_LINKS.map(id => (
            <div key={id} onClick={() => { scrollTo(id); setMOpen(false); }} style={{ padding:"13px 0", fontSize:15, fontWeight:500, color:"#475569", cursor:"pointer", borderBottom:"1px solid #F1F5F9", textTransform:"capitalize" }}>{id}</div>
          ))}
        </div>
      )}
    </nav>
  );
}