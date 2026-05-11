import useInView from "../hooks/useInView";
import { CONTACT_INFO, SOCIALS } from "../data/portofolioData";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" style={{ padding: "100px 24px" }}>
      <div
        ref={ref}
        className={`fade-section ${inView ? "visible" : ""}`}
        style={{ maxWidth: 900, margin: "0 auto" }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="tag" style={{ marginBottom: 16 }}>✦ Contact</div>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(28px,4vw,44px)",
              color: "#0F172A"
            }}
          >
            Let's build something<br /><em>meaningful together.</em>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#94A3B8",
              marginTop: 14,
              maxWidth: 460,
              margin: "14px auto 0"
            }}
          >
            Whether it's a project, collaboration, or just a conversation.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {CONTACT_INFO.map((item, idx) => {
            const Icon = item.icon;
            const Wrapper = item.link ? "a" : "div";

            return (
              <Wrapper
                key={idx}
                href={item.link || undefined}
                target={item.link && !item.link.startsWith("mailto") ? "_blank" : undefined}
                rel="noreferrer"
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  padding: "14px 18px",
                  border: "1px solid #E2E8F0",
                  borderRadius: 14,
                  background: "#F8FAFC",
                  textDecoration: "none",
                  color: "#0F172A"
                }}
              >
                <Icon size={20} />

                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#94A3B8",
                      textTransform: "uppercase"
                    }}
                  >
                    {item.label}
                  </div>

                  <div style={{ fontSize: 14, fontWeight: 600 }}>
                    {item.value}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* SOCIALS */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#94A3B8",
              textTransform: "uppercase",
              marginBottom: 12
            }}
          >
            Find me on
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 14 }}>
            {SOCIALS.map((item, idx) => {
              const Icon = item.icon;

              return (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #E2E8F0",
                    borderRadius: 12,
                    background: "#fff",
                    color: "#0F172A",
                    textDecoration: "none"
                  }}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}