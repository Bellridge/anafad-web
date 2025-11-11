import { Loader as Spinner } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center md:p-10 p-4">
      <Spinner className="animate-spin text-anafad-primary-blue" size={16} />
    </div>
  );
};

export default Loader;
