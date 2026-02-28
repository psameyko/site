import { useState } from "react";

function getRandomWish(wishes, previous) {
  if (!wishes.length) {
    return null;
  }
  if (wishes.length === 1) {
    return wishes[0];
  }

  let nextWish = previous;
  while (nextWish === previous) {
    nextWish = wishes[Math.floor(Math.random() * wishes.length)];
  }
  return nextWish;
}

function FinalWish({ title, wish, signature, buttonLabel, randomWishes }) {
  const [currentWish, setCurrentWish] = useState(randomWishes[0] ?? null);
  const [isVisible, setIsVisible] = useState(false);

  const handleGenerateWish = () => {
    setCurrentWish((prev) => getRandomWish(randomWishes, prev));
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
