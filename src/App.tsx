import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LawnMowerIcon from "@mui/icons-material/Grass";
import heroImage from "../public/Diseño de logo Podafy.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32",
    },
    secondary: {
      main: "#81c784",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100vw" }}>
        <AppBar position="static" color="primary" sx={{ paddingY: 1 }}>
          <Toolbar>
            <LawnMowerIcon sx={{ mr: 2 }} />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Podafy
            </Typography>
            <Button color="inherit">Servicios</Button>
            <Button color="inherit">Nosotros</Button>
            <Button color="inherit">Contacto</Button>
          </Toolbar>
        </AppBar>

        <Box sx={{ backgroundColor: "#e8f5e9", py: 8, textAlign: "center" }}>
          <Container>
            <img
              src={heroImage}
              alt="Podafy Logo"
              style={{ width: 160, borderRadius: "50%", marginBottom: 20 }}
            />
            <Typography variant="h3" gutterBottom>
              Mantené tu jardín perfecto con Podafy
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Servicio profesional de corte y mantenimiento de césped en tu
              zona.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{ mt: 3 }}
            >
              Pedí tu presupuesto
            </Button>
          </Container>
        </Box>

        <Container sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Nuestros Servicios
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Corte de Césped",
                desc: "Cortes regulares o únicos para mantener tu jardín impecable.",
              },
              {
                title: "Mantenimiento de Jardines",
                desc: "Control de malezas, fertilización y cuidado estacional.",
              },
              {
                title: "Diseño y Paisajismo",
                desc: "Transformamos tu espacio verde en un entorno único.",
              },
            ].map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ backgroundColor: "#1b5e20", color: "white", py: 6 }}>
          <Container>
            <Typography variant="h5" align="center" gutterBottom>
              ¿Listo para un jardín espectacular?
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              Contactanos y descubrí cómo Podafy puede mantener tu jardín verde,
              prolijo y saludable todo el año.
            </Typography>
            <Box textAlign="center">
              <Button variant="contained" color="secondary" size="large">
                Contactar Ahora
              </Button>
            </Box>
          </Container>
        </Box>

        <Box
          sx={{
            backgroundColor: "#2e7d32",
            color: "white",
            textAlign: "center",
            py: 2,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Podafy. Todos los derechos reservados.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
