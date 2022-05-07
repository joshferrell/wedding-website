import jwt from "jsonwebtoken";
import { NextApiRequest } from "next";

const validateToken = (req: NextApiRequest) => {
  const token = req.cookies?.token;
  if (!token) return { message: "Unable to authenticate", success: false };

  try {
    jwt.verify(token, process.env.TOKEN_SECRET as string);
    return { message: "Authorized", success: true };
  } catch (err) {
    return { message: "Unable to authenticate", success: false };
  }
};

export default validateToken;
