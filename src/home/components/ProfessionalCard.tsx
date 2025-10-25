import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  Button,
  Avatar,
  // Chip,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function ProfessionalCard({
  professional,
}: {
  professional: any;
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1.2}>
          <Typography variant="subtitle2" color="text.secondary">
            Profesional
          </Typography>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar
              src={professional.avatar}
              alt={professional.name}
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h6">{professional.name}</Typography>
          </Stack>

          {professional.profile?.bio ? (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              <Typography variant="body2" color="text.secondary">
                {professional.profile.bio}
              </Typography>
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary">
              Sin especialidades declaradas
            </Typography>
          )}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          fullWidth
          component={Link}
          to={`/professionals/${professional.id}`}
          variant="contained"
        >
          {"Agendar Servicio"}
        </Button>
      </CardActions>
    </Card>
  );
}
