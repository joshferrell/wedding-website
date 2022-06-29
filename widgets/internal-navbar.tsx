import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";

const InternalNavbar = () => (
  <Box
    sx={{
      bg: "green.50",
      width: "100%",
      height: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "24px",
    }}
  >
    <NextLink href="/review" passHref>
      <Link>Photo Review</Link>
    </NextLink>
    <NextLink href="/review-notes" passHref>
      <Link>Note Review</Link>
    </NextLink>
  </Box>
);

export default InternalNavbar;
