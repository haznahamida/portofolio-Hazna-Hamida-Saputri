import profileImg from "../assets/profile.jpg";
export default function Hero({ scrollTo }) {
  return (
    <section id="home" style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", background:"#fff" }}>
      <div className="dot-grid" style={{ position:"absolute", inset:0, opacity:.5 }} />
      {/* Decorative blobs */}
      <div style={{ position:"absolute", top:"15%", right:"8%", width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle, #DBEAFE 0%, transparent 70%)", opacity:.7, pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", left:"2%", width:260, height:260, borderRadius:"50%", background:"radial-gradient(circle, #EDE9FE 0%, transparent 70%)", opacity:.6, pointerEvents:"none" }} />

      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center" }} className="col-2">
        {/* Left */}
        <div>
          <h1
            className="serif hero-name"
            style={{
              fontSize: "clamp(28px, 3.2vw, 54px)",
              lineHeight: 1.12,
              color: "#0F172A",
              letterSpacing: "-1px",
              margin: 0,
              wordBreak: "normal",
              overflowWrap: "break-word"
            }}
          >
            Turning Complex Systems into Simple Digital Experiences
          </h1>
          <p style={{ fontSize:16, lineHeight:1.85, color:"#64748B", marginTop:18, maxWidth:480, animation:"fadeUp .7s .3s ease both" }}>
           I’m Hazna, an Informatics graduate building AI-powered applications, data-driven products, and user-centered digital experiences across web and mobile platforms.
          </p>
          <div style={{ display:"flex", gap:14, marginTop:36, flexWrap:"wrap", animation:"fadeUp .7s .4s ease both" }}>
            <button className="btn-p" onClick={() => scrollTo("projects")}>View Projects →</button>
            <button className="btn-s" onClick={() => scrollTo("contact")}>Contact Me</button>
          </div>
        </div>

        {/* Right — Abstract Avatar */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", animation:"fadeUp .8s .2s ease both" }}>
          <div className="float-el" style={{ position:"relative", width:320, height:320 }}>
            {/* Outer ring */}
            <svg className="avatar-ring" width="320" height="320" style={{ position:"absolute", inset:0 }}>
              <circle cx="160" cy="160" r="150" fill="none" stroke="#DBEAFE" strokeWidth="1.5" strokeDasharray="8 6" />
            </svg>
            {/* Middle ring */}
            <svg className="avatar-ring-r" width="320" height="320" style={{ position:"absolute", inset:0 }}>
              <circle cx="160" cy="160" r="118" fill="none" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 10" />
            </svg>
            {/* Avatar circle */}
            <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:180, height:180, borderRadius:"50%", background:"linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", border:"4px solid #BFDBFE", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
              <img
                src={profileImg}
                alt="Hazna"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%"
                }}
              />
            </div>
            {/* Floating badges */}
            {[
              { label:"UI/UX Designer", top:12, left:-30, delay:"0s" },
              { label:"AI Engineer", bottom:24, right:-24, delay:".8s" },
              { label:"Frontend Developer", top:80, right:-44, delay:".4s" },
              { label:"Data Systems", bottom:80, left:-44, delay:".8s" },
            ].map(({ label, top, left, right, bottom, delay }) => (
              <div key={label} style={{ position:"absolute", top, left, right, bottom, background:"#fff", border:"1.5px solid #DBEAFE", borderRadius:50, padding:"7px 14px", fontSize:12, fontWeight:700, color:"rgb(64, 99, 176)", whiteSpace:"nowrap", boxShadow:"0 4px 16px rgba(37,99,235,.12)", animation:`float 4s ${delay} ease-in-out infinite` }}>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}