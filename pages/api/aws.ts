import s3Init from "../../utils/aws";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const Bucket = process.env.AWS_BUCKET as string;
  const s3 = s3Init();

  const { Contents = [] } = await s3
    .listObjects({ Bucket, Prefix: "approved" })
    .promise();

  const urls = Contents.map(({ Key }) =>
    s3.getSignedUrl("getObject", { Bucket, Key })
  );

  res.status(200).json({ urls });
};

export default handler;
