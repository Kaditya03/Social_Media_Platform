import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <Stack w="100vw" minH="100vh" bg="#FCFCFC">
      <Navbar />
      <Box w="100%">{children}</Box>
    </Stack>
  );
}
