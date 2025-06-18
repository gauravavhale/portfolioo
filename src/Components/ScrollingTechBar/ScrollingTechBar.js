// components/ScrollingTechBar.js
import React from 'react';
import styles from './ScrollingTechBar.module.css';

const techIcons = [
  'HTML5.svg',
  'CSS3.svg',
  'JavaScript.svg',
  'React.svg',
  'Bootstrap.svg',
  'jQuery.svg',
  'Postman.svg',
  'Node.js.svg',
  'MongoDB.svg',
];

export const ScrollingTechBar = () => {
  const repeatedIcons = [...techIcons, ...techIcons,...techIcons, ...techIcons]; // repeated for smooth loop

  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {repeatedIcons.map((icon, i) => (
          <img
            key={i}
            src={`/assets/icons/${icon}`} // put your icons in public/assets/icons/
            alt={`tech-icon-${i}`}
            className={styles.icon}
          />
        ))}
      </div>
    </div>
  );
};
