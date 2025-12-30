import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DomeGallery from './DomeGallery';
import logo from '../assets/logo.png';

export default function Marketing() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to blur value (starts at 8px, ends at 0px)
  const blurValue = useTransform(scrollYProgress, [0, 0.5], [8, 0]);

  // Transform scroll progress to opacity for the name (1 to 0)
  const nameOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Transform scroll progress to scale for the name
  const nameScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '200vh' }}>
      {/* Fixed DomeGallery with dynamic blur */}
      <motion.div
        className="fixed inset-0 w-full h-screen"
        style={{
          filter: useTransform(blurValue, (v) => `blur(${v}px)`)
        }}
      >
        <DomeGallery />
      </motion.div>

      {/* Dark overlay - fades away with scroll */}
      <motion.div
        className="fixed inset-0 w-full h-screen bg-black/50 pointer-events-none z-10"
        style={{ opacity: nameOpacity }}
      />

      {/* Name Overlay that scrolls away - Holographic Style */}
      <motion.div
        className="fixed inset-0 w-full h-screen flex items-center justify-center pointer-events-none z-50 overflow-hidden"
        style={{
          opacity: nameOpacity,
          scale: nameScale
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
          {/* Holographic 3D object in center */}



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

      {/* Spacer to enable scrolling */}
      <div className="h-screen" />
    </div>
  );
}
