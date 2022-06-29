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
      { image: "/our-story/11-bg.webp", speed: -15 },
      {
        children: (
          <Box
            sx={{
              position: "absolute",
              top: ["100px", "100px", 0],
              height: ["700px", "700px", "100vh"],
              width: ["300px", "100vw", "100vw"],
              left: 0,
            }}
          >
            <Image
              src="/our-story/11-fore.webp"
              layout="fill"
              objectFit="cover"
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
            Some time had passed by when Alana hosted a potluck dinner,
            <br />
            Josh brought his blueberry nectarine cobbler with amaretti cookie
            topping, it’s always a winner!
            <br />
            Oh, how quickly Alana’s cobbler slice was done,
            <br />
            And after Alana took her first bite, she knew that Josh was the one.
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
