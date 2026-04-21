import { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import gwnLogo from '../assets/gwn-logo.png';

const NAV_ITEMS = [
  { id: 'about',      num: '01', label: 'about' },
  { id: 'skills',     num: '02', label: 'skills' },
  { id: 'projects',   num: '03', label: 'projects' },
  { id: 'github',     num: '04', label: 'github' },
  { id: 'experience', num: '05', label: 'experience' },
  { id: 'contact',    num: '06', label: 'contact' },
];

export default function PageTopbar({ activeSection }) {
  const [clock, setClock] = useState('--:--');
  const topbarRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const p = n => String(n).padStart(2, '0');
      setClock(`${p(d.getHours())}:${p(d.getMinutes())} SGT`);
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = topbarRef.current;
    if (!el) return;
    const fn = () => el.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleClick = (e, item) => {
    e.preventDefault();
    if (item.page) {
      navigate(item.page);
    } else if (isHome) {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  };

  return (
    <header className="ph-topbar" ref={topbarRef}>
      <a href="/" className="ph-mark" onClick={e => { e.preventDefault(); navigate('/'); }}>
        <img src={gwnLogo} alt="gwn" className="ph-mark-logo" />
        Gwendolyn Leong
      </a>
      <nav className="ph-nav">
        {NAV_ITEMS.map(item => {
          const isActive = item.page ? pathname === item.page : activeSection === item.id;
          return (
            <a key={item.id}
              href={item.page || `#${item.id}`}
              className={isActive ? 'active' : ''}
              onClick={e => handleClick(e, item)}
            >
              <span className="ph-idx">{item.num}</span> {item.label}
            </a>
          );
        })}
      </nav>
      <div className="ph-topbar-right">
        <span>{clock}</span>
      </div>
    </header>
  );
}
