import { useMemo, useState } from "react";

function ComplimentBouquet({ title, subtitle, items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCompliment = useMemo(
    () => items[activeIndex]?.compliment ?? "",
    [activeIndex, items]
  );

  return (
    <section className="section section--bouquet" aria-label="Букет комплиментов">
      <div className="section__header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="bouquet" role="group" aria-label="Интерактивные комплименты">
        {items.map((item, index) => {
          const angle = (360 / items.length) * index;
          return (
            <button
              key={item.label}
              type="button"
              className={`bouquet__petal ${index === activeIndex ? "is-active" : ""}`}
              style={{ "--angle": `${angle}deg` }}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
              aria-label={item.label}
            >
              <span>{item.label}</span>
            </button>
          );
        })}
        <div className="bouquet__center" aria-hidden="true">
          8
        </div>
      </div>

      <div className="bouquet__message" role="status" aria-live="polite">
        {activeCompliment}
      </div>
    </section>
  );
}

export default ComplimentBouquet;
