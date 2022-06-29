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
      { image: "/our-story/13-bg.webp", speed: -15 },
      {
        children: (
          <Box sx={{ width: "100vw", height: "100vh" }}>
            <Image
              src="/our-story/13-fore.webp"
              // width={800}
              // height={462}
              layout="fill"
              objectFit="contain"
              alt=""
              aria-hidden
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
              maxWidth: [500, 900],
              fontSize: ["20px", "28px"],
              fontFamily: "Gentium Book Basic",
              width: "100%",
              textShadow: "1px 1px 2px #fff",
            }}
            textShadow="xl"
          >
            The next day Josh returned for the cup, and again they were talking
            and laughing about,
            <br />
            When Alana said “You know, you don’t have to “forget” dishes and can
            just ask to hang out!”
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
