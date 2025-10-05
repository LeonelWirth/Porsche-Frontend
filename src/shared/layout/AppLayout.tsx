import { Box, Container } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import type { PropsWithChildren } from "react";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box minHeight="100dvh" display="flex" flexDirection="column">
      <Navbar />
      <Container sx={{ flexGrow: 1, pt: 3, color: "black" }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
