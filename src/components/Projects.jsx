import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { KEY_PROJECTS, PROJECT_TAGS } from "../constants";
import { HiOutlineExternalLink } from "react-icons/hi";
import CursorGlow from "./CursorGlow";
import PageTopbar from "./PageTopbar";
import ContactSection from "./ContactSection";
import PageFooter from "./PageFooter";

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState(["All"]);
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".ph-reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [selectedTags]);

  const filteredProjects = selectedTags.includes("All")
    ? KEY_PROJECTS
    : KEY_PROJECTS.filter(p => p.tags.some(t => selectedTags.includes(t)));

  const handleTagClick = tag => {
    if (tag === "All") { setSelectedTags(["All"]); return; }
    if (selectedTags.includes("All")) { setSelectedTags([tag]); return; }
    const next = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(next.length === 0 ? ["All"] : next);
  };

  return (
    <div className="ph-page">
      <CursorGlow />
      <PageTopbar />

      <main className="ph-wrap" style={{ paddingTop: "clamp(80px, 12vh, 120px)" }}>

        <button className="ph-projects-back" onClick={() => navigate("/")}>← Back</button>

        <div className="ph-sec-head ph-reveal" style={{ marginTop: "24px" }}>
          <div className="ph-sec-num"><span>Section</span><b>03 — Projects</b></div>
          <h2>Everything I've <em>built.</em></h2>
        </div>

        <div className="ph-proj-filters ph-reveal">
          {PROJECT_TAGS.map(tag => (
            <button
              key={tag}
              className={`ph-proj-filter-btn${selectedTags.includes(tag) ? " active" : ""}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="ph-projects-grid" style={{ marginTop: "28px" }}>
          {filteredProjects.map((p, i) => (
            <a
              key={i}
              className="ph-project-card ph-reveal"
              href={p.link || "#"}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noopener noreferrer" : undefined}
              onClick={!p.link ? e => e.preventDefault() : undefined}
              style={{ textDecoration: "none", transitionDelay: `${(i % 3) * 60}ms` }}
            >
              {p.image && (
                <div className="ph-project-img-wrap">
                  <img src={p.image} alt={p.title} className="ph-project-img" loading="lazy" />
                </div>
              )}
              <div className="ph-project-card-header">
                {p.link && <HiOutlineExternalLink className="ph-project-link-icon" />}
              </div>
              <h3>{p.title}<br /><em>{p.sub}</em></h3>
              <p className="ph-project-desc">{p.desc}</p>
              <div className="ph-project-tags">
                {p.tags.map(t => <span key={t} className="ph-project-tag">{t}</span>)}
              </div>
            </a>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p style={{ color: "var(--ink-3)", fontFamily: "var(--mono)", fontSize: 12, marginTop: 48 }}>
            No projects match the selected filter.
          </p>
        )}

        <ContactSection style={{ marginTop: "clamp(64px, 10vh, 100px)" }} />

      </main>

      <PageFooter />
    </div>
  );
};

export default Projects;
