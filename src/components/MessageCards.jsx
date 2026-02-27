import { useEffect, useRef } from "react";

function MessageCards({ title, subtitle, cards, sectionId }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!cardsRef.current.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section--cards" id={sectionId}>
      <div className="section__header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className="message-card reveal"
            ref={(node) => {
              cardsRef.current[index] = node;
            }}
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MessageCards;
