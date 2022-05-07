import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

import JustMarried from "../media/just-married.svg";
import HeaderImage from "../media/header-image.webp";

const NAV_HEIGHT = "75px";

const Header = () => {
  const peacockDataURL =
    "data:image/png;base64,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";

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
                    src="/header-image.webp"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCABSAHsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpKQ0ZpCaBCGmmnE0wmgBDTTSk0wmgYUlBNJmgBaKbmjNAC0GkzSZoEKabRmkzTAWkpM0ZoA0M0hNJmkJpDAmmE0pNMJoACaYTQTTCaAFJpM00mm5oGPzRmmZpM0gJM0maZmjNMQ/NJmm5pM0AOzRmm5ozTEaNITRSGkMaTTCaeajNADSaYTTjTDQAhNNJpTTaBhmjNFFIYZozRRQIM0ZpKKYgooooA0qQ06kNAEZphqQ0w0ARmmmnkU0igBhFJin4pMUDGYpcU/FGKQDMUmKkxSYoAZikxTyKQimIZRTsUmKANOmmnUhoAYaYakNMNADCKaRTzTaAG4oxTqXFADcUuKdijFADcUhFPxSGkBGRTSKkNNNMBmKTFONJQBo000UUANNNNFFADDSUUUAJS0UUALS0UUAFNNFFAhpppoooGNNFFFAH/9k="
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
            src="/peacock-background.webp"
            width={400}
            height={904}
            blurDataURL={peacockDataURL}
            placeholder="blur"
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
            placeholder="blur"
            src="/peacock-background.webp"
            width={400}
            height={904}
            blurDataURL={peacockDataURL}
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
