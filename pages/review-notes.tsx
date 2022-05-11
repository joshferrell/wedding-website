import type { GetServerSidePropsContext } from "next";
import { Box, Spinner, Heading, Text, Button } from "@chakra-ui/react";
import useSWR from "swr";

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const token = req.cookies?.token;

  if (!token) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }

  return { props: {} };
};

const Main: React.FC = () => {
  const { data } = useSWR(
    "https://api.sheety.co/4c24160bcee10740d98a2293c9f511fc/noteStorage/pending",
    async (args) => {
      const res = await fetch(args);
      return res.json();
    }
  );

  console.log(data);
  if (!data) return <Spinner />;

  return (
    <Box
      sx={{
        maxWidth: "500px",
        display: "flex",
        flexFlow: "column nowrap",
        gap: "32px",
        m: "32px auto",
        width: "100%",
      }}
    >
      {data.pending.map((row: any) => (
        <Box
          key={row.name}
          sx={{
            boxShadow: "sm",
            borderRadius: "8px",
            bg: "gray.100",
            p: "24px",
          }}
        >
          <Heading size="lg">{row.name}</Heading>
          <Text fontSize="lg">{row.note}</Text>
          <Box sx={{ display: "flex", gap: "16px", mt: "16px" }}>
            <Button colorScheme="blue">Approve</Button>
            <Button colorScheme="blue" variant="outline">
              Reject
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
  return <div>{JSON.stringify(data)}</div>;
};

export default Main;
