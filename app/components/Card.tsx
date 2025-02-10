import Image from 'next/image.js';
import React from 'react';

// STYLE
const cardContainer =
  'bg-card border-border border rounded-xl w-[287px] h-[160px] cursor-pointer';
const cardHeader = 'flex items-center ml-6 mt-4';
const userInfo = 'ml-4';
const nameStyle = 'text-sm ';
const pseudonymStyle = 'text-[10px] text-muted-foreground';
const cardText = 'line-clamp-3 ml-6 mr-6 mt-[10px]  text-sm';

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
    </div>
  );
}
