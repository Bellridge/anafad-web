import Loader from "@/components/shared/Loader";
import { Suspense } from "react";
import Home from "../components/pages/home/Home";

export default function page() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
}
