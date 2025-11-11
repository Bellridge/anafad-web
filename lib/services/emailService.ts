import { EmailData } from "@/utils/types";
import axiosInstance from "./axios";

export const subscribe = async (data: EmailData) => {
  const response = await axiosInstance.post("/subscribers", data);
  return response;
};
