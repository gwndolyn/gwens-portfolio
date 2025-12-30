import { motion } from 'framer-motion';

const tools = [
  { name: 'PHOTOSHOP', color: '#31A8FF', position: { top: '25%', left: '35%' }, size: 180 },
  { name: 'LIGHTROOM', color: '#31A8FF', position: { top: '30%', left: '55%' }, size: 140 },
  { name: 'CANVA', color: '#00C4CC', position: { top: '50%', left: '25%' }, size: 120 },
  { name: 'PREMIERE PRO', color: '#9999FF', position: { top: '55%', left: '45%' }, size: 130 },
  { name: 'ILLUSTRATOR', color: '#FF9A00', position: { top: '60%', left: '65%' }, size: 140 },
  { name: 'FIGMA', color: '#A259FF', position: { top: '35%', left: '70%' }, size: 110 },
];

export default function MarketingTools() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Gradient blurred orbs background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-yellow-200/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-pink-300/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-300/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-300/20 rounded-full blur-[100px]" />
      </div>

      {/* Title - Top Right */}
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-12 right-12 text-6xl lg:text-7xl font-black text-white tracking-tighter"
      >
        EDITING TECHNOLOGIES
      </motion.h2>

      {/* Floating Tool Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "backOut"
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute"
            style={{
              top: tool.position.top,
              left: tool.position.left,
              width: tool.size,
              height: tool.size,
            }}
          >
            <div
              className="w-full h-full rounded-[24px] flex items-center justify-center text-5xl font-black shadow-2xl"
              style={{
                backgroundColor: tool.color,
                color: 'white',
              }}
            >
              {tool.name.substring(0, 2)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3D Swirl decoration - Top Right */}
      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-32 right-32 w-64 h-64"
        animate={{
          rotate: [0, 10, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full blur-xl opacity-60" />
      </motion.div>

      {/* 3D Cube decoration - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-24 left-24 w-48 h-48"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >

      </motion.div>

      {/* Tool names list - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-12 right-12 text-right space-y-1"
      >
        {tools.map((tool, index) => (
          <motion.p
            key={tool.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.05 }}
            className="text-white font-black text-xl tracking-tight"
          >
            {tool.name}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
