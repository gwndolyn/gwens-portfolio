import { useState, useEffect, useRef } from 'react';

export default function CursorGlow() {
  const [glow, setGlow] = useState({ x: 0, y: 0 });
  const glowRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = e => { cursorRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove, { passive: true });
    let raf;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      glowRef.current = {
        x: glowRef.current.x + (cursorRef.current.x - glowRef.current.x) * 0.15,
        y: glowRef.current.y + (cursorRef.current.y - glowRef.current.y) * 0.15,
      };
      setGlow({ ...glowRef.current });
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div style={{
      position: 'fixed', top: glow.y, left: glow.x,
      transform: 'translate(-50%, -50%)',
      width: 150, height: 150, borderRadius: '50%',
      background: 'rgba(255, 149, 204, 0.2)',
      boxShadow: '0 0 150px rgba(255, 149, 204, 0.7)',
      pointerEvents: 'none', filter: 'blur(30px)', zIndex: 9999,
      transition: 'background 0.3s ease, box-shadow 0.3s ease',
    }} />
  );
}
