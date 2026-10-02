// Decorative Indian wedding ornaments as inline SVGs

interface OrnamentProps {
  className?: string;
}

export function DividerOrnament({ className = '' }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-champagne-300" />
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="text-champagne-300">
        <path d="M15 2 L18 12 L28 15 L18 18 L15 28 L12 18 L2 15 L12 12 Z" fill="currentColor" opacity="0.6" />
        <circle cx="15" cy="15" r="3" fill="currentColor" />
      </svg>
      <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-champagne-300" />
    </div>
  );
}

export function LotusOrnament({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 50" fill="none" className={className}>
      <path d="M50 5 C45 15, 38 25, 30 30 C25 33, 20 35, 15 35 C20 38, 28 42, 35 42 C42 42, 48 38, 50 35 C52 38, 58 42, 65 42 C72 42, 80 38, 85 35 C80 35, 75 33, 70 30 C62 25, 55 15, 50 5 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
      <line x1="50" y1="5" x2="50" y2="35" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function CornerFlourish({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M5 5 Q20 15, 30 30 Q40 45, 35 60" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="30" cy="30" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="35" cy="60" r="2" fill="currentColor" opacity="0.4" />
      <path d="M10 10 Q15 5, 25 8" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M5 15 Q8 22, 14 25" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  );
}

export function MandalaSVG({ className = '', size = 100 }: OrnamentProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      {[...Array(16)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="8"
          x2="50"
          y2="16"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
          transform={`rotate(${i * 22.5} 50 50)`}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="30"
          rx="4"
          ry="10"
          fill="currentColor"
          opacity="0.12"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function PeacockFeather({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 60 100" fill="none" className={className}>
      <path d="M30 0 Q28 30, 25 60 Q22 80, 30 95" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
      <ellipse cx="30" cy="40" rx="18" ry="25" fill="currentColor" opacity="0.08" />
      <ellipse cx="30" cy="35" rx="10" ry="14" fill="currentColor" opacity="0.15" />
      <ellipse cx="30" cy="30" rx="5" ry="7" fill="currentColor" opacity="0.25" />
      <circle cx="30" cy="28" r="3" fill="currentColor" opacity="0.4" />
      <line x1="30" y1="40" x2="30" y2="95" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}
