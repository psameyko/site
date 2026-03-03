import { useState } from "react";

function getRandomIndex(length) {
  if (!length) {
    return null;
  }
  return Math.floor(Math.random() * length);
}

function FinalWish({ title, wish, signature, buttonLabel, randomWishes }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const currentWish = currentIndex === null ? null : randomWishes[currentIndex];

  const handleGenerateWish = () => {
    setCurrentIndex((prevIndex) => {
      if (!randomWishes.length) {
        return null;
      }
      if (prevIndex === null) {
        return getRandomIndex(randomWishes.length);
      }
      return (prevIndex + 1) % randomWishes.length;
    });
    setIsVisible(true);
  };

  return (
    <section className="section section--final">
      <div className="final-card">
        <h2>{title}</h2>
        <p className="final-card__main">{wish}</p>
        <p className="final-card__signature">{signature}</p>
        <button className="button button--secondary" type="button" onClick={handleGenerateWish}>
          {buttonLabel}
        </button>
        {isVisible && currentWish && (
          <div className="final-card__random">
            <p className="final-card__random-text">{currentWish.text}</p>
            <p className="final-card__random-author">- {currentWish.author}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FinalWish;
