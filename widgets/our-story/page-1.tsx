import { Box } from "@chakra-ui/react";
import Flourish from "../../media/flourish.svg";

const PageOne = () => (
  <Box
    sx={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      svg: {
        display: ["none", "block", "block"],
      },
    }}
  >
    <Flourish style={{ width: 800 }} />
    <Box
      fontSize={["24px", "24px", "36px"]}
      sx={{
        width: "100%",
        px: 3,
        mt: "-30px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "100",
        maxWidth: [400, 420, 600],
        textAlign: "center",
        mx: "auto",
        fontFamily: "Gentium Book Basic",
      }}
    >
      Alana is Josh&apos;s true love, there is no one he&apos;d put above, And
      this here is the story of their magical love.
    </Box>
  </Box>
);

export default PageOne;
