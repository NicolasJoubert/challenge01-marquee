import React from 'react';
import Card from '../components/Card';
import Marquee from '../components/ui/Marquee';
import reviewsData from '../data/review';

// STYLE
const reviewsWrapper = 'relative w-full overflow-hidden flex flex-col gap-6';
const rightBlur =
  'pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black/70 via-transparent to-transparent blur-lg';
const leftBlur =
  'pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black/70 via-transparent to-transparent blur-lg';

export default function Reviews() {
  const firstRow = reviewsData.slice(0, reviewsData.length / 2);
  const secondRow = reviewsData.slice(reviewsData.length / 2);

  return (
    <div className={reviewsWrapper}>
      {/* Première ligne */}
      <Marquee>
        {firstRow.map((data, i) => (
          <Card key={i} {...data} />
        ))}
      </Marquee>

      {/* Deuxième ligne (en sens inverse) */}
      <Marquee reverse>
        {secondRow.map((data, i) => (
          <Card key={i} {...data} />
        ))}
      </Marquee>
      <div className={leftBlur}></div>
      <div className={rightBlur}></div>
    </div>
  );
}
