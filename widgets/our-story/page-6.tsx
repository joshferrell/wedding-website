import { Box, Image } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

const Main = () => (
  <ParallaxBanner
    style={{
      height: "100vh",
      position: "relative",
      display: "flex",
      justifyContent: "center",
    }}
    layers={[
      {
        children: (
          <Image
            src="/our-story/7-bg.webp"
            alt="Josh driving a car"
            objectFit="cover"
            style={{ height: "100vh", width: "100vw", transform: "scale(1.3)" }}
          />
        ),
        translateX: [10, 0],
      },
      {
        children: (
          <Box
            sx={{ display: "flex", alignItems: "flex-end", height: "100vh" }}
          >
            <Box
              sx={{
                mb: "48px",
                mx: "auto",
                px: "16px",
                maxWidth: [500, 900],
                fontSize: ["23px", "36px"],
                fontFamily: "Gentium Book Basic",
                width: "100%",
                color: "white",
                textAlign: "center",
                textShadow: "1px 1px 2px #000",
              }}
              textShadow="xl"
            >
              After their day together at the quarry, Josh just knew
              <br />
              That he started to like Alana, and hoped that she liked him too.
            </Box>
          </Box>
        ),
        speed: -5,
      },
    ]}
  />
);

export default Main;
