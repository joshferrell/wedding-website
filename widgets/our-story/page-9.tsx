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
      { image: "/our-story/10-bg.webp", speed: -15 },
      {
        children: (
          <Box
            sx={{
              width: "1100px",
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="/our-story/10-fore.webp"
              alt="Josh smelling bread and bacon"
            />
          </Box>
        ),
        speed: 10,
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
              textShadow: "1px 1px 2px #fff",
            }}
            textShadow="xl"
          >
            Josh raced to pick up bacon, he ran down the street as fast as he
            could!
            <br />
            He wanted her to come over and thought if he had bacon for the bread
            then she would.
            <br />
            That’s when Josh started going out of his way to see her and liked
            her more and more,
            <br />
            And neither of them had any idea what all was in store.
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
