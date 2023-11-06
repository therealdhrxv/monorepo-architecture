// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User, Course, Admin } from "db";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/lib/dbConnect";
import { getUser } from "@/lib/middleware";

type Data = {
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    getUser(token, (userId) => {
      if (!userId) {
        res.status(403).json({});
        return;
      }
      res.json({ user: userId });
    });
  }
}
