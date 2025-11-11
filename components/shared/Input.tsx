"use client";

import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { cn } from "@/lib/helpers/tailwind";
import { Check, Eye, EyeClosed, Info, Loader } from "lucide-react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  style?: React.CSSProperties;
  onKeyup?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  loading?: boolean;
  className?: string;
  label?: string;
  error?: string;
  setError?: Dispatch<SetStateAction<Record<string, string>>>;
  validator?: (text: string) => string | undefined;
  id: string;
  success?: boolean;
  tip?: string;
};

function Input({
  className,
  type,
  label,
  id,
  error,
  setError,
  validator,
  loading,
  success,
  tip,
  readOnly,
  ...props
}: InputProps) {
  const [data, setData] = useState("");
  const [passwordIsVisible, setPasswordisVisible] = useState(false);

  useEffect(() => {
    setData((props?.value as string) ?? "");
  }, [props.value]);

  return (
    <div className="mb-4 relative">
      <div
        className={cn(
          `group w-full h-16 border rounded-2xl py-3 px-4 transition-all`,
          error &&
            "border-red-200 focus-within:border-red-100 focus-within:shadow-[0_0_0_2px_#FDD9D3]",
          !error &&
            !readOnly &&
            "border-gray-200 focus-within:border-anafad-primary-blue focus-within:shadow-[0_0_0_4px_#001f3f40]"
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "block text-label text-xs font-medium mb-1 text-(--color-input-label)",
              error && "group-focus-within:text-red-500",
              !error &&
                !readOnly &&
                "group-focus-within:text-(--color-text-link)"
            )}
          >
            {label}
          </label>
        )}

        <div className="relative h-full">
          <input
            type={
              type === "password"
                ? passwordIsVisible
                  ? "text"
                  : "password"
                : type
            }
            id={id}
            data-slot="input"
            className={cn(
              "bg-transparent w-full border-none outline-none shadow-none pl-0 focus-visible:ring-0 focus-visible:border-none text-sm font-medium",
              !label && "h-full",
              className
            )}
            readOnly={readOnly}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.onChange?.(e);
            }}
            onBlur={() => {
              const text = validator?.(data) ?? "";
              setError?.((prevState) => ({
                ...prevState,
                [id as string]: text,
              }));
            }}
            autoComplete={props.autoComplete || "off"}
            {...props}
          />
        </div>

        {type === "password" &&
          (passwordIsVisible ? (
            <span
              className="absolute top-0 bottom-0 my-auto right-6 flex items-center justify-center z-10 cursor-pointer select-none"
              onClick={() => setPasswordisVisible((prevState) => !prevState)}
            >
              <Eye size={16} color="#A4A7AE" strokeWidth={2} />
            </span>
          ) : (
            <span
              className="absolute right-6 top-0 h-full flex items-center justify-center z-10 cursor-pointer select-none"
              onClick={() => setPasswordisVisible((prevState) => !prevState)}
            >
              <EyeClosed size={16} color="#A4A7AE" strokeWidth={2} />
            </span>
          ))}

        {loading && (
          <Loader
            className="animate-spin absolute top-0 bottom-0 my-auto right-6"
            size={16}
          />
        )}
        {success && (
          <Check
            className="absolute top-0 bottom-0 my-auto right-6 text-green-500"
            size={16}
          />
        )}
      </div>

      {error && (
        <p className="text-red-500 font-medium text-xs mt-2 ml-4">{error}</p>
      )}

      {tip && (
        <div className="flex items-center gap-1 mt-1">
          <Info fill="#A4A7AE" color="#fff" size={12} />
          <p className="text-gray-1100 font-medium text-xs">{tip}</p>
        </div>
      )}
    </div>
  );
}

export { Input };
