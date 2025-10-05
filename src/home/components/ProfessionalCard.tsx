import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  Button,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import type { Professional } from "../../shared/types/professional";
import { Link } from "react-router-dom";

type Props = {
  professional: Professional;
  /** Ruta a la que querés mandar el CTA (por defecto un detalle del pro) */
  to?: string;
  /** Texto del CTA (por defecto “Ver agenda”) */
  ctaText?: string;
};

export default function ProfessionalCard({
  professional,
  to = `/pros/${professional.id}`,
  ctaText = "Ver agenda",
}: Props) {
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

          {professional.skills?.length ? (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {professional.skills.slice(0, 4).map((skill) => (
                <Chip size="small" key={skill} label={skill} />
              ))}
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary">
              Sin especialidades declaradas
            </Typography>
          )}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button fullWidth component={Link} to={to}>
          {ctaText}
        </Button>
      </CardActions>
    </Card>
  );
}
