import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: string;
  repeat?: number;
}

const marqueeWrapper = 'relative w-full overflow-hidden whitespace-nowrap';
const marqueeContent = 'flex min-w-max gap-4';
const marqueeAnimation = {
  normal: 'animate-marquee',
  reverse: 'animate-marquee-reverse',
};
const marqueeItem = 'flex space-x-4';

export default function Marquee({
  children,
  reverse = false,
  speed = '80s',
  repeat = 4,
}: MarqueeProps) {
  const marqueeClass = `${marqueeContent} ${reverse ? marqueeAnimation.reverse : marqueeAnimation.normal}`;

  return (
    <div className={marqueeWrapper}>
      <div className={marqueeClass} style={{ animationDuration: speed }}>
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div key={i} className={marqueeItem}>
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}
