import useInView from "../hooks/useInView";
import profileImg from "../assets/profile.jpg";

export default function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" style={{ background:"#F8FAFC", padding:"100px 24px" }}>
      <div ref={ref} className={`section fade-section ${inView?"visible":""}`} style={{ maxWidth:1100, margin:"0 auto", padding:0 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }} className="col-2">
          {/* Left — Profile Card */}
          <div className="fade-delay-1" style={{ display:"flex", flexDirection:"column", gap:20 }}>
            <div style={{ background:"#fff", border:"1px solid #E2E8F0", borderRadius:24, padding:32, textAlign:"center" }}>
              <div
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: "10%",
                  background: "linear-gradient(135deg, #DBEAFE, #EDE9FE)",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid #fff",
                  boxShadow: "0 8px 24px rgba(37,99,235,.15)",
                  overflow: "hidden"
                }}
              >  
              <img src={profileImg}
                alt="Hazna"
                style={{ width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
              <h3 className="serif" style={{ fontSize:24, color:"#0F172A" }}>Hazna Hamida Saputri</h3>
              <p style={{ fontSize:14, color:"rgb(64, 99, 176)", fontWeight:600, marginTop:4 }}>Informatics Graduate</p>
              <p style={{ fontSize:13, color:"#94A3B8", marginTop:4 }}>📍 Bandung, Indonesia</p>
              <div style={{ marginTop:20, paddingTop:20, borderTop:"1px solid #F1F5F9" }}>
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:12 }}>
              {[["5+","Projects"],["1","Internships"],["2","Orgs"]].map(([n,l]) => (
                <div key={l} className="stat-box">
                  <div className="serif" style={{ fontSize:26, color:"rgb(64, 99, 176)" }}>{n}</div>
                  <div style={{ fontSize:12, color:"#94A3B8", fontWeight:600, marginTop:2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Description */}
          <div className="fade-delay-2">
            <div className="tag" style={{ marginBottom:16 }}>✦ About Me</div>
            <h2 className="serif" style={{ fontSize:"clamp(28px, 4vw, 40px)", lineHeight:1.2, color:"#0F172A", marginBottom:20 }}>
              Bridging design and engineering through intelligent digital products.
            </h2>
            <p style={{ fontSize:16, lineHeight:1.9, color:"#475569", marginBottom:16 }}>
              I’m a fresh graduate in Informatics Engineering focused on UI/UX design, frontend development, and AI systems. I’ve worked on applied AI projects including computer vision models (CNN, YOLO), sentiment analysis pipelines, and AI-based workflows during my internship at Infomedia, where I supported system monitoring and data-driven operations.
            </p>
            <p style={{ fontSize:16, lineHeight:1.9, color:"#475569", marginBottom:24 }}>
              Beyond that, I build full-stack style applications and product prototypes, combining frontend development with UX design to create usable digital experiences. My machine learning experience includes classification, regression, and deep learning experiments using Python, TensorFlow, and OpenCV in Google Colab. I focus on turning data, models, and design systems into practical, real-world applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}