import { useEffect, useRef, useState } from 'react';

const CurvedLoop = ({
  marqueeText = '',
  speed = 2,
  curveAmount = 400,
  direction = 'left',
  interactive = true,
  className = '',
}) => {
  const svgRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentDirection, setCurrentDirection] = useState(direction);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  // Duplicate text for seamless loop
  const repeatedText = `${marqueeText} `.repeat(10);

  useEffect(() => {
    if (isDragging) return;

    const animate = () => {
      setOffset((prev) => {
        const newOffset = currentDirection === 'left' ? prev + speed : prev - speed;
        // Reset when offset exceeds text length for seamless loop
        if (Math.abs(newOffset) > 1000) return 0;
        return newOffset;
      });
    };

    const animationFrame = requestAnimationFrame(function loop() {
      animate();
      requestAnimationFrame(loop);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [speed, currentDirection, isDragging]);

  const handlePointerDown = (e) => {
    if (!interactive) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartOffset.current = offset;
    e.currentTarget.style.cursor = 'grabbing';
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !interactive) return;
    const deltaX = e.clientX - dragStartX.current;
    setOffset(dragStartOffset.current + deltaX * 0.5);

    // Change direction based on drag
    if (deltaX > 5) setCurrentDirection('right');
    else if (deltaX < -5) setCurrentDirection('left');
  };

  const handlePointerUp = (e) => {
    if (!interactive) return;
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
  };

  const pathId = `curve-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 2000 200"
      preserveAspectRatio="none"
      className={`w-full h-full ${interactive ? 'cursor-grab' : ''} ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ userSelect: 'none', touchAction: 'none' }}
    >
      <defs>
        <path
          id={pathId}
          d={`M 0,100 Q 500,${100 - curveAmount} 1000,100 T 2000,100`}
          fill="none"
        />
      </defs>

      <text className="fill-current" fontSize="32" fontWeight="500">
        <textPath
          href={`#${pathId}`}
          startOffset={offset}
          className="select-none"
        >
          {repeatedText}
        </textPath>
      </text>
    </svg>
  );
};

export default CurvedLoop;
