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
      { image: "/our-story/5-bg.webp", speed: -15, expanded: true },
      {
        children: (
          <Image
            src="/our-story/5-fore.webp"
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              minWidth: ["100%", "100%", "900px"],
              width: ["100%", "60vw"],
              height: "auto",
            }}
          />
        ),
        speed: -5,
      },
      {
        children: (
          <Box
            sx={{
              mt: "80px",
              mx: "auto",
              px: "16px",
              maxWidth: 900,
              fontSize: ["20px", "28px"],
              fontFamily: "Gentium Book Basic",
              color: "white",
              textShadow: "1px 1px 2px #000",
            }}
            textShadow="xl"
          >
            Josh opened the door with bags under his eyes and messy bed hair,
            <br />
            And that&apos;s when he saw the future love of his life, standing
            right there.
            <br />
            Logan&apos;s friends dragged him out of bed and they headed to their
            race,
            <br />
            Josh didn&apos;t pay them any mind and still had an annoyed look on
            his face.
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
