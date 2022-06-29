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
      { image: "/our-story/9-bg.webp", speed: 0 },
      {
        children: (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              width: "950px",
              mx: "auto",
              overflow: "hidden",
              mt: "250px",
            }}
          >
            <img
              src="/our-story/9-fore.webp"
              alt="Alana and Josh swimming in the water"
              style={{ height: "auto", width: "100%", overflow: "hidden" }}
            />
          </Box>
        ),
        scale: [1, 1.3],
      },
      {
        children: (
          <Box
            sx={{
              mt: "48px",
              mx: "auto",
              px: "16px",
              maxWidth: [500, 1200],
              fontSize: ["20px", "28px"],
              fontFamily: "Gentium Book Basic",
              width: "100%",
              color: "white",
              textShadow: "1px 1px 2px #000",
            }}
            textShadow="xl"
          >
            They started to text each other, they each would often send a joke
            or even a funny pun,
            <br />
            And they always laughed behind their screens at each and every one.
            <br />
            Alana sent a video of bacon when an idea popped into Josh’s head,
            <br />
            And he asked her if she wanted to come over for some bacon and fresh
            bread.
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
