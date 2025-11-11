import { useToast } from "@/context/ToastContext";
import { useState, useCallback } from "react";
import useError from "./useError";

type RequestFn<T = any, Args extends any[] = any[]> = (
  ...args: Args
) => Promise<T>;

interface RequestState<T = any> {
  data: T | null;
  loading: boolean;
  error: unknown | null;
}

interface RequestOptions {
  successMessage?: string;
  errorMessage?: string;
}

export const useRequest = <T = any>() => {
  const [state, setState] = useState<RequestState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const { handleError } = useError();
  const { success, error: showError } = useToast();

  const makeRequest = useCallback(
    async <Args extends any[]>(
      requestFn: RequestFn<T, Args>,
      ...argsAndOptions: [...Args, RequestOptions?]
    ): Promise<T> => {
      const maybeOptions = argsAndOptions[argsAndOptions.length - 1];
      const hasOptions =
        maybeOptions &&
        typeof maybeOptions === "object" &&
        ("successMessage" in maybeOptions || "errorMessage" in maybeOptions);

      const options = hasOptions ? (maybeOptions as RequestOptions) : {};
      const args = hasOptions
        ? (argsAndOptions.slice(0, -1) as Args)
        : (argsAndOptions as any);

      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const response = await requestFn(...args);

        const message =
          options.successMessage ||
          (response as any)?.data?.message ||
          "Action carried out successfully";

        const data: T = (response as any)?.data ?? response;
        success(message);

        setState((prev) => ({ ...prev, data }));
        return data;
      } catch (err: unknown) {
        setState((prev) => ({ ...prev, error: err }));

        if (options.errorMessage) {
          showError(options.errorMessage);
        } else {
          handleError(err);
        }

        throw err;
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    },
    [handleError, success, showError]
  );

  return { ...state, makeRequest };
};
