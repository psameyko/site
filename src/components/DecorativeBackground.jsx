const PARTICLES = Array.from({ length: 12 }).map((_, index) => ({
  id: `particle-${index}`,
  left: `${6 + index * 8}%`,
  size: `${10 + (index % 4) * 5}px`,
  delay: `${(index % 5) * 1.2}s`,
  duration: `${10 + (index % 4) * 2.5}s`
}));

function DecorativeBackground() {
  return (
    <div className="decorative-bg" aria-hidden="true">
      <div className="decorative-bg__glow decorative-bg__glow--one" />
      <div className="decorative-bg__glow decorative-bg__glow--two" />
      <div className="decorative-bg__particles">
        {PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default DecorativeBackground;
