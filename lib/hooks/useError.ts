import { useToast } from "@/context/ToastContext";

const useError = () => {
  const toast = useToast();

  const handleError = (err: any) => {
    toast.error(err?.data || err.message);
  };

  return { handleError };
};

export default useError;
