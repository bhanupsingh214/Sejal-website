import React from 'react';

interface GarmentArtProps {
  spriteId: 'a-tee' | 'a-shirt' | 'a-knit' | 'a-jacket' | 'a-dress' | 'a-trousers' | 'a-tote' | 'a-cap';
  className?: string;
  strokeWidth?: number;
}

export const GarmentArt: React.FC<GarmentArtProps> = ({
  spriteId,
  className = 'w-3/5 h-3/5',
  strokeWidth = 2.4,
}) => {
  return (
    <svg
      viewBox="0 0 104 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {spriteId === 'a-tee' && (
        <path d="M37 10 L20 19 L11 45 L25 50 L28 42 L28 108 L72 108 L72 42 L75 50 L89 45 L80 19 L63 10 C58 18 42 18 37 10 Z" />
      )}

      {spriteId === 'a-shirt' && (
        <>
          <path d="M37 10 L20 19 L11 45 L25 50 L28 42 L28 108 L72 108 L72 42 L75 50 L89 45 L80 19 L63 10 L50 22 Z" />
          <path d="M37 10 L50 22 L63 10" />
          <path d="M50 22 V108" />
        </>
      )}

      {spriteId === 'a-knit' && (
        <>
          <path d="M36 12 L18 22 L10 50 L26 56 L29 46 L29 106 L71 106 L71 46 L74 56 L90 50 L82 22 L64 12 C58 20 42 20 36 12 Z" />
          <path d="M29 97 H71" />
          <path d="M26 49 L28 56" />
          <path d="M74 49 L72 56" />
        </>
      )}

      {spriteId === 'a-jacket' && (
        <>
          <path d="M38 10 L20 19 L11 46 L25 51 L28 43 L28 108 L46 108 L46 30 Z" />
          <path d="M62 10 L54 30 L54 108 L72 108 L72 43 L75 51 L89 46 L80 19 Z" />
          <path d="M38 10 L46 30 L62 10" />
        </>
      )}

      {spriteId === 'a-dress' && (
        <>
          <path d="M37 12 L22 20 L14 44 L26 49 L29 40 L21 108 L79 108 L71 40 L74 49 L86 44 L78 20 L63 12 C58 20 42 20 37 12 Z" />
          <path d="M26 58 H74" />
        </>
      )}

      {spriteId === 'a-trousers' && (
        <>
          <path d="M30 14 H70 L74 108 H57 L50 56 L43 108 H26 Z" />
          <path d="M30 25 H70" />
        </>
      )}

      {spriteId === 'a-tote' && (
        <>
          <path d="M22 42 H78 L72 108 H28 Z" />
          <path d="M38 42 V33 A12 11 0 0 1 62 33 V42" />
        </>
      )}

      {spriteId === 'a-cap' && (
        <>
          <path d="M20 68 C20 38 80 38 80 68 Z" />
          <path d="M20 68 H93 A6 6 0 0 1 93 78 H20 Z" />
        </>
      )}
    </svg>
  );
};
