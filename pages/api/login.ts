import jwt from "jsonwebtoken";
import joi from "joi";
import { NextApiHandler } from "next";

const schema = joi
  .object({
    username: joi.string().required(),
    password: joi.string().required(),
  })
  .unknown(false)
  .required();

const login: NextApiHandler = (req, res) => {
  if (req.method !== "POST") {
    res.status(404).end();
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

  const { username, password } = body as any;

  if (username !== process.env.LOGIN_USERNAME) {
    res
      .status(401)
      .json({ message: "Username not found", code: "invalid-user" });
    res.end();
    return;
  }

  if (password !== process.env.LOGIN_PASSWORD) {
    res.status(401).json({
      message: "Password does not match username",
      code: "invalid-pass",
    });
    res.end();
    return;
  }

  const thirtyDays = 60 * 60 * 24 * 30;
  const token = jwt.sign({}, process.env.TOKEN_SECRET as string, {
    expiresIn: thirtyDays,
  });
  res.status(200).json({ token });
  res.end();
};

export default login;
