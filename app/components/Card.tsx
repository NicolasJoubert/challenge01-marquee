import Image from 'next/image.js';
import React from 'react';

// STYLE
const cardContainer =
  'relative w-64 cursor-pointer overflow-hidden p-px bg-gradient-to-b from-[#4C3182] to-[#11032C] rounded-xl';
const card = 'bg-[#0C0024] h-full p-4 rounded-xl';
const cardHeader = 'flex items-center p-4';
const userInfo = 'ml-4';
const nameStyle = 'text-sm font-medium';
const pseudonymStyle = 'text-xs text-muted-foreground';
const cardText = 'line-clamp-3 px-4 text-sm';

interface CardProps {
  profilePicture: string;
  name: string;
  pseudonym: string;
  view: string;
}

export default function Card({
  profilePicture,
  name,
  pseudonym,
  view,
}: CardProps) {
  return (
    <div className={cardContainer}>
      <figure className={card}>
        <div className={cardHeader}>
          <Image
            src={`/profile-picture/${profilePicture}`}
            alt='profile picture'
            width={32}
            height={32}
          />
          <div className={userInfo}>
            <h2 className={nameStyle}>{name}</h2>
            <h3 className={pseudonymStyle}>{pseudonym}</h3>
          </div>
        </div>
        <p className={cardText}>{view}</p>
      </figure>
    </div>
  );
}
