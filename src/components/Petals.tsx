import { useEffect, useState } from 'react';

interface PetalConfig {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
}

const PETAL_COUNT = 18;

// SVG petal shape
function PetalShape({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 2 C28 8, 36 16, 32 26 C30 32, 24 38, 20 36 C16 38, 10 32, 8 26 C4 16, 12 8, 20 2 Z"
        fill="#F0B4B4"
        opacity="0.7"
      />
      <path
        d="M20 6 C26 11, 32 18, 29 25 C27 30, 23 34, 20 32 C17 34, 13 30, 11 25 C8 18, 14 11, 20 6 Z"
        fill="#E89090"
        opacity="0.5"
      />
    </svg>
  );
}

export default function Petals() {
  const [petals, setPetals] = useState<PetalConfig[]>([]);

  useEffect(() => {
    const configs: PetalConfig[] = Array.from({ length: PETAL_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 20,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.4,
      rotation: Math.random() * 360,
    }));
    setPetals(configs);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          <PetalShape size={p.size} />
        </div>
      ))}
    </div>
  );
}
