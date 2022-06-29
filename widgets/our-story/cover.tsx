import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";
import OurStory from "../../media/our-story.svg";

const Cover = () => (
  <ParallaxBanner
    style={{
      height: "100vh",
      position: "relative",
      display: "flex",
      justifyContent: "center",
    }}
    layers={[
      {
        image: "/our-story/cover-bg.webp",
        speed: -15,
        expanded: true,
      },
      {
        children: (
          <Box
            sx={{
              position: "absolute",
              bottom: 100,
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              alt="Josh and Alana facing each other pressing their forheads against each other."
              src="/our-story/cover-fore.webp"
              width={800}
              height={606}
            />
          </Box>
        ),
        speed: -10,
      },
      {
        children: (
          <Box sx={{ display: "flex", justifyContent: "center", mt: "20" }}>
            <OurStory
              title="Our Story"
              fill="white"
              style={{ maxWidth: 500 }}
            />
          </Box>
        ),
      },
    ]}
  />
);

export default Cover;
