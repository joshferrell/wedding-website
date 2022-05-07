import joi from "joi";
import { NextApiHandler } from "next";
import s3Init from "../../utils/aws";
import validateToken from "../../utils/api-validate";

const schema = joi
  .object({
    fileName: joi.string().required(),
    approved: joi.boolean().required(),
  })
  .unknown(false)
  .required();

const review: NextApiHandler = async (req, res) => {
  const Bucket = process.env.AWS_BUCKET as string;
  const s3 = s3Init();
  if (req.method !== "POST") {
    res.status(404).end();
    return;
  }

  const validation = validateToken(req);
  if (!validation.success) {
    res.status(401).json(validation);
    res.end();
    return;
  }

  let body = {};
  try {
    const json = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    body = joi.attempt(json, schema);
  } catch (err) {
    res.status(400).json({ message: "Invalid request" });
    res.end();
    return;
  }

  const { fileName, approved } = body as any;
  console.log(body);

  const path = approved ? "approved" : "rejected";
  await s3
    .copyObject({
      Bucket,
      CopySource: `${Bucket}/${fileName}`,
      Key: fileName.replace("unreviewed", path),
    })
    .promise();

  await s3
    .deleteObject({
      Bucket,
      Key: fileName,
    })
    .promise();

  res.status(200).json({ success: true });
};

export default review;
