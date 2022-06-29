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
            src="/our-story/6.webp"
            alt="Josh sleeping in bed"
            objectFit="cover"
            style={{ height: "100vh", width: "100vw" }}
          />
        ),
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
                fontSize: ["20px", "28px"],
                fontFamily: "Gentium Book Basic",
                width: "100%",
                textAlign: "center",
                textShadow: "1px 1px 2px #fff",
              }}
              textShadow="xl"
            >
              Josh laid down and put the pillow under his head, it was back to
              sleep,
              <br />
              And with Logan gone the whole room was silent, not even a peep.
            </Box>
          </Box>
        ),
        speed: -5,
      },
    ]}
  />
);

export default Main;
