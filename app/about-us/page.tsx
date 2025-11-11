import AboutUsHero from "@/components/features/about-us/AboutUsHero";
import HomeContactUs from "@/components/features/home/HomeContactUs";
import HomeFullSpectrum from "@/components/features/home/HomeFullSpectrum";
import HomeServices from "@/components/features/home/HomeServices";
import Loader from "@/components/shared/Loader";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AboutUsHero />
      <HomeServices showHeader={false} />
      <HomeFullSpectrum />
      <HomeContactUs />
    </Suspense>
  );
};

export default page;
