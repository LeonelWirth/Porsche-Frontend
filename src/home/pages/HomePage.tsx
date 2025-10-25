// import { Grid, Stack, Typography } from "@mui/material";
// import { users } from "../../mocks/data/users";
// import ProfessionalCard from "../components/ProfessionalCard";
// import { AppLayout } from "../../shared/layout/AppLayout";
// import {
//   type User,
//   type ProProfiles,
//   pro_profiles,
// } from "../../mocks/data/users";

// const matchProsData = function (
//   role: string,
//   users: User[],
//   proProfiles: ProProfiles[]
// ) {
//   // Filtramos usuarios por rol
//   const filteredUsers = users.filter((u) => u.role === role);

//   // "Aumentamos" la data con su perfil si aplica
//   const result = filteredUsers.map((user) => {
//     const profile = proProfiles.find((p) => p.user_id === user.id);
//     return {
//       ...user,
//       profile: profile || null, // null si no tiene perfil asociado
//     };
//   });

//   return result;
// };

// export default function HomePage() {
//   const professionals = matchProsData("professional", users, pro_profiles);
//   return (
//     <AppLayout>
//       <Stack spacing={3}>
//         <Typography variant="h5">Servicios de Jardinería</Typography>
//         <Typography>
//           Elige el servicio que deseas agendar y completa el formulario para
//           reservar tu cita.
//         </Typography>
//         <Grid>
//           {professionals
//             .filter((elem) => elem.role === "professional")
//             .map((s) => (
//               <Grid item xs={12} sm={6} md={4} key={s.id}>
//                 <ProfessionalCard professional={s} />
//               </Grid>
//             ))}
//         </Grid>
//       </Stack>
//     </AppLayout>
//   );
// }
