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
      { image: "/our-story/8-bg.webp", speed: -10, expanded: true },
      {
        children: (
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <Image
              src="/our-story/8-fore.webp"
              width={1200}
              height={919}
              alt="Alana and Josh swimming in the water"
            />
          </Box>
        ),
        speed: -5,
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
              textAlign: "center",
              textShadow: "1px 1px 2px #fff",
            }}
            textShadow="xl"
          >
            The next year Logan invited some friends to the quarry, he knew
            it&apos;d be fun!
            <br />
            So, Logan, Alana, and Josh gathered for a day in the sun.
            <br />
            Josh and Alana jumped off of the cliffs together and swam all over
            the place,
            <br />
            They talked and laughed and couldn&apos;t keep a smile off of their
            face.
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
