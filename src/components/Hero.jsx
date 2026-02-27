function Hero({ title, eyebrow, subtitle, ctaLabel, onOpen }) {
  return (
    <section className="hero section">
      <div className="hero__content">
        <p className="hero__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <button className="button button--primary" type="button" onClick={onOpen}>
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}

export default Hero;
