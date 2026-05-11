import useInView from "../hooks/useInView";
import { ACHIEVEMENTS } from "../data/portofolioData";

export default function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section
      id="achievements"
      style={{
        background: "#F8FAFC",
        padding: "100px 24px"
      }}
    >
      <div
        ref={ref}
        className={`fade-section ${inView ? "visible" : ""}`}
        style={{
          maxWidth: 1400, // lebih lebar
          margin: "0 auto"
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 60
          }}
        >
          <div className="tag" style={{ marginBottom: 16 }}>
            ✦ Achievements
          </div>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(28px,4vw,40px)",
              color: "#0F172A"
            }}
          >
            Milestones & Recognition
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#94A3B8",
              marginTop: 10
            }}
          >
            A few moments that shaped my growth journey.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24
          }}
        >
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              className={`acard fade-delay-${(i % 2) + 1}`}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: 20,
                border: "1px solid #E2E8F0"
              }}
            >
              {/* Certificate */}
              <img
                src={a.image}
                alt={a.title}
                style={{
                  width: "100%",
                  height: 230,
                  objectFit: "contain",
                  background: "#F8FAFC",
                  borderRadius: 14,
                  marginBottom: 16,
                  border: "1px solid #E2E8F0"
                }}
              />

              {/* Info */}
              <div style={{ fontSize: 26, marginBottom: 10 }}>
                {a.icon}
              </div>

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: 6
                }}
              >
                {a.title}
              </h3>

              <p
                style={{
                  fontSize: 13,
                  color: "#2563EB",
                  fontWeight: 600,
                  marginBottom: 10
                }}
              >
                {a.org}
              </p>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "#64748B"
                }}
              >
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}