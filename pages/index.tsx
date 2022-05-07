import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../widgets/background";
import HomeForm from "../widgets/home-form";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Alana and Josh are married</title>
      <meta name="description" content="Alana and Josh are married!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Box sx={{ bg: "green.800" }}>
      <HomeForm />
    </Box>
  </div>
);

export default Home;
