import aws from "aws-sdk";

const initS3 = () => {
  aws.config.update({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID_JFERRELL as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_JFERRELL as string,
    },
    region: "us-west-1",
  });

  return new aws.S3();
};

export default initS3;
