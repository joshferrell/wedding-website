import { Box, Heading } from "@chakra-ui/react";

const EmptyState = () => (
  <Box
    sx={{
      margin: "64px auto",
      maxWidth: 800,
      bg: "green.50",
      height: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6px",
      border: "1px dashed",
      borderColor: "green.200",
    }}
  >
    <Heading size="lg">Nothing to review!</Heading>
  </Box>
);

export default EmptyState;
