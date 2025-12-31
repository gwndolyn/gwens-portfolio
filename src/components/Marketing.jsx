import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DomeGallery from './DomeGallery';
import Masonry from './Masonry';
import MarketingTools from './MarketingTools';
import logo from '../assets/logo.png';
import gwenImg from '../assets/gwen.png';
import connect from '../assets/marketing/connect.png';

// Marketing posters
import photostrip from '../assets/marketing/posters/photostrip.png';
import web3 from '../assets/marketing/posters/web3.png';
import fintech from '../assets/marketing/posters/fintech.png';
import design from '../assets/marketing/posters/design.jpeg';
import heymax1 from '../assets/marketing/posters/heymax1.png';
import heymax2 from '../assets/marketing/posters/heymax2.png';
import heymax3 from '../assets/marketing/posters/heymax3.png';
import heymax4 from '../assets/marketing/posters/heymax4.png';
import pme from '../assets/marketing/posters/pme.webp';

export default function Marketing() {
  const containerRef = useRef(null);
  const masonryRef = useRef(null);
  const [postersFixed, setPostersFixed] = useState(false);
  const [postersAtBottom, setPostersAtBottom] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState([]);

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

      // Three states for the Posters text:
      // 1. Relative: scrolling in (sectionTop > 0)
      // 2. Fixed: sticky in middle (sectionTop <= 0 && sectionBottom > viewportHeight)
      // 3. Absolute at bottom: scrolling out (sectionBottom <= viewportHeight)
      if (sectionTop <= 0 && sectionBottom > viewportHeight) {
        setPostersFixed(true);
        setPostersAtBottom(false);
      } else if (sectionBottom <= viewportHeight) {
        setPostersFixed(false);
        setPostersAtBottom(true);
      } else {
        setPostersFixed(false);
        setPostersAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transform scroll progress to blur value
  // Stays blurred (8px) until after about section, then deblurs
  const blurValue = useTransform(scrollYProgress, [0, 0.4, 0.6], [8, 8, 0]);

  // Transform scroll progress to opacity for the name (1 to 0)
  const nameOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Transform scroll progress to scale for the name
  const nameScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);

  // Transform scroll progress for about section
  const aboutOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const aboutY = useTransform(scrollYProgress, [0.15, 0.25], ['20vh', '0vh']);

  // Transform scroll progress to move DomeGallery up and out of view
  const domeY = useTransform(scrollYProgress, [0.6, 1], ['0vh', '-100vh']);

  // Marketing projects for Masonry
  const postersList = [
    { id: "photostrip", img: photostrip, url: photostrip },
    { id: "web3", img: web3, url: web3 },
    { id: "fintech", img: fintech, url: fintech },
    { id: "design", img: design, url: design },
    { id: "heymax1", img: heymax1, url: heymax1 },
    { id: "heymax2", img: heymax2, url: heymax2 },
    { id: "heymax3", img: heymax3, url: heymax3 },
    { id: "heymax4", img: heymax4, url: heymax4 },
    { id: "pme", img: pme, url: pme },
  ];

  // Load images and calculate exact aspect ratios
  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        postersList.map(poster => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              // Calculate exact aspect ratio: height/width
              const aspectRatio = img.naturalHeight / img.naturalWidth;
              resolve({
                ...poster,
                height: aspectRatio * 1000
              });
            };
            img.onerror = () => {
              resolve({
                ...poster,
                height: 2000 // 1:1 fallback
              });
            };
            img.src = poster.img;
          });
        })
      );
      setLoadedProjects(loaded);
    };
    loadImages();
  }, []);

  const marketingProjects = loadedProjects;

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

        {/* Darker overlay for About section */}
        <motion.div
          className="fixed inset-0 w-full h-screen bg-black/50 pointer-events-none z-55"
          style={{
            opacity: aboutOpacity,
          }}
        />

        {/* About Section - appears after name fades, before DomeGallery reveals */}
        <motion.div
          className="fixed inset-0 w-full h-screen flex items-center justify-center pointer-events-none z-60"
          style={{
            opacity: aboutOpacity,
            y: aboutY
          }}
        >
          <div className="w-full flex flex-col lg:flex-row items-center">
            {/* Left side - Gwen Image */}
            <motion.div
              className="w-full lg:w-1/2 flex-shrink-0"
              style={{ opacity: aboutOpacity }}
            >
              <img
                src={gwenImg}
                alt="Gwen"
                className="w-auto h-auto object-contain rounded-3xl"
                style={{
                  height: '120vh',
                  width: 'auto',
                  minHeight: '120vh',
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))'
                }}
              />
            </motion.div>

            {/* Right side - Text content */}
            <div className="w-full lg:w-1/2 px-1 lg:px-1 flex flex-col justify-center space-y-8">
              {/* Title with quotes */}
              <motion.h3
                className="text-6xl lg:text-8xl font-black tracking-tight uppercase mb-8"
                style={{
                  opacity: aboutOpacity,
                  letterSpacing: '0.05em',
                  background: 'linear-gradient(135deg, #ffc4e1 0%, #ffb8d5 25%, #ff9dc9 50%, #ffb8d5 75%, #ffc4e1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 5px 15px rgba(255, 157, 201, 0.4)) drop-shadow(0 0 40px rgba(255, 184, 213, 0.3))',
                  textShadow: '0 3px 8px rgba(255, 157, 201, 0.4)',
                }}
              >
                <span style={{
                  position: 'relative',
                  display: 'inline-block',
                  filter: 'drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.4)) drop-shadow(-1px -1px 2px rgba(0, 0, 0, 0.2))'
                }}>
                  " ABOUT
                </span>
              </motion.h3>

              {/* Roles */}
              <motion.div
                className="space-y-2 mb-10"
                style={{ opacity: aboutOpacity }}
              >
                <p className="text-lg lg:text-xl font-bold text-white uppercase tracking-wide">
                  WEBTECH DIRECTOR FOR PD26
                </p>
                <p className="text-lg lg:text-xl font-bold text-white uppercase tracking-wide">
                  MARKETING DIRECTOR FOR PRODUCT CLUB
                </p>
                <p className="text-lg lg:text-xl font-bold text-white uppercase tracking-wide">
                  MARKETING EXECUTIVE FOR STEREOMETA
                </p>
                <p className="text-lg lg:text-xl font-bold text-white uppercase tracking-wide">
                  TECHLEAD OF MARCOMMS @ YOUTHTECHSG
                </p>
              </motion.div>

              {/* Passion section */}
              <motion.div
                className="space-y-4"
                style={{ opacity: aboutOpacity }}
              >
                <p className="text-xl lg:text-xl font-bold text-white uppercase tracking-wide mb-4">
                  PASSION FOR
                </p>
                <ul className="space-y-2 ml-8">
                  <li className="text-lg lg:text-xl text-white uppercase tracking-wide list-disc">
                    DESIGN & BRANDING
                  </li>
                  <li className="text-lg lg:text-xl text-white uppercase tracking-wide list-disc">
                    PHOTOGRAPHY
                  </li>
                  <li className="text-lg lg:text-xl text-white uppercase tracking-wide list-disc">
                    EDITING
                  </li>
                </ul>
              </motion.div>

            </div>
          </div>
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

            {/* Posters text - three states: relative (scrolling in), fixed (sticky), absolute (scrolling out) */}
            <div
              className={`flex items-center justify-center h-screen ${
                postersFixed
                  ? 'fixed top-1/2 -translate-y-1/2 right-0 w-1/2'
                  : postersAtBottom
                    ? 'absolute bottom-0 right-0 w-full'
                    : 'relative'
              }`}
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

      {/* Let's Connect Section */}
      <div className="relative w-full bg-gradient-to-b from-black via-black to-neutral-950 flex items-center justify-center overflow-hidden py-20">
        {/* Gradient blurred orbs background - continuing from previous section */}
        <div className="absolute inset-0">

          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-orange-300/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Left side - Connect Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <img
              src={connect}
              alt="Let's Connect"
              className="w-full max-w-2xl h-auto object-contain"
            />
          </motion.div>

          {/* Right side - Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="flex flex-col space-y-8"
          >
            <a
              href="https://instagram.com/gwenxdolyn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl font-bold uppercase tracking-wide hover:text-pink-400 transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/gwndolyn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl font-bold uppercase tracking-wide hover:text-blue-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
