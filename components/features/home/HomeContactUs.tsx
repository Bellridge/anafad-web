"use client";

import { Button } from "@/components/shared/Button";
import { useRouter } from "next/navigation";

const HomeContactUs = () => {
  // Router'
  const router = useRouter();

  return (
    <section
      className="py-33 border text-center relative"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dmbqk1irb/image/upload/v1761932875/Rectangle_55_igl8kw.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full bg-[#00000099] h-full z-1"></div>
      <h2 className="font-sans font-semibold text-3xl capitalize text-white mb-4 relative z-2">
        Contact Our Team
      </h2>
      <p className="font-sans font-normal text-md text-gray-200 text-center mb-4 relative z-2">
        Do you require a partner that integrates financial sophistication with
        global trading muscle? <br /> Connect with our team today to discuss how
        Anafad Limited can architect a superior commercial framework for your
        international operations.
      </p>

      <Button
        className="relative z-2 mt-5"
        onClick={() => router.push("/contact-us")}
      >
        Contact us
      </Button>
    </section>
  );
};

export default HomeContactUs;
