import HomeContactUs from "@/components/features/home/HomeContactUs";
import HomeFullSpectrum from "@/components/features/home/HomeFullSpectrum";
import HomeHero from "@/components/features/home/HomeHero";
import HomeMission from "@/components/features/home/HomeMission";
import HomeServices from "@/components/features/home/HomeServices";

const Home = () => {
  return (
    <section>
      <HomeHero />
      <HomeMission />
      <HomeServices />
      <HomeFullSpectrum />
      <HomeContactUs />
    </section>
  );
};

export default Home;
