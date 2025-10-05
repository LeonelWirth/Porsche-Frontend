import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  Button,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import type { Service } from "../../shared/types/service";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1.2}>
          <Typography variant="subtitle2" color="text.secondary">
            SERVICIO
          </Typography>
          <Typography variant="h6">{service.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {service.durationMinutes} min
          </Typography>
          <Typography fontWeight={600}>
            ${service.price.toLocaleString("es-AR")}
          </Typography>
          <AvatarGroup
            max={4}
            sx={{
              "& .MuiAvatar-root": { width: 28, height: 28, fontSize: 12 },
            }}
          >
            {[1, 2, 3].map((i) => (
              <Avatar key={i} src={`https://i.pravatar.cc/60?img=${10 + i}`} />
            ))}
          </AvatarGroup>
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          fullWidth
          component={Link}
          to={`/book/${service.id}/date`}
          data-testid={`book-${service.id}`}
        >
          Agendar servicio
        </Button>
      </CardActions>
    </Card>
  );
}
