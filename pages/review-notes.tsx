import type { GetServerSidePropsContext } from "next";
import { Box, Spinner, Heading, Text } from "@chakra-ui/react";
import useSWR from "swr";
import InternalNavbar from "../widgets/internal-navbar";
import EmptyState from "../widgets/empty-state";

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
    <div>
      <InternalNavbar />
      {!data.pending.length && <EmptyState />}
      <Box
        sx={{
          maxWidth: "600px",
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
              border: "3px solid",
              borderColor: "gray.100",
              p: "24px",
            }}
          >
            <Heading size="lg" mb="12px">
              {row.name}
            </Heading>
            <Text fontSize="lg">{row.note}</Text>
          </Box>
        ))}
      </Box>
    </div>
  );
  return <div>{JSON.stringify(data)}</div>;
};

export default Main;
