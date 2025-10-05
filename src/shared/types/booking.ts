import type { Service } from "./service";
import type { Professional } from "./professional";

export type BookingDraft = {
  serviceId?: string;
  date?: string; // YYYY-MM-DD
  time?: string; // "2:00 pm"
  professionalId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

export type BookingState = {
  selectedService?: Service;
  date?: string;
  time?: string;
  professional?: Professional;
  draft: BookingDraft;
};
