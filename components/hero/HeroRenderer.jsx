import CarouselHero from "./CarouselHero";
import StorytellerHero from "./StorytellerHero";
import ImmersiveHero from "./ImmersiveHero";
import siteData from "../../data/site.json";

export default function HeroRenderer() {
  const { homepage: { heroVariant, heroSubVariant, heroCTA, carouselSlides, introContent }, restaurant } = siteData;

  const props = { heroSubVariant, heroCTA, carouselSlides, introContent, restaurant };

  if (heroVariant === "carousel") return <CarouselHero {...props} />;
  if (heroVariant === "storyteller") return <StorytellerHero {...props} />;
  if (heroVariant === "immersive") return <ImmersiveHero {...props} />;

  return null;
}
