import { motion } from 'framer-motion';
import photoshop from '../assets/marketing/tech/photoshop.png';
import lightroom from '../assets/marketing/tech/lightroom.png';
import canva from '../assets/marketing/tech/canva.png';
import premierePro from '../assets/marketing/tech/pp.png';
import illustrator from '../assets/marketing/tech/illustrator.png';
import capcut from '../assets/marketing/tech/capcut.jpg';
import picsart from '../assets/marketing/tech/picsart.jpg';
import fresco from '../assets/marketing/tech/fresco.png';

const tools = [
  // Top row
  { name: 'FRESCO', img: fresco, position: { top: '30%', left: '30%' }, size: 130 },
  { name: 'PHOTOSHOP', img: photoshop, position: { top: '25%', left: '40%' }, size: 160 },
  { name: 'LIGHTROOM', img: lightroom, position: { top: '30%', left: '52%' }, size: 140 },
  { name: 'PICSART', img: picsart, position: { top: '32%', left: '64%' }, size: 120 },
  // Bottom row
  { name: 'CAPCUT', img: capcut, position: { top: '52%', left: '33%' }, size: 120 },
  { name: 'PREMIERE PRO', img: premierePro, position: { top: '50%', left: '45%' }, size: 130 },
  { name: 'ILLUSTRATOR', img: illustrator, position: { top: '52%', left: '57%' }, size: 140 },
  { name: 'CANVA', img: canva, position: { top: '45%', left: '70%' }, size: 100 },
];

export default function MarketingTools() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Gradient blurred orbs background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-yellow-200/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-pink-300/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-300/20 rounded-full blur-[100px]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/25 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-300/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/6 right-1/4 w-56 h-56 bg-indigo-300/25 rounded-full blur-[90px]" />

      </div>

      {/* Title - Top Right */}
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="absolute top-12 right-12 text-6xl lg:text-7xl font-black text-white tracking-tighter"
      >
        EDITING TECHNOLOGIES
      </motion.h2>

      {/* Floating Tool Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.3, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.34, 1.56, 0.64, 1],
              opacity: { duration: 0.5 }
            }}
            className="absolute"
            style={{
              top: tool.position.top,
              left: tool.position.left,
              width: tool.size,
              height: tool.size,
            }}
          >
            <img
              src={tool.img}
              alt={tool.name}
              className="w-full h-full object-contain rounded-[24px] shadow-2xl"
            />
          </motion.div>
        ))}
      </div>


      {/* Tool names list - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="absolute bottom-12 right-12 text-right space-y-1"
      >
        {tools.map((tool, index) => (
          <motion.p
            key={tool.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.7 + index * 0.05,
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-white font-black text-xl tracking-tight"
          >
            {tool.name}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
