import useInView from "../hooks/useInView";
import { EDUCATION } from "../data/portofolioData";

export default function Education() {
  const [ref, inView] = useInView();
  return (
    <section id="education" style={{ padding:"100px 24px" }}>
      <div ref={ref} className={`fade-section ${inView?"visible":""}`} style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:60 }}>
          <div className="tag" style={{ marginBottom:16 }}>✦ Education</div>
          <h2 className="serif" style={{ fontSize:"clamp(28px,4vw,40px)", color:"#0F172A" }}>My Learning Journey</h2>
          <p style={{ fontSize:16, color:"#94A3B8", marginTop:10, maxWidth:480, margin:"12px auto 0" }}>From lecture halls to online platforms — every step shaped who I am.</p>
        </div>

        <div style={{ maxWidth:680, margin:"0 auto" }}>
          {EDUCATION.map((item, i) => (
            <div key={i} className={`tl-item fade-delay-${i+1}`}>
              <div className="tl-dot" />
              <div style={{ background:"#fff", border:"1px solid #E2E8F0", borderRadius:18, padding:"28px 32px", marginBottom:6, transition:"all .25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="#93C5FD"; e.currentTarget.style.boxShadow="0 8px 32px rgba(37,99,235,.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="#E2E8F0"; e.currentTarget.style.boxShadow="none"; }}
              >
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12, flexWrap:"wrap" }}>
                  <div>
                    <span style={{ fontSize:20 }}>{item.type}</span>
                    <h3 style={{ fontSize:18, fontWeight:700, color:"#0F172A", marginTop:6 }}>{item.degree}</h3>
                    <p style={{ fontSize:14, color:"#2563EB", fontWeight:600, marginTop:2 }}>{item.institution}</p>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:12, fontWeight:700, color:"#fff", background:"#2563EB", padding:"4px 12px", borderRadius:50, whiteSpace:"nowrap" }}>{item.year}</div>
                    <div style={{ fontSize:12, color:"#94A3B8", marginTop:6, fontWeight:500 }}>{item.gpa}</div>
                  </div>
                </div>
                <p style={{ fontSize:14, lineHeight:1.75, color:"#64748B", marginTop:14 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}