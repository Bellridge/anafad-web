import ContactUs from "@/components/pages/conact-us/ContactUs";
import Loader from "@/components/shared/Loader";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ContactUs />
    </Suspense>
  );
};

export default page;
