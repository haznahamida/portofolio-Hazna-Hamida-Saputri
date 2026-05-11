import useInView from "../hooks/useInView";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" style={{ padding: "100px 24px", background: "#fff" }}>
      <div
        ref={ref}
        className={`fade-section ${inView ? "visible" : ""}`}
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="tag" style={{ marginBottom: 16 }}>✦ Experience</div>
          <h2 className="serif" style={{ fontSize: "clamp(28px,4vw,40px)", color: "#0F172A" }}>
            Organisational & Professional Experience
          </h2>
          <p style={{ fontSize: 16, color: "#94A3B8", marginTop: 10, maxWidth: 520, margin: "12px auto 0" }}>
            Experience across organizational leadership, event coordination, and AI operations in real-world environments.
          </p>
        </div>

        {/* GRID */}
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>

          {/* INFOMEDIA (HIGHLIGHT) */}
          <div style={{
            background: "#fff",
            border: "1px solid #E2E8F0",
            borderRadius: 20,
            padding: "28px 32px",
            boxShadow: "0 10px 30px rgba(37,99,235,.08)"
            }}>

            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0F172A" }}>
                    Infomedia Nusantara – Operation 3A (Automation, AI, Analytics) Intern
                </h3>

                <p style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>
                    Jakarta, Indonesia
                </p>
                </div>

                <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#2563EB",
                background: "#EFF6FF",
                padding: "4px 10px",
                borderRadius: 999,
                whiteSpace: "nowrap",
                height: "fit-content"
                }}>
                Jul 2025 – Dec 2025
                </div>
            </div>

            <ul style={{ marginTop: 14, paddingLeft: 18, color: "#64748B", fontSize: 14, lineHeight: 1.7 }}>
                <li>Monitored chatbot, voicebot, and document AI systems to ensure operational stability across daily production workflows.</li>
                <li>Identified system issues early and documented incidents for technical escalation</li>
                <li>Prepared operational reports to track AI system performance and reliability</li>
            </ul>
            </div>

          {/* ORGANIZATIONS TITLE DIVIDER */}
          <div style={{ marginTop: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", letterSpacing: 1 }}>
              ORGANISATIONAL EXPERIENCE
            </p>
          </div>

          {/* HIMA IF */}
          <div style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: 18,
            padding: "26px 30px"
            }}>

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>
                HIMA IF – Staff BPH ARK
                </h3>

                <p style={{ fontSize: 12, color: "#94A3B8" }}>
                Jun 2024 – Jan 2025
                </p>
            </div>

             <ul style={{ marginTop: 10, paddingLeft: 18, color: "#64748B", fontSize: 13, lineHeight: 1.7 }}>
                <li>Planned and supported academic and professional development programs for Informatics students.</li>
                <li>Contributed to research-aligned educational initiatives.</li>
            </ul>
        </div>

          {/* KONTENT */}
          <div style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: 18,
            padding: "26px 30px"
            }}>

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>
                KONTENT HIMA IF – Secretary
                </h3>

                <p style={{ fontSize: 12, color: "#94A3B8" }}>
                Jun 2024 – Jan 2025
                </p>
            </div>

            <p style={{ fontSize: 13, color: "#64748B", marginTop: 10, lineHeight: 1.7 }}>
                Managed tutor selection, interviews, and study group assignment based on subject expertise to support peer learning programs.
            </p>
        </div>
          {/* PERFECT */}
            <div style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: 18,
            padding: "26px 30px"
            }}>

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>
                PERFECT – Secretary of Logistics Division
                </h3>

                <p style={{ fontSize: 12, color: "#94A3B8" }}>
                Dec 2023 – Mar 2024
                </p>
            </div>

            <p style={{ fontSize: 13, color: "#64748B", marginTop: 10, lineHeight: 1.7 }}>
               Coordinated logistics and resources for university-scale events and supported outreach activities introducing Telkom University. 
            </p>
        </div>

          {/* INFTERFEST */}
          <div style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: 18,
            padding: "26px 30px"
            }}>

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>
                Interfest – Public Relations Member
                </h3>

                <p style={{ fontSize: 12, color: "#94A3B8" }}>
                Oct 2024 – Dec 2024
                </p>
            </div>

            <p style={{ fontSize: 13, color: "#64748B", marginTop: 10, lineHeight: 1.7 }}>
                Built communication with media partners and academic institutions, and acted as liaison for competition participants.
            </p>
        </div>

        </div>
      </div>
    </section>
  );
}