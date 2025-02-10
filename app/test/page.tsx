import React from 'react';
import Card from '../components/Card';

export default function TestPage() {
  const cardData = [
    {
      profilePicture: 'picture-1.webp',
      name: 'Test',
      pseudonym: 'Test',
      view: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus recusandae mollitia provident aut? Aut, distinctio amet reiciendis sed possimus praesentium odit quo laudantium et dolore culpa officiis accusantium quis!',
    },
  ];

  const cards = cardData.map((data, i) => (
    <Card
      key={i}
      profilePicture={data.profilePicture}
      name={data.name}
      pseudonym={data.pseudonym}
      view={data.view}
    />
  ));

  return (
    <div>
      Yo c'est la page de test
      {cards}
    </div>
  );
}
