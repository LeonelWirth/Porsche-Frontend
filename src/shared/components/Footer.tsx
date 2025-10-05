import { Box, Typography } from "@mui/material";

export const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: "100vw",
      borderTop: 1,
      borderColor: "divider",
      py: 3,
      mt: 4,
      backgroundColor: "white",
    }}
  >
    <Typography variant="body2" color="text.secondary" align="center">
      Desarrollado por AgendaPro (clon UI) — demo educativa
    </Typography>
  </Box>
);
