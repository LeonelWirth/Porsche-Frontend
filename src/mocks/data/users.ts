export type User = {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  phone: string;
  role: "client" | "professional" | "admin";
  created_at: string;
  updated_at: string;
};

export type ProProfiles = {
  id: number;
  user_id: number;
  address_id: number;
  bio: string;
  vehicle: "bike" | "motorbike" | "car";
  has_vehicle: boolean;
  rating_avg: number;
  raitings_count: number;
  coverage_km: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export const users: User[] = [
  {
    id: 1,
    email: "usuario_admin@porsche.gt",
    password_hash: "admin123",
    name: "EladMin",
    phone: "123456789",
    role: "admin",
    created_at: "",
    updated_at: "",
  },
  {
    id: 2,
    email: "usuario_cliente@porsche.gt",
    password_hash: "cliente123",
    name: "carmen",
    phone: "123456789",
    role: "client",
    created_at: "",
    updated_at: "",
  },
  {
    id: 3,
    email: "usuario_profesional1@porsche.gt",
    password_hash: "profesional123",
    name: "jose1",
    phone: "123456789",
    role: "professional",
    created_at: "",
    updated_at: "",
  },
  {
    id: 4,
    email: "usuario_profesional2@porsche.gt",
    password_hash: "profesional123",
    name: "jose2",
    phone: "123456789",
    role: "professional",
    created_at: "",
    updated_at: "",
  },
  {
    id: 5,
    email: "usuario_profesional3@porsche.gt",
    password_hash: "profesional123",
    name: "jose3",
    phone: "123456789",
    role: "professional",
    created_at: "",
    updated_at: "",
  },
];

// export const pro_profiles: Pro_Profiles[] = [
//   {
//     id: 1,
//     user_id: 3,
//     address_id: 1,
//     bio: "Hola, soy jose1 y me encanta la jardinería. Tengo 5 años de experiencia en el cuidado de jardines y plantas. Me especializo en diseño de jardines y mantenimiento de áreas verdes. Estoy aquí para ayudarte a crear y mantener un espacio verde hermoso y saludable.",
//     vehicle: "bike",
//     has_vehicle: true,
//     rating_avg: 4.8,
//     raitings_count: 120,
//     coverage_km: 15,
//     is_active: true,
//     created_at: "",
//     updated_at: "",
//   },
//   {
//     id: 2,
//     user_id: 4,
//     address_id: 2,
//     bio: "Hola, soy jose2 y me encanta la jardinería. Tengo 5 años de experiencia en el cuidado de jardines y plantas. Me especializo en diseño de jardines y mantenimiento de áreas verdes. Estoy aquí para ayudarte a crear y mantener un espacio verde hermoso y saludable.",
//     vehicle: "motorbike",
//     has_vehicle: true,
//     rating_avg: 4.5,
//     raitings_count: 98,
//     coverage_km: 20,
//     is_active: true,
//     created_at: "",
//     updated_at: "",
//   },
//   {
//     id: 3,
//     user_id: 5,
//     address_id: 3,
//     bio: "Hola, soy jose3 y me encanta la jardinería. Tengo 5 años de experiencia en el cuidado de jardines y plantas. Me especializo en diseño de jardines y mantenimiento de áreas verdes. Estoy aquí para ayudarte a crear y mantener un espacio verde hermoso y saludable.",
//     vehicle: "car",
//     has_vehicle: true,
//     rating_avg: 4.9,
//     raitings_count: 150,
//     coverage_km: 25,
//     is_active: true,
//     created_at: "",
//     updated_at: "",
//   },
// ];
