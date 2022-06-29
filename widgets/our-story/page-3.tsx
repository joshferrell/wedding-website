import { Box } from "@chakra-ui/react";
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
      { image: "/our-story/4-bg.webp", speed: -15, expanded: true },
      {
        children: (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "100vh",
              position: "absolute",
              width: "100%",
              bottom: 0,
              left: 0,
              alignItems: "flex-end",
              "@media (max-width: 900px)": {
                "& > .right-bed": { display: "none" },
              },
            }}
          >
            <img
              src="/our-story/4-left-bed.webp"
              alt="Logan laying in bed sound asleep"
              height={500}
              width={686}
            />
            <img
              className="right-bed"
              src="/our-story/4-right-bed.webp"
              alt="Josh laying in bed with annoyed look"
              height={500}
              width={675}
            />
          </Box>
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
              fontSize: ["24px", "28px"],
              fontFamily: "Gentium Book Basic",
              color: "white",
              textShadow: "1px 1px 2px #000",
            }}
            textShadow="xl"
          >
            The alarm rang and rang but Logan was dead asleep!
            <br />
            And everyone knew that when Logan sleeps it’s incredibly deep.
            <br />
            Logans phone began ringing, Josh couldn’t take it anymore!
            <br />
            And right when he had enough, there was banging on the door.
          </Box>
        ),
      },
    ]}
  />
);

export default Main;
