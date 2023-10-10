// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2";

export default function getData(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const db = mysql.createConnection({
    host: process.env.DATABASE_HOSTNAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
  db.query("SELECT * FROM detection", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message, data: null });
      db.end();
      return;
    } else {
      res.status(200).json({ error: null, data: results });
      db.end();
      return;
    }
  });
}
