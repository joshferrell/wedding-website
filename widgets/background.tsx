import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

import JustMarried from "../media/just-married.svg";
import Peacock from "../media/peacock-background.svg";
import HomeBackground from "../media/home-background";

const NAV_HEIGHT = "75px";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          bg: "green.800",
        }}
      >
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <ParallaxBanner
            layers={[
              {
                children: (
                  <Image
                    src="/header-image.webp"
                    placeholder="blur"
                    blurDataURL={HomeBackground}
                    layout="fill"
                    objectFit="cover"
                    alt="Josh kissing alana on forehead"
                  />
                ),
                speed: -25,
              },
            ]}
          >
            <Box
              sx={{
                height: `calc(100vh - ${NAV_HEIGHT})`,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                zIndex: 100,
                position: "relative",
                px: "16px",
              }}
            >
              <JustMarried
                width={650}
                height={400}
                fill="white"
                title="Just married"
              />
            </Box>
          </ParallaxBanner>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: `calc(100vh - ${NAV_HEIGHT})`,
            position: "relative",
            zIndex: 3,
            "@media (max-width: 1200px)": {
              display: "none",
            },
          }}
        >
          <Peacock
            width={400}
            height={904}
            aria-hidden
            style={{
              pointerEvents: "none",
              width: "auto",
              userSelect: "none",
              marginLeft: "-10px",
              height: `calc(100vh - ${NAV_HEIGHT})`,
            }}
          />
          <Peacock
            width={400}
            height={904}
            aria-hidden
            style={{
              pointerEvents: "none",
              width: "auto",
              userSelect: "none",
              marginRight: "-10px",
              transform: "scaleX(-1)",
              height: `calc(100vh - ${NAV_HEIGHT})`,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Header;
