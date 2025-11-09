import React from 'react';

const NUM_HEARTS = 20;

const BackgroundAnimation: React.FC = () => {
  const hearts = Array.from({ length: NUM_HEARTS }).map((_, i) => {
    const style: React.CSSProperties = {
      left: `${Math.random() * 100}vw`,
      fontSize: `${Math.random() * 1.5 + 1}rem`, // from 1rem to 2.5rem
      animationDuration: `${Math.random() * 8 + 7}s`, // from 7s to 15s
      animationDelay: `${Math.random() * 10}s`, // from 0s to 10s
    };
    return (
      <span key={i} className="heart" style={style} aria-hidden="true">
        ❤️‍🩹
      </span>
    );
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      {hearts}
    </div>
  );
};

export default BackgroundAnimation;
