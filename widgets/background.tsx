import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

import JustMarried from "../media/just-married.svg";
import HeaderImage from "../media/header-image.webp";

const NAV_HEIGHT = "75px";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
        }}
      >
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <ParallaxBanner
            layers={[
              {
                children: (
                  <Image
                    priority
                    src={HeaderImage}
                    quality={100}
                    placeholder="blur"
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
          <Image
            aria-hidden
            alt=""
            src="/peacock-background.png"
            width={400}
            height={904}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              pointerEvents: "none",
              width: "auto",
              userSelect: "none",
              height: "100vh",
            }}
          />
          <Image
            aria-hidden
            alt=""
            src="/peacock-background.png"
            width={400}
            height={904}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              userSelect: "none",
              pointerEvents: "none",
              transform: "scaleX(-1)",
              width: "auto",
              height: "100vh",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Header;
