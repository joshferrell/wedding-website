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
      { image: "/our-story/14-bg.webp", speed: -15 },
      {
        children: (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              height: "100vh",
            }}
          >
            <Image
              src="/our-story/14-fore.webp"
              layout="fill"
              objectFit="contain"
              alt="Josh and alana walking with two bowling balls"
            />
          </Box>
        ),
        speed: 2,
      },
      {
        children: (
          <Box>
            <Image
              alt="paper airplane"
              src="/our-story/14-plane.webp"
              width={1000}
              height={613}
            />
          </Box>
        ),
        translateX: [25, -20],
        translateY: [15, 25],
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
            They started going on dates together, but there was one very special
            day,
            <br />
            They went to the bowling alley to hang out and play.
            <br />
            Alana made a little paper airplane and when they left, they were
            tossing it in the air,
            <br />
            And as they walked back home, they were flying it back and forth the
            whole way there.
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
