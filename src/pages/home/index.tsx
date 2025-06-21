import Hero from "./Hero";
import CategoriesSection from "@/components/shared/CategorySection";
import SpeakerSection from "./SpeakerSection";
import EarphonesSection from "./EarphonesSection";
import StoreOverviewSection from "@/components/shared/StoreOverviewSection";

const Home = () => {
  return (
    <section>
      <Hero />
      <CategoriesSection/>
      <SpeakerSection/>
      <EarphonesSection/>
      <StoreOverviewSection/>
    </section>
  );
};

export default Home;
