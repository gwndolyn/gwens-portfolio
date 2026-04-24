const LINKS = [
  { label: 'Email',     href: 'mailto:gwenxdolyn@gmail.com', value: 'gwenxdolyn@gmail.com', external: true },
  { label: 'Github',    href: 'https://github.com/gwxndolyn',         value: '/gwxndolyn',   external: true },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/gwndolyn', value: '/in/gwndolyn', external: true },
  { label: 'Instagram', href: 'https://instagram.com/gwenxdolyn/',    value: '@gwenxdolyn',  external: true },
  { label: 'Marketing', href: 'https://coolstuff.gwndolyn.live/', value: 'design portfolio' },
];

export default function ContactSection({ style }) {
  return (
    <section className="ph-section" id="contact" style={style}>
      <div className="ph-sec-head ph-reveal">
        <div className="ph-sec-num"><span>Section</span><b>06 — Contact</b></div>
        <h2>Let's <em>talk.</em></h2>
      </div>
      <div className="ph-contact-grid">
        <div className="ph-reveal">
          <div className="ph-contact-links">
            {LINKS.map(({ label, href, value, external }) => (
              <a key={label} href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <span>{label}</span> {value} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
