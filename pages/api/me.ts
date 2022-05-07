import { NextApiHandler } from "next";
import validateToken from "../../utils/api-validate";

const me: NextApiHandler = (req, res) => {
  if (req.method !== "GET") {
    res.status(404).end();
    return;
  }

  const validation = validateToken(req);
  if (!validation.success) {
    res.status(401).json(validation);
    res.end();
    return;
  }

  res.status(200).json(validation);
};

export default me;
