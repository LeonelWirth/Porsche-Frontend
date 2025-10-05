import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { useBooking } from "../hooks/BookingContext";
import dayjs from "../utils/time";

export default function ServiceSummary() {
  const { selectedService, date, time, professional } = useBooking();
  return (
    <Card variant="outlined" sx={{ position: "sticky", top: 16 }}>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          RESUMEN
        </Typography>
        <Stack spacing={1.25}>
          <Typography>
            <b>{selectedService?.name ?? "—"}</b>
          </Typography>
          <Divider />
          <Typography variant="body2">
            <b>Fecha:</b> {date ? dayjs(date).format("D/MM/YYYY") : "—"}
          </Typography>
          <Typography variant="body2">
            <b>Hora:</b> {time ?? "—"}
          </Typography>
          <Typography variant="body2">
            <b>Profesional:</b> {professional?.name ?? "—"}
          </Typography>
          <Divider />
          <Typography variant="body2">
            <b>Precio:</b>{" "}
            {selectedService
              ? `$${selectedService.price.toLocaleString("es-AR")}`
              : "—"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Duración: {selectedService?.durationMinutes ?? "—"} min
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
