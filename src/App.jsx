import { useRef } from "react";
import Hero from "./components/Hero";
import MessageCards from "./components/MessageCards";
import ComplimentBouquet from "./components/ComplimentBouquet";
import FinalWish from "./components/FinalWish";
import DecorativeBackground from "./components/DecorativeBackground";
import {
  BOUQUET_SECTION_CONTENT,
  BOUQUET_ITEMS,
  FINAL_CONTENT,
  HERO_CONTENT,
  MESSAGE_SECTION_CONTENT,
  RANDOM_WISHES,
  THANK_YOU_CARDS
} from "./constants/content";

function App() {
  const cardsSectionRef = useRef(null);

  const scrollToCards = () => {
    cardsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page-shell">
      <DecorativeBackground />
      <main className="page">
        <Hero
          title={HERO_CONTENT.title}
          eyebrow={HERO_CONTENT.eyebrow}
          subtitle={HERO_CONTENT.subtitle}
          ctaLabel={HERO_CONTENT.ctaLabel}
          onOpen={scrollToCards}
        />
        <div ref={cardsSectionRef}>
          <MessageCards
            title={MESSAGE_SECTION_CONTENT.title}
            subtitle={MESSAGE_SECTION_CONTENT.subtitle}
            cards={THANK_YOU_CARDS}
            sectionId="message-cards"
          />
        </div>
        <ComplimentBouquet
          title={BOUQUET_SECTION_CONTENT.title}
          subtitle={BOUQUET_SECTION_CONTENT.subtitle}
          items={BOUQUET_ITEMS}
        />
        <FinalWish
          title={FINAL_CONTENT.title}
          wish={FINAL_CONTENT.wish}
          signature={FINAL_CONTENT.signature}
          buttonLabel={FINAL_CONTENT.randomWishButton}
          randomWishes={RANDOM_WISHES}
        />
      </main>
    </div>
  );
}

export default App;
