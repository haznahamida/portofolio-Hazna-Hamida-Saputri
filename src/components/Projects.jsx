import { useState, useEffect } from "react";
import { PROJECTS } from "../data/portofolioData";
import useInView from "../hooks/useInView";

export default function Projects({ onSelect }) {
  const [ref, inView] = useInView();

  const [imageIndexes, setImageIndexes] = useState(
    PROJECTS.map(() => 0)
  );

  const [timers, setTimers] = useState({});

  const startPreview = (projectIndex, total) => {
    if (total <= 1 || timers[projectIndex]) return;

    const interval = setInterval(() => {
      setImageIndexes((prev) => {
        const updated = [...prev];
        updated[projectIndex] =
          (updated[projectIndex] + 1) % total;
        return updated;
      });
    }, 1400);

    setTimers((prev) => ({
      ...prev,
      [projectIndex]: interval
    }));
  };

  const stopPreview = (projectIndex) => {
    if (!timers[projectIndex]) return;

    clearInterval(timers[projectIndex]);

    setTimers((prev) => {
      const updated = { ...prev };
      delete updated[projectIndex];
      return updated;
    });
  };

  // cleanup
  useEffect(() => {
    return () => {
      Object.values(timers).forEach(clearInterval);
    };
  }, [timers]);

  return (
    <section id="projects" style={{ padding: "80px 24px" }}>
      <div
        ref={ref}
        className={`fade-section ${inView ? "visible" : ""}`}
        style={{
          maxWidth: 1100,
          margin: "0 auto"
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 40
          }}
        >
          <div className="tag">✦ Projects</div>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(28px,4vw,40px)",
              marginTop: 12
            }}
          >
            Selected Work
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: 20
          }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              onClick={() => onSelect(p)}
              onMouseEnter={() =>
                startPreview(i, p.images.length)
              }
              onMouseLeave={() =>
                stopPreview(i)
              }
              style={{
                background: "#fff",
                borderRadius: 24,
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid #E2E8F0",
                transition: ".35s ease",
                boxShadow:
                  "0 4px 20px rgba(15,23,42,.04)"
              }}
              className="project-card"
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: 170,
                  overflow: "hidden"
                }}
              >
                <img
                  src={p.images[imageIndexes[i]]}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "5px 10px",
                      borderRadius: 99,
                      background: "rgba(255,255,255,.92)"
                    }}
                  >
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 20 }}>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    marginBottom: 8
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: "#64748B",
                    lineHeight: 1.6,
                    marginBottom: 14,

                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {p.short}
                </p>

                {/* Tech */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 14
                  }}
                >
                  {p.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge"
                    >
                      {tech}
                    </span>
                  ))}

                  {p.tech.length > 3 && (
                    <span className="tech-badge">
                      +{p.tech.length - 3}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#2563EB"
                  }}
                >
                  View Case Study →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}