import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DomeGallery from './DomeGallery';
import Masonry from './Masonry';
import MarketingTools from './MarketingTools';
import logo from '../assets/logo.png';

// TODO: Add your marketing project images here
// Example:
// import marketing1 from '../assets/marketing/project1.png';
// import marketing2 from '../assets/marketing/project2.png';

export default function Marketing() {
  const containerRef = useRef(null);
  const masonryRef = useRef(null);
  const [postersFixed, setPostersFixed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!masonryRef.current) return;

      const rect = masonryRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      // Text should be fixed when section is in the middle portion of viewport
      // and there's still content below
      if (sectionTop <= 0 && sectionBottom > viewportHeight) {
        setPostersFixed(true);
      } else {
        setPostersFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transform scroll progress to blur value (starts at 8px, ends at 0px)
  const blurValue = useTransform(scrollYProgress, [0, 0.5], [8, 0]);

  // Transform scroll progress to opacity for the name (1 to 0)
  const nameOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Transform scroll progress to scale for the name
  const nameScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // Transform scroll progress to move DomeGallery up and out of view
  const domeY = useTransform(scrollYProgress, [0.5, 1], ['0vh', '-100vh']);

  // Marketing projects for Masonry
  // TODO: Replace with actual marketing project images
  const baseProjects = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      height: 600,
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      height: 750,
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
      url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
      height: 500,
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
      height: 650,
    }
  ];

  // Duplicate the projects to fill the gallery
  const marketingProjects = [
    ...baseProjects,
    ...baseProjects.map(p => ({ ...p, id: `${p.id}-dup1` })),
    ...baseProjects.map(p => ({ ...p, id: `${p.id}-dup2` })),
    ...baseProjects.map(p => ({ ...p, id: `${p.id}-dup3` })),
    ...baseProjects.map(p => ({ ...p, id: `${p.id}-dup4` })),
    ...baseProjects.map(p => ({ ...p, id: `${p.id}-dup5` })),
  ];

  return (
    <div className="relative w-full">
      {/* Logo - always visible */}
      <motion.a
        href="/"
        className="fixed top-8 left-8 pointer-events-auto z-[100]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={logo} alt="Logo" className="w-auto h-8" />
      </motion.a>

      {/* DomeGallery + Name Section - sticky background */}
      <div ref={containerRef} className="relative w-full" style={{ height: '300vh' }}>
        {/* Fixed DomeGallery with dynamic blur - scrolls out of view */}
        <motion.div
          className="fixed inset-0 w-full h-screen"
          style={{
            filter: useTransform(blurValue, (v) => `blur(${v}px)`),
            y: domeY
          }}
        >
          <DomeGallery />
        </motion.div>

        {/* Dark overlay - fades away with scroll */}
        <motion.div
          className="fixed inset-0 w-full h-screen bg-black/50 pointer-events-none z-10"
          style={{
            opacity: nameOpacity,
            y: domeY
          }}
        />

        {/* Name Overlay that scrolls away - Holographic Style */}
        <motion.div
          className="fixed inset-0 w-full h-screen flex items-center justify-center pointer-events-none z-50 overflow-hidden"
          style={{
            opacity: nameOpacity,
            scale: nameScale,
            y: domeY
          }}
        >
          {/* Warm gradient glow on left side */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3"
            style={{
              background: 'radial-gradient(ellipse at left center, rgba(255, 150, 50, 0.4) 0%, rgba(255, 100, 100, 0.2) 30%, transparent 70%)',
              filter: 'blur(60px)'
            }}
          />

          <div className="relative w-full max-w-7xl px-8">
            {/* Main text container */}
            <div className="relative z-10 flex flex-col items-center">
              <h1 className="text-[18vw] lg:text-[14vw] font-black tracking-tighter flex justify-center items-center">
                {/* GWE - solid greyer white */}
                <span className="text-gray-200">GWE</span>

                {/* NDO - outlined to show holographic object */}
                <span
                  className="relative"
                  style={{
                    WebkitTextStroke: '2px #e5e7eb',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                  }}
                >
                  NDO
                </span>

                {/* LYN - solid greyer white */}
                <span className="text-gray-200">LYN</span>
              </h1>

              {/* Marketing Portfolio badge - below the name */}
              <motion.div
                className="mt-6 lg:mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="border border-gray-200 rounded-full px-5 py-2">
                  <p className="text-gray-200 text-sm lg:text-base font-light tracking-widest uppercase">
                    Marketing Portfolio
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 flex flex-col items-center gap-2 w-full"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-sm text-gray-400 font-light tracking-wider">Scroll to explore</span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Spacer to enable scrolling */}
        <div className="h-[300vh]" />
      </div>

      {/* Masonry Section - appears after DomeGallery scrolls away */}
      <div ref={masonryRef} className="relative w-full bg-neutral-950">
        <div className="flex flex-row">
          {/* Left side - Masonry images */}
          <div className="w-full lg:w-1/2 py-20">
            <Masonry
              items={marketingProjects}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>

          {/* Right side - Posters text column */}
          <div className="hidden lg:block w-1/2 relative">
            {/* Spacer when fixed to maintain layout */}
            {postersFixed && <div className="h-screen" />}

            {/* Posters text - switches between relative and fixed */}
            <div
              className={`flex items-center justify-center h-screen ${postersFixed ? 'fixed top-1/2 -translate-y-1/2 right-0 w-1/2' : 'relative'}`}
              style={{
                willChange: postersFixed ? 'transform' : 'auto',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              <h2
                className="font-black tracking-tight select-none"
                style={{
                  fontSize: 'clamp(8rem, 15vw, 18rem)',
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  background: 'linear-gradient(135deg, #ffd4c4 0%, #ffb8a8 25%, #ff9d8f 50%, #ffb8a8 75%, #ffd4c4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 10px 30px rgba(255, 157, 143, 0.4)) drop-shadow(0 0 80px rgba(255, 184, 168, 0.3))',
                  textShadow: '0 5px 15px rgba(255, 157, 143, 0.5)',
                  letterSpacing: '-0.02em',
                  transform: 'translateZ(0)',
                }}
              >
                <span style={{
                  position: 'relative',
                  display: 'inline-block',
                  filter: 'drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.5)) drop-shadow(-2px -2px 4px rgba(0, 0, 0, 0.3))'
                }}>
                  Posters
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <MarketingTools />
    </div>
  );
}
