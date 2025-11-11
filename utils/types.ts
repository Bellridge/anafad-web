export interface EmailData {
  email?: string;
  firstname: string;
  lastname: string;
  groups: string[];
  phone: string;
  trigger_automation: boolean;
}

export interface ToastType {
  id: string | number;
  message: string;
  type: string;
}
