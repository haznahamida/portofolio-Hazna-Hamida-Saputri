import { FaGithub, FaFigma } from "react-icons/fa";
import {
  HiOutlineExternalLink,
  HiChevronLeft,
  HiChevronRight,
  HiSparkles
} from "react-icons/hi";
import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function Modal({ project: p, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  const windowWidth = useWindowWidth();

  // Pakai ukuran LAYAR, bukan tipe project
  const isSmallScreen = windowWidth < 768;
  // Tipe project tetap dipakai untuk tinggi gambar saja
  const isProjectMobile = p.deviceType === "mobile";

  useEffect(() => {
    setCurrentImage(0);
  }, [p]);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const nextImage = () =>
    setCurrentImage((prev) => (prev === p.images.length - 1 ? 0 : prev + 1));
  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? p.images.length - 1 : prev - 1));

  const sectionTitle = {
    fontSize: 15,
    fontWeight: 700,
    color: "#0F172A",
    marginBottom: 12
  };

  const bodyText = {
    fontSize: 14,
    lineHeight: 1.8,
    color: "#475569"
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 44,
    height: 44,
    border: "none",
    borderRadius: "50%",
    background: "rgba(255,255,255,.92)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 25px rgba(15,23,42,.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10
  };

  return (
    <div
      className="modal-bg"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal-box"
        style={{
          background: "rgba(255,255,255,.98)",
          backdropFilter: "blur(24px)",
          borderRadius: 32,
          width: "min(1100px, 92vw)",
          maxHeight: "90vh",
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
          boxShadow: "0 30px 80px rgba(15,23,42,.18)"
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "32px 36px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start"
          }}
        >
          <div>
            <div className="tag">{p.category}</div>
            <h2
              className="serif"
              style={{ fontSize: isSmallScreen ? 24 : 32, marginTop: 12, color: "#0F172A" }}
            >
              {p.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 42, height: 42,
              border: "none", borderRadius: "50%",
              background: "#F8FAFC", cursor: "pointer", fontSize: 18
            }}
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div
          style={
            isSmallScreen
              ? {
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "auto",
                  overflowY: "hidden",
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  padding: "0 0 24px"
                }
              : {
                  display: "block",
                  overflowX: "hidden",
                  padding: "0 36px 40px"
                }
          }
        >
          {/* PANEL 1: IMAGE */}
          <div
            style={
              isSmallScreen
                ? {
                    minWidth: "88vw",
                    maxWidth: "88vw",
                    scrollSnapAlign: "start",
                    padding: "0 12px 0 20px",
                    boxSizing: "border-box"
                  }
                : {
                    width: "100%",
                    marginBottom: 36
                  }
            }
          >
            {/* image card */}
            <div
              style={{
                position: "relative",
                width: "100%",
                borderRadius: 28,
                overflow: "hidden",
                background: "#F8FAFC",
                boxShadow: "0 20px 50px rgba(15,23,42,.08)"
              }}
            >
              <img
                src={p.images[currentImage]}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: isSmallScreen
                    ? (isProjectMobile ? "65vh" : "45vh")
                    : (isProjectMobile ? 480 : 420),
                  objectFit: "contain",
                  display: "block",
                  padding: isProjectMobile ? 18 : 0,
                  background: "#F8FAFC"
                }}
              />

              {/* IMAGE COUNTER */}
              {p.images.length > 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 12, right: 14,
                    background: "rgba(15,23,42,.55)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    fontSize: 12, fontWeight: 600,
                    letterSpacing: "0.04em",
                    padding: "4px 10px",
                    borderRadius: 20,
                    pointerEvents: "none",
                    zIndex: 11
                  }}
                >
                  {currentImage + 1} / {p.images.length}
                </div>
              )}

              {p.images.length > 1 && (
                <>
                  <button onClick={prevImage} style={{ ...arrowStyle, left: 14 }}>
                    <HiChevronLeft />
                  </button>
                  <button onClick={nextImage} style={{ ...arrowStyle, right: 14 }}>
                    <HiChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* dots hint - only on small screen */}
            {isSmallScreen && (
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 14 }}>
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: i === 0 ? 20 : 6,
                      height: 6,
                      borderRadius: 99,
                      background: i === 0 ? "#2563EB" : "#CBD5E1"
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* PANEL 2: CONTENT */}
          <div
            style={
              isSmallScreen
                ? {
                    minWidth: "88vw",
                    maxWidth: "88vw",
                    scrollSnapAlign: "start",
                    padding: "0 20px 0 12px",
                    boxSizing: "border-box",
                    overflowY: "visible"
                  }
                : {
                    maxWidth: 760,
                    margin: "0 auto"
                  }
            }
          >
            <section style={{ marginBottom: 32 }}>
              <h3 style={sectionTitle}>Overview</h3>
              <p style={bodyText}>{p.about}</p>
            </section>

            {p.problem && (
              <section style={{ marginBottom: 32 }}>
                <h3 style={sectionTitle}>Problem</h3>
                <p style={bodyText}>{p.problem}</p>
              </section>
            )}

            {p.outcome && (
              <section style={{ marginBottom: 32 }}>
                <h3 style={sectionTitle}>Solution</h3>
                <p style={bodyText}>{p.outcome}</p>
              </section>
            )}

            <section style={{ marginBottom: 32 }}>
              <h3 style={sectionTitle}>Features</h3>
              {p.features.map((feature) => (
                <div key={feature} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  <HiSparkles size={16} color="#2563EB" style={{ marginTop: 4 }} />
                  <span style={bodyText}>{feature}</span>
                </div>
              ))}
            </section>

            <section style={{ marginBottom: 36 }}>
              <h3 style={sectionTitle}>Tech</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tech.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "13px 22px", borderRadius: 14, textDecoration: "none",
                    color: "#fff", fontWeight: 600,
                    background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                    boxShadow: "0 12px 24px rgba(37,99,235,.25)"
                  }}
                >
                  <HiOutlineExternalLink />Live Demo
                </a>
              )}
              {p.figmaUrl && (
                <a href={p.figmaUrl} target="_blank" rel="noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "13px 22px", borderRadius: 14, textDecoration: "none",
                    color: "#0F172A", fontWeight: 600,
                    background: "#fff", border: "1px solid #E2E8F0"
                  }}
                >
                  <FaFigma />Figma
                </a>
              )}
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "13px 22px", borderRadius: 14, textDecoration: "none",
                    color: "#0F172A", fontWeight: 600,
                    background: "#F8FAFC", border: "1px solid #E2E8F0"
                  }}
                >
                  <FaGithub />View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}