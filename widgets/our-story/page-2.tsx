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
      { image: "/our-story/3-bg.webp", speed: -15, expanded: true },
      {
        children: (
          <Box
            sx={{
              position: "absolute",
              left: 200,
              bottom: 0,
              "@media (max-width: 900px)": {
                left: -40,
                bottom: 100,
              },
            }}
          >
            <Image
              src="/our-story/3-bed.webp"
              alt="Josh laying in bed with annoyed look"
              height={515}
              width={900}
            />
          </Box>
        ),
        speed: -5,
      },
      {
        children: (
          <Box
            sx={{
              "@media (max-width: 800px)": {
                width: 400,
                height: "auto",
              },
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <Image
              src="/our-story/3-table.webp"
              alt=""
              aria-hidden
              height={349}
              width={600}
            />
          </Box>
        ),
        speed: 40,
        translateY: [-3, 0],
      },
      {
        children: (
          <Box
            sx={{
              mt: "80px",
              mx: "auto",
              px: "16px",
              maxWidth: 900,
              fontSize: ["16px", "28px"],
              fontFamily: "Gentium Book Basic",
              color: "white",
              textShadow: "1px 1px 2px #000",
            }}
            textShadow="xl"
          >
            It was 5am one Saturday in college, when Josh&apos;s patience level
            began to drop,
            <br /> He was trying to sleep as his roommate Logan&apos;s alarm was
            ringing non-stop.
            <br />
            Logan was supposed to wake up to join his friends on a 5k race,{" "}
            <br />
            But in this moment Josh was simply annoyed, it was written all over
            his face.
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
