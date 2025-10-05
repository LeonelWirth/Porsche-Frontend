import { Grid, Stack, Typography } from "@mui/material";
import { services } from "../../dataDummy/services";
import ServiceCard from "../components/ServiceCard";
import BreadcrumbsNav from "../../shared/components/BreadcrumbNav";
import { AppLayout } from "../../shared/layout/AppLayout";

export default function HomePage() {
  return (
    <AppLayout>
      <Stack spacing={3}>
        <BreadcrumbsNav items={[{ label: "Inicio" }]} />
        <Typography variant="h5">Servicios de barbería</Typography>

        <Grid container spacing={2}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={4} key={s.id}>
              <ServiceCard service={s} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </AppLayout>
  );
}
