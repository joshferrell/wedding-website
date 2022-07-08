import { Box } from "@chakra-ui/react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { DateTime } from "luxon";
import { ParallaxBanner } from "react-scroll-parallax";
import Header from "../widgets/background";
import HomeForm from "../widgets/home-form";

const Home: NextPage = () => (
  <Box>
    <Head>
      <title>Alana and Josh are married</title>
      <meta name="description" content="Alana and Josh are married!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <HomeForm />
    <Box
      sx={{
        "@media (max-width: 1200px)": {
          display: "none",
        },
      }}
    >
      <ParallaxBanner
        style={{
          height: "900px",
          position: "relative",
        }}
        layers={[
          {
            image: "/homepage-background.webp",
            // style: { height: 800 },
            speed: -8,
          },
          {
            children: (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Image
                  alt="Alana swinging from a palm tree"
                  src="/alana.webp"
                  height={823}
                  width={399}
                />
                <Image
                  alt="Josh sipping pina colada out of a coconut"
                  src="/josh-home.webp"
                  height={618}
                  width={281}
                />
              </Box>
            ),
            speed: 10,
          },
        ]}
      />
    </Box>
  </Box>
);

export default Home;
