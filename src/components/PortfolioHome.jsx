import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// icons
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs, FaPython, FaJs, FaDatabase, FaJava, FaAws, FaGithub, FaStar, FaCodeBranch, FaLinkedin, FaInstagram, FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';
import { FaCodeCommit } from 'react-icons/fa6';
import { SiTypescript, SiSpringboot, SiFirebase, SiTailwindcss, SiSwagger, SiPhp } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { AiOutlineDotNet } from 'react-icons/ai';
import { MdEmail, MdOutlineDesignServices } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { HiOutlineExternalLink } from 'react-icons/hi';

// assets & data
import gwenImg from '../assets/gwen.png';
import { EDUCATION, EXPERIENCES, ABOUT, KEY_PROJECTS } from '../constants';
import CursorGlow from './CursorGlow';
import PageTopbar from './PageTopbar';
import ContactSection from './ContactSection';
import PageFooter from './PageFooter';

// ── Three.js (hero only, optimised) ──────────────────────────────────────────

const PINK = new THREE.Color('#f4b8d0');
const INK  = new THREE.Color('#f0ede6');

function makeRenderer(canvas) {
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  r.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  r.setClearColor(0x000000, 0);
  const w = canvas.clientWidth || canvas.parentElement?.clientWidth || 400;
  const h = canvas.clientHeight || canvas.parentElement?.clientHeight || 400;
  r.setSize(w, h, false);
  return r;
}
function fitRenderer(r, canvas) {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (!w || !h) return;
  const dpr = r.getPixelRatio();
  if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) r.setSize(w, h, false);
}

function initHeroScene(canvas, readoutEl) {
  const renderer = makeRenderer(canvas);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 5.4);

  const knotGeo = new THREE.TorusKnotGeometry(1.1, 0.36, 120, 20, 2, 3);
  const wireMesh = new THREE.Mesh(knotGeo,
    new THREE.MeshBasicMaterial({ color: INK, wireframe: true, transparent: true, opacity: 0.32 }));
  scene.add(wireMesh);

  const accentMesh = new THREE.Mesh(knotGeo,
    new THREE.MeshBasicMaterial({ color: PINK, wireframe: true, transparent: true, opacity: 0.55 }));
  accentMesh.scale.setScalar(1.02);
  scene.add(accentMesh);

  // halo particles
  const haloGeo = new THREE.BufferGeometry();
  const hp = new Float32Array(90 * 3);
  for (let i = 0; i < 90; i++) {
    const r = 1.6 + Math.random() * 1.2;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    hp[i*3] = r * Math.sin(p) * Math.cos(t);
    hp[i*3+1] = r * Math.sin(p) * Math.sin(t);
    hp[i*3+2] = r * Math.cos(p);
  }
  haloGeo.setAttribute('position', new THREE.BufferAttribute(hp, 3));
  scene.add(new THREE.Points(haloGeo,
    new THREE.PointsMaterial({ color: PINK, size: 0.018, transparent: true, opacity: 0.45 })));

  const target = { x: 0, y: 0 };
  const rotV  = { x: 0, y: 0 };
  let cx = 0, cy = 0;

  const onMove = e => {
    const b = canvas.getBoundingClientRect();
    target.x = ((e.clientX - b.left) / b.width - 0.5) * 2;
    target.y = ((e.clientY - b.top) / b.height - 0.5) * 2;
  };
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerleave', () => { target.x = 0; target.y = 0; });
  canvas.addEventListener('click', () => { rotV.x += 0.08; rotV.y += 0.12; });

  let visible = true;
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
  io.observe(canvas);

  let rafId;
  function frame(t) {
    rafId = requestAnimationFrame(frame);
    if (!visible) return;
    t *= 0.001;
    fitRenderer(renderer, canvas);
    const ar = canvas.clientWidth / (canvas.clientHeight || 1);
    if (Math.abs(camera.aspect - ar) > 0.01) { camera.aspect = ar; camera.updateProjectionMatrix(); }
    cx += (target.y * 0.6 - cx) * 0.05;
    cy += (target.x * 0.8 - cy) * 0.05;
    rotV.x *= 0.94; rotV.y *= 0.94;
    wireMesh.rotation.x = cx + t * 0.18 + rotV.x * 6;
    wireMesh.rotation.y = cy + t * 0.22 + rotV.y * 6;
    accentMesh.rotation.copy(wireMesh.rotation);
    if (readoutEl) readoutEl.textContent = `θ ${wireMesh.rotation.x.toFixed(3)} · φ ${wireMesh.rotation.y.toFixed(3)}`;
    renderer.render(scene, camera);
  }
  rafId = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(rafId);
    io.disconnect();
    renderer.dispose();
    knotGeo.dispose();
    haloGeo.dispose();
  };
}

