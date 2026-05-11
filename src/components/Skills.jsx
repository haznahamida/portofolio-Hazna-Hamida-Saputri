import useInView from "../hooks/useInView";

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
      style={{
        background: "#F8FAFC",
        padding: "100px 24px"
      }}
    >
      <div
        ref={ref}
        className={`fade-section ${inView ? "visible" : ""}`}
        style={{
          maxWidth: 1100,
          margin: "0 auto"
        }}
      >

        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 60
          }}
        >
          <div
            className="tag"
            style={{ marginBottom: 16 }}
          >
            ✦ Skills
          </div>
        </div>

        {/* FULL WIDTH */}
        <div
          style={{
            maxWidth: 850,
            margin: "0 auto"
          }}
        >

          <SkillDomain
            title="🧠 Product Thinking"
            desc="Designing end-to-end user flows and product structures based on user needs and system constraints"
            skills={[
              "User Flow Design",
              "UI/UX Systems",
              "Wireframing",
              "Design Systems"
            ]}
          />

          <SkillDomain
            title="🤖 AI & Intelligent Systems"
            desc="Integrating AI into product workflows to enhance user experience and decision making"
            skills={[
              "Computer Vision (CNN, YOLO)",
              "NLP & Sentiment Analysis",
              "Image Classification & Object Detection",
              "Model Training & Evaluation",
              "AI System Monitoring & Incident Analysis",
              "Data-driven Feature Development"
            ]}
          />

          <SkillDomain
            title="⚙️ Engineering Execution"
            desc="Turning designs into real applications"
            skills={[
              "Frontend Development (React)",
              "REST API Integration",
              "FastAPI (Project Implementation)",
              "Database Integration (SQL)",
              "Git Collaboration"
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* COMPONENT DOMAIN */
function SkillDomain({
  title,
  desc,
  skills
}) {
  return (
    <div
      style={{
        marginBottom: 36
      }}
    >
      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#0F172A"
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: 13,
          color: "#64748B",
          margin: "6px 0 12px"
        }}
      >
        {desc}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10
        }}
      >
        {skills.map((s) => (
          <span
            key={s}
            style={{
              padding: "7px 12px",
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: 10,
              fontSize: 13,
              color: "#475569",
              fontWeight: 500
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}