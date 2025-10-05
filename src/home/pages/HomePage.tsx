import { Grid, Stack, Typography } from "@mui/material";
import { professionals } from "../../dataDummy/professionals";
import ProfessionalCard from "../components/ProfessionalCard";
import { AppLayout } from "../../shared/layout/AppLayout";

export default function HomePage() {
  return (
    <AppLayout>
      <Stack spacing={3}>
        <Typography variant="h5">Servicios de Jardinería</Typography>
        <Typography>
          Elige el servicio que deseas agendar y completa el formulario para
          reservar tu cita.
        </Typography>
        <Grid>
          {professionals.map((s) => (
            <Grid item xs={12} sm={6} md={4} key={s.id}>
              <ProfessionalCard professional={s} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </AppLayout>
  );
}