// ── Contribution grid (self-rendered, dark-mode pink) ────────────────────────

const CONTRIB_COLORS = ['#1c1c22', '#4a1028', '#7a1a45', '#b02860', '#e8699a'];

function ContribGrid() {
  const [weeks, setWeeks] = useState([]);
  const [total, setTotal] = useState(null);
  const [months, setMonths] = useState([]);
  const [scale, setScale] = useState(1);
  const [innerH, setInnerH] = useState(null);
  const wrapRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/gwxndolyn?y=2025')
      .then(r => r.json())
      .then(data => {
        const contribs = data.contributions;
        setTotal(data.total['2025'] ?? 0);

        // pad start so col 0 begins on Sunday
        const firstDay = new Date(contribs[0].date + 'T00:00:00').getDay();
        const padded = [...Array(firstDay).fill(null), ...contribs];

        const wks = [];
        for (let i = 0; i < padded.length; i += 7) wks.push(padded.slice(i, i + 7));
        setWeeks(wks);

        // build month label positions
        const ml = []; let lastM = -1;
        wks.forEach((week, wi) => {
          const first = week.find(Boolean);
          if (!first) return;
          const m = new Date(first.date + 'T00:00:00').getMonth();
          if (m !== lastM) {
            ml.push({ wi, label: new Date(first.date + 'T00:00:00').toLocaleDateString('en', { month: 'short' }) });
            lastM = m;
          }
        });
        setMonths(ml);
      })
      .catch(() => {});
  }, []);

  const CELL = 11; const GAP = 3;
  const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  useEffect(() => {
    if (!weeks.length) return;
    const update = () => {
      if (!wrapRef.current || !innerRef.current) return;
      const available = wrapRef.current.offsetWidth;
      const naturalW = innerRef.current.scrollWidth;
      const naturalH = innerRef.current.scrollHeight;
      const s = naturalW > available ? available / naturalW : 1;
      setScale(s);
      setInnerH(naturalH * s);
    };
    const ro = new ResizeObserver(update);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [weeks]);

  if (!weeks.length) return (
    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', padding: '24px 0' }}>
      Loading contributions…
    </div>
  );

  return (
    <div ref={wrapRef} style={{ width: '100%', overflow: 'hidden', height: innerH ? innerH : undefined }}>
      <div ref={innerRef} style={{ display: 'inline-block', transformOrigin: 'left top', transform: `scale(${scale})` }}>
      {/* month row */}
      <div style={{ display: 'flex', gap: GAP, marginBottom: 6, paddingLeft: 30 }}>
        {weeks.map((_, wi) => {
          const ml = months.find(m => m.wi === wi);
          return (
            <div key={wi} style={{ width: CELL, flexShrink: 0, fontSize: 9, fontFamily: 'var(--mono)', color: 'var(--ink-3)', overflow: 'visible', whiteSpace: 'nowrap' }}>
              {ml?.label ?? ''}
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: GAP }}>
        {/* day labels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: GAP }}>
          {DAY_LABELS.map((d, i) => (
            <div key={i} style={{ height: CELL, width: 26, fontSize: 9, fontFamily: 'var(--mono)', color: 'var(--ink-3)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 4 }}>
              {d}
            </div>
          ))}
        </div>

        {/* squares */}
        <div style={{ display: 'flex', gap: GAP }}>
          {weeks.map((week, wi) => (
            <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: GAP, flexShrink: 0 }}>
              {Array(7).fill(null).map((_, di) => {
                const day = week[di];
                return (
                  <div
                    key={di}
                    title={day ? `${day.date}: ${day.count} contribution${day.count !== 1 ? 's' : ''}` : ''}
                    style={{
                      width: CELL, height: CELL, borderRadius: 2,
                      background: day ? CONTRIB_COLORS[day.level] : CONTRIB_COLORS[0],
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {total !== null && (
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', marginTop: 10, letterSpacing: '0.06em' }}>
          {total} contributions in 2025
        </div>
      )}
      </div>
    </div>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  { href: 'mailto:gwenxdolyn@gmail.com', icon: <MdEmail />,      label: 'Email' },
  { href: 'https://github.com/gwxndolyn',          icon: <FaGithub />,    label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/gwndolyn',  icon: <FaLinkedin />,  label: 'LinkedIn' },
  { href: 'https://instagram.com/gwenxdolyn/',     icon: <FaInstagram />, label: 'Instagram' },
];

const WHAT_I_DO = [
  { title: 'Software Engineering', href: '#projects',   linkLabel: 'View Projects',  external: false },
  { title: 'Web Development',      href: '#projects',   linkLabel: 'View Portfolio', external: false },
  { title: 'Design & Marketing',   href: '/marketing',  linkLabel: 'View Work',      external: true },
];

const SKILLS = [
  { icon: <FaPython      style={{ fontSize: 38, color: '#60a5fa' }} />,  label: 'Python',      dur: 2.3 },
  { icon: <FaJava        style={{ fontSize: 38, color: '#f87171' }} />,  label: 'Java',        dur: 3.5 },
  { icon: <SiTypescript  style={{ fontSize: 38, color: '#3b82f6' }} />,  label: 'TypeScript',  dur: 2.7 },
  { icon: <FaJs          style={{ fontSize: 38, color: '#fbbf24' }} />,  label: 'JavaScript',  dur: 3.3 },
  { icon: <FaDatabase    style={{ fontSize: 38, color: '#0ea5e9' }} />,  label: 'SQL',         dur: 4.2 },
  { icon: <TbBrandCSharp style={{ fontSize: 38, color: '#a78bfa' }} />,  label: 'C#',          dur: 3.8 },
  { icon: <SiPhp         style={{ fontSize: 38, color: '#60a5fa' }} />,  label: 'PHP',         dur: 3.7 },
  { icon: <RiReactjsLine style={{ fontSize: 38, color: '#22d3ee' }} />,  label: 'React',       dur: 2.9 },
  { icon: <SiSpringboot  style={{ fontSize: 38, color: '#22c55e' }} />,  label: 'Spring Boot', dur: 3.1 },
  { icon: <AiOutlineDotNet style={{ fontSize: 38, color: '#a78bfa' }} />,label: 'ASP.NET',     dur: 3.1 },
  { icon: <SiTailwindcss style={{ fontSize: 38, color: '#38bdf8' }} />,  label: 'Tailwind',    dur: 2.7 },
  { icon: <FaAws         style={{ fontSize: 38, color: '#fb923c' }} />,  label: 'AWS',         dur: 3.7 },
  { icon: <SiFirebase    style={{ fontSize: 38, color: '#fb923c' }} />,  label: 'Firebase',    dur: 3.7 },
  { icon: <FaGithub      style={{ fontSize: 38, color: '#d4d0c4' }} />,  label: 'Git',         dur: 2.5 },
  { icon: <FaDatabase    style={{ fontSize: 38, color: '#f472b6' }} />,  label: 'DBT',         dur: 4.0 },
  { icon: <PiMicrosoftExcelLogoFill style={{ fontSize: 38, color: '#16a34a' }} />, label: 'Excel', dur: 2.4 },
  { icon: <MdOutlineDesignServices style={{ fontSize: 38, color: '#e879f9' }} />, label: 'Figma', dur: 3.2 },
  { icon: <FaDatabase    style={{ fontSize: 38, color: '#22d3ee' }} />,  label: 'Docker',      dur: 3.6 },
];

const TECH_AREAS = [
  'Full-Stack Dev','Data Engineering','AI Engineering','Machine Learning',
  'Cloud Computing','CI/CD','DevOps','RPA','API Development',
  'Product Management','UX Design','Business Analytics',
];


const DEV_QUOTES = [
  '"Talk is cheap. Show me the code." – Linus Torvalds',
  '"Programs must be written for people to read." – Harold Abelson',
  '"Code is like humor. When you have to explain it, it\'s bad." – Cory House',
  '"Simplicity is the soul of efficiency." – Austin Freeman',
  '"Fix the cause, not the symptom." – Steve Maguire',
  '"A programming language is low level when programs require attention to the irrelevant." – Alan Perlis',
];

// categorise experiences
const JOBS = EXPERIENCES.filter(e =>
  ['GovTech','PwC','HeyMax','Luxoft','OCBC'].some(co => e.company.includes(co))
);
const SIDEQUESTS = EXPERIENCES.filter(e =>
  !['GovTech','PwC','HeyMax','Luxoft','OCBC'].some(co => e.company.includes(co))
);

// ── Component ─────────────────────────────────────────────────────────────────

export default function PortfolioHome() {
  const heroCanvasRef = useRef(null);
  const heroReadoutRef = useRef(null);
  const [typedName, setTypedName] = useState('');
  const [doneTyping, setDoneTyping] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [ghStats, setGhStats] = useState({ repos: null, forks: null, contributions: null });

  useEffect(() => {
    fetch('https://api.github.com/users/gwxndolyn/repos?per_page=100')
      .then(r => r.json())
      .then(repos => {
        if (!Array.isArray(repos)) return;
        setGhStats(s => ({ ...s, repos: repos.length, forks: repos.reduce((sum, r) => sum + r.forks_count, 0) }));
      })
      .catch(() => {});
    fetch('https://github-contributions-api.jogruber.de/v4/gwxndolyn?y=2025')
      .then(r => r.json())
      .then(data => setGhStats(s => ({ ...s, contributions: data.total?.['2025'] ?? null })))
      .catch(() => {});
  }, []);

  // typing
  useEffect(() => {
    const full = 'GWENDOLYN LEONG';
    let i = 0;
    setTypedName('');
    const id = setInterval(() => {
      i++;
      setTypedName(full.slice(0, i));
      if (i >= full.length) { clearInterval(id); setDoneTyping(true); }
    }, 100);
    return () => clearInterval(id);
  }, []);

  // active section highlight
  useEffect(() => {
    const sections = ['hero','about','skills','projects','github','experience','contact'];
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.3 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  // reveal
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.06 });
    document.querySelectorAll('.ph-reveal, .ph-xp-group').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Three.js
  useEffect(() => {
    if (!heroCanvasRef.current) return;
    return initHeroScene(heroCanvasRef.current, heroReadoutRef.current);
  }, []);

  const todayQuote = DEV_QUOTES[new Date().getDate() % DEV_QUOTES.length];

  return (
    <div className="ph-page">
      <CursorGlow />

      {/* CSS float keyframes */}
      <style>{`
        .ph-float { animation: ph-float-anim var(--dur, 3s) ease-in-out infinite alternate; }
        @keyframes ph-float-anim { from { transform: translateY(-7px); } to { transform: translateY(7px); } }
      `}</style>

      <PageTopbar activeSection={activeSection} />

      <main className="ph-wrap" id="hero">

        {/* ── Hero ── */}
        <section className="ph-section ph-hero">
          <div className="ph-hero-grid">
            <div>
              <div className="ph-label-row ph-reveal">Software · Product · Data</div>
              <h1 className="ph-h1 ph-reveal">
                {typedName}
                {!doneTyping && <span className="ph-cursor" />}
              </h1>
              <p className="ph-lede ph-reveal">
                Aspiring software engineer with a passion for building products and solving problems.
              </p>
              <div className="ph-hero-social ph-reveal">
                {SOCIAL_LINKS.map(({ href, icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    {icon} {label}
                  </a>
                ))}
                <a href="/Gwendolyn Leong_resume.pdf" download className="ph-resume-btn">
                  Resume ↓
                </a>
              </div>
            </div>

            <div className="ph-3d-box ph-reveal">
              <div className="ph-3d-label">Object_01 · Wireframe knot</div>
              <canvas ref={heroCanvasRef} />
              <div className="ph-corners"><span /><span /><span /><span /></div>
              <div className="ph-3d-readout" ref={heroReadoutRef}>θ 0.000 · φ 0.000</div>
            </div>
          </div>
          <div className="ph-scroll-cue">
            <span>Scroll</span>
            <span className="ph-scroll-line" />
          </div>
        </section>

        {/* ── About ── */}
        <section className="ph-section" id="about">
          <div className="ph-sec-head ph-reveal">
            <div className="ph-sec-num"><span>Section</span><b>01 — About</b></div>
            <h2>A short <em>introduction.</em></h2>
          </div>
          <div className="ph-about-grid">
            <div className="ph-photo-frame ph-reveal">
              <img src={gwenImg} alt="Gwendolyn Leong" loading="lazy" />
            </div>
            <div className="ph-reveal">
              <div className="ph-what-i-do">
                {WHAT_I_DO.map(({ title, href, linkLabel, external }) => (
                  <a
                    key={title}
                    className="ph-what-i-do-item"
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    <div className="ph-what-i-do-header">
                      <span className="ph-what-i-do-title">{title}</span>
                      <span className="ph-what-i-do-slash">//</span>
                    </div>
                    <span className="ph-what-i-do-link">{linkLabel} {external ? '↗' : '→'}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="ph-section" id="skills">
          <div className="ph-sec-head ph-reveal">
            <div className="ph-sec-num"><span>Section</span><b>02 — Skills</b></div>
            <h2>Tools &amp; <em>technologies.</em></h2>
          </div>
          <div className="ph-skills-tags ph-reveal">
            {TECH_AREAS.map(t => <span key={t} className="ph-tag">{t}</span>)}
          </div>
          <div className="ph-skill-icons ph-reveal">
            {SKILLS.map(({ icon, label, dur }) => (
              <div
                key={label}
                className="ph-skill-icon-card ph-float"
                style={{ '--dur': `${dur}s` }}
              >
                {icon}
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="ph-projects-more" style={{ marginTop: '32px' }}>
            <a href="/certifications" className="ph-projects-more-btn">View certifications →</a>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="ph-section" id="projects">
          <div className="ph-sec-head ph-reveal">
            <div className="ph-sec-num"><span>Section</span><b>03 — Projects</b></div>
            <h2>Key <em>projects.</em></h2>
          </div>
          <div className="ph-projects-grid">
            {KEY_PROJECTS.slice(0, 6).map((p, i) => (
              <a
                key={i}
                className="ph-project-card ph-reveal"
                href={p.link || '#'}
                target={p.link ? '_blank' : undefined}
                rel={p.link ? 'noopener noreferrer' : undefined}
                onClick={!p.link ? e => e.preventDefault() : undefined}
                style={{ textDecoration: 'none' }}
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
          <div className="ph-projects-more">
            <a href="/projects" className="ph-projects-more-btn">See more →</a>
          </div>
        </section>

        {/* ── GitHub ── */}
        <section className="ph-section" id="github">
          <div className="ph-sec-head ph-reveal">
            <div className="ph-sec-num"><span>Section</span><b>04 — Github</b></div>
            <h2>Open <em>source.</em></h2>
          </div>
          <div className="ph-github-card ph-reveal">
            {/* macOS window bar */}
            <div className="ph-github-macbar">
              <div className="ph-github-dots"><span /><span /><span /></div>
              <div className="ph-github-macbar-title">github.com / gwxndolyn</div>
            </div>

            <div className="ph-github-body">
              {/* Left: graph + stats */}
              <div>
                <div className="ph-github-top">
                  <div className="ph-github-username">
                    <a href="https://github.com/gwxndolyn" target="_blank" rel="noopener noreferrer">
                      <FaGithub style={{ fontSize: 20 }} />
                      / gwxndolyn
                    </a>
                    <div className="ph-github-stats">
                      <div className="ph-github-stat"><FaStar style={{ color: '#eab308' }} /> {ghStats.repos ?? '—'} repos</div>
                      <div className="ph-github-stat"><FaCodeBranch style={{ color: '#f4b8d0' }} /> {ghStats.forks ?? '—'} forks</div>
                      <div className="ph-github-stat"><FaCodeCommit style={{ color: '#fb923c' }} /> {ghStats.contributions ?? '—'} contributions</div>
                    </div>
                  </div>
                </div>
                <div className="ph-github-graph">
                  <ContribGrid />
                </div>
                <p className="ph-github-quote">{todayQuote}</p>
              </div>

              {/* Right: decorative panel */}
              <div className="ph-github-right">
                {/* Top Languages */}
                <div>
                  <div className="ph-github-right-section-title">Top Languages</div>
                  <div className="ph-lang-row">
                    {[
                      { name: 'Java',       pct: 32, color: '#b07219' },
                      { name: 'Python',     pct: 24, color: '#3572a5' },
                      { name: 'JavaScript', pct: 20, color: '#f1e05a' },
                      { name: 'TypeScript', pct: 12, color: '#3178c6' },
                      { name: 'PHP',        pct:  8, color: '#4f5d95' },
                      { name: 'C#',         pct:  4, color: '#178600' },
                    ].map(l => (
                      <div className="ph-lang-item" key={l.name}>
                        <div className="ph-lang-label">
                          <span className="ph-lang-name">
                            <span className="ph-lang-dot" style={{ background: l.color }} />
                            {l.name}
                          </span>
                          <span className="ph-lang-pct">{l.pct}%</span>
                        </div>
                        <div className="ph-lang-bar-track">
                          <div className="ph-lang-bar-fill" style={{ width: `${l.pct}%`, background: l.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="ph-section" id="experience">
          <div className="ph-sec-head ph-reveal">
            <div className="ph-sec-num"><span>Section</span><b>05 — Experience</b></div>
            <h2>Where I've <em>worked.</em></h2>
          </div>

          <div className="ph-xp-group ph-reveal">
            <div className="ph-xp-group-label">Education</div>
            <div className="ph-xp-list">
              {EDUCATION.map((e, i) => (
                <div className="ph-xp-entry" key={i}>
                  {e.logo
                    ? <img src={e.logo} alt={e.institution} className="ph-xp-logo" loading="lazy" />
                    : <div className="ph-xp-logo-placeholder">EDU</div>}
                  <div className="ph-xp-body">
                    <div className="ph-xp-title">{e.degree}</div>
                    <div className="ph-xp-sub">
                      <span>{e.institution}</span>
                      <span className="ph-xp-sub-dot">·</span>
                      <span className="ph-xp-yr">{e.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ph-xp-group ph-reveal">
            <div className="ph-xp-group-label">Industry</div>
            <div className="ph-xp-list">
              {JOBS.map((e, i) => (
                <div className="ph-xp-entry" key={i}>
                  {e.logo
                    ? <img src={e.logo} alt={e.company} className="ph-xp-logo" loading="lazy" />
                    : <div className="ph-xp-logo-placeholder">{e.company[0]}</div>}
                  <div className="ph-xp-body">
                    <div className="ph-xp-title">{e.role}</div>
                    <div className="ph-xp-sub">
                      <span>{e.company}</span>
                      <span className="ph-xp-sub-dot">·</span>
                      <span className="ph-xp-yr">{e.year}</span>
                    </div>
                    {e.description && <p className="ph-xp-desc">{e.description}</p>}
                    {e.technologies?.length > 0 && (
                      <div className="ph-xp-chips">
                        {e.technologies.map(t => <span className="ph-xp-chip" key={t}>{t}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ph-xp-group ph-reveal">
            <div className="ph-xp-group-label">Sidequests</div>
            <div className="ph-xp-list">
              {SIDEQUESTS.map((e, i) => (
                <div className="ph-xp-entry" key={i}>
                  {e.logo
                    ? <img src={e.logo} alt={e.company} className="ph-xp-logo" loading="lazy" />
                    : <div className="ph-xp-logo-placeholder">{e.company[0]}</div>}
                  <div className="ph-xp-body">
                    <div className="ph-xp-title">{e.role}</div>
                    <div className="ph-xp-sub">
                      <span>{e.company}</span>
                      <span className="ph-xp-sub-dot">·</span>
                      <span className="ph-xp-yr">{e.year}</span>
                    </div>
                    {e.description && <p className="ph-xp-desc">{e.description}</p>}
                    {e.technologies?.length > 0 && (
                      <div className="ph-xp-chips">
                        {e.technologies.map(t => <span className="ph-xp-chip" key={t}>{t}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <ContactSection />

      </main>

      <PageFooter />
    </div>
  );
}
