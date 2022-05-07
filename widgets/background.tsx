import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

import JustMarried from "../media/just-married.svg";
import peacockData from "../media/peacock-data";

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
                    src="https://res.cloudinary.com/jferrell/image/upload/q_auto,f_auto/v1651905416/header-image-1_chaqqn.webp"
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
            src="https://res.cloudinary.com/jferrell/image/upload/q_auto,f_auto/v1651903812/peacock_copy_k6adub.webp"
            width={400}
            height={904}
            blurDataURL={peacockData}
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
            src="https://res.cloudinary.com/jferrell/image/upload/q_auto,f_auto/v1651903812/peacock_copy_k6adub.webp"
            width={400}
            height={904}
            blurDataURL={peacockData}
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
