import type { Service } from "../shared/types/service";

export const services: Service[] = [
  { id: "barba", name: "BARBA", price: 15000, durationMinutes: 30 },
  { id: "corte", name: "CORTE", price: 27500, durationMinutes: 30 },
  {
    id: "corte-barba",
    name: "CORTE Y BARBA",
    price: 32500,
    durationMinutes: 30,
  },
  {
    id: "corte-cejas",
    name: "CORTE Y CEJAS",
    price: 30000,
    durationMinutes: 30,
  },
];
