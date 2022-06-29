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
      { image: "/our-story/12-bg.webp", speed: -15 },
      {
        children: (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            <img
              src="/our-story/12-fore.webp"
              alt="Alana waving at Josh while coffee cup sits on table"
              style={{ width: "100vw", height: "auto" }}
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
              maxWidth: [500, 1200],
              color: "white",
              fontSize: ["20px", "28px"],
              fontFamily: "Gentium Book Basic",
              width: "100%",
              textShadow: "1px 1px 2px #000",
            }}
            textShadow="xl"
          >
            Josh let Alana have the leftover cobbler as she wished,
            <br />
            The next day Josh stopped over when she offered to return his dish.
            <br />
            They talked for a long time, but it was while Josh headed out when,
            <br />
            He secretly left his coffee cup there so he’d have to see her again.
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
