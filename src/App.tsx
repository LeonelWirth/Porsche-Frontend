import React from "react";
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
  Stack,
  IconButton,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LawnMowerIcon from "@mui/icons-material/Grass";
import MenuIcon from "@mui/icons-material/Menu";
import heroImage from "../public/Diseño de logo Podafy.png";

const theme = createTheme({
  palette: {
    primary: { main: "#2e7d32" },
    secondary: { main: "#81c784" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        {/* HEADER */}
        <AppBar position="static" color="primary">
          {/* Usamos Container para limitar ancho SIN cortar contenido */}
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ minWidth: 0 }}
              >
                <LawnMowerIcon />
                <Typography variant="h6" noWrap>
                  Podafy
                </Typography>
              </Stack>

              {/* Menú responsive: botones grandes en md+, hamburguesa en xs-sm */}
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: "none", md: "flex" }, flexShrink: 0 }}
              >
                <Button color="inherit">Servicios</Button>
                <Button color="inherit">Nosotros</Button>
                <Button color="inherit">Contacto</Button>
              </Stack>
              <IconButton
                color="inherit"
                sx={{ display: { xs: "inline-flex", md: "none" } }}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        {/* HERO */}
        <Box sx={{ backgroundColor: "#e8f5e9", py: 8, textAlign: "center" }}>
          <Container maxWidth="lg">
            <img
              src={heroImage}
              alt="Podafy Logo"
              style={{
                width: 180,
                maxWidth: "90%",
                borderRadius: "50%",
                marginBottom: 20,
              }}
            />
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
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

        {/* SERVICIOS */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
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

        {/* CTA FINAL */}
        <Box sx={{ backgroundColor: "#1b5e20", color: "white", py: 6 }}>
          <Container maxWidth="lg">
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

        {/* FOOTER */}
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
