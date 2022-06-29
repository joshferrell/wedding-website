import { Box } from "@chakra-ui/react";
import Image from "next/image";
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
      { image: "/our-story/15-bg.webp", speed: -15 },
      {
        children: (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/our-story/15-fore.webp"
              alt="Alana waving at Josh while coffee cup sits on table"
              style={{ height: "100vh", width: "100%", objectFit: "contain" }}
            />
          </Box>
        ),
        speed: 10,
      },
      {
        children: (
          <Box
            sx={{
              position: "absolute",
              bottom: "48px",
              left: "50%",
              transform: "translateX(-50%)",
              px: "16px",
              maxWidth: [500, 800],
              color: "white",
              fontSize: ["20px", "28px"],
              fontFamily: "Gentium Book Basic",
              width: "100%",
              textShadow: "1px 1px 2px #000",
            }}
            textShadow="xl"
          >
            That night Josh felt so full of love with his heart,
            <br />
            &quot;<strong>I love us,</strong> will you be my girlfriend?&quot;
            he asked Alana.
            <br />
            and that was the start
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
