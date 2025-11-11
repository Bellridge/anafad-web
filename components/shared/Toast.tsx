import { ToastType } from "@/utils/types";

interface Props {
  text: ToastType;
}

const Toast: React.FC<Props> = ({ text }) => {
  return (
    <div
      className={`px-4 py-2 rounded shadow text-white font-sm slideDown ${
        text.type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
      style={{
        animation: "slideDown 0.3s ease-out",
      }}
    >
      {text.message}
    </div>
  );
};

export default Toast;
