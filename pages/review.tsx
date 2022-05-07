import jwt from "jsonwebtoken";
import AWS from "aws-sdk";
import { useState } from "react";
import type { GetServerSidePropsContext } from "next";
import { Box, Button, Heading } from "@chakra-ui/react";

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const Bucket = process.env.AWS_BUCKET as string;
  const token = req.cookies?.token;
  if (!token) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }

  try {
    jwt.verify(token as string, process.env.TOKEN_SECRET as string);
    AWS.config.update({ region: "us-west-1" });
    const s3 = new AWS.S3();
    const { Contents = [] } = await s3
      .listObjects({ Bucket, Prefix: "unreviewed" })
      .promise();

    const urls = Contents.map(({ Key }) => ({
      url: s3.getSignedUrl("getObject", { Bucket, Key }),
      key: Key,
    }));

    return { props: { urls } };
  } catch (err) {
    console.warn(err);
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
};

const Main: React.FC<{ urls: { url: string; key: string }[] }> = ({
  urls: urlProp,
}) => {
  const [urls, updateUrls] = useState(urlProp);

  if (!urls.length) {
    return (
      <Box
        sx={{
          margin: "64px auto",
          maxWidth: 800,
          bg: "green.50",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          border: "1px dashed",
          borderColor: "green.200",
        }}
      >
        <Heading size="lg">Nothing to review!</Heading>
      </Box>
    );
  }

  const makeReview = (approved: boolean, fileName: string) => async () => {
    const res = await fetch("/api/aws-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName,
        approved,
      }),
    });

    const data = await res.json();
    if (!data.success) alert("error");

    updateUrls(urls.filter((x) => x.key !== fileName));
  };

  return (
    <Box
      sx={{
        mx: "auto",
        maxWidth: 800,
        display: "flex",
        flexFlow: "column nowrap",
        gap: "64px",
      }}
    >
      {urls.map(({ url, key }) => (
        <Box key={key} sx={{ width: "100%", p: "16px", boxShadow: "lg" }}>
          <img src={url} alt="" />
          <Box sx={{ display: "flex", gap: "8px", mt: "24px", mb: "8px" }}>
            <Button onClick={makeReview(true, key)} colorScheme="green">
              Approve
            </Button>
            <Button onClick={makeReview(false, key)}>Reject</Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Main;
