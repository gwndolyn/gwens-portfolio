import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { certificationsData } from "../constants";
import CursorGlow from "./CursorGlow";
import PageTopbar from "./PageTopbar";
import ContactSection from "./ContactSection";
import PageFooter from "./PageFooter";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".ph-reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.06 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="ph-page">
      <CursorGlow />
      <PageTopbar />

      <main className="ph-wrap" style={{ paddingTop: "clamp(80px, 12vh, 120px)" }}>

        <button className="ph-projects-back" onClick={() => navigate("/")}>← Back</button>

        <div className="ph-sec-head ph-reveal" style={{ marginTop: "24px" }}>
          <div className="ph-sec-num"><span>All</span><b>Certifications</b></div>
          <h2>Courses &amp; <em>credentials.</em></h2>
        </div>

        {certificationsData.map((category, ci) => (
          <div
            key={ci}
            id={category.category.replace(/\s+/g, "")}
            className="ph-cert-section ph-reveal"
            style={{ marginTop: "clamp(40px, 6vh, 64px)" }}
          >
            <div className="ph-cert-category-label">{category.category}</div>
            <div className="ph-cert-grid">
              {category.certs.map((cert, idx) => (
                <button
                  key={idx}
                  className="ph-cert-card ph-reveal"
                  style={{ transitionDelay: `${(idx % 4) * 60}ms` }}
                  onClick={() => setSelectedCert(cert)}
                >
                  <img src={cert.image} alt={cert.name} className="ph-cert-img" loading="lazy" />
                  <div className="ph-cert-overlay">
                    <span>{cert.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        <ContactSection style={{ marginTop: "clamp(64px, 10vh, 100px)" }} />

      </main>

      <PageFooter />

      {selectedCert && (
        <div className="ph-cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="ph-cert-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="ph-cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <img src={selectedCert.image} alt={selectedCert.name} />
            <p>{selectedCert.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
