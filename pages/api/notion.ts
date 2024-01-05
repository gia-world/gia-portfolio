import type { NextApiRequest, NextApiResponse } from "next";
import { DATABASE_ID, TOKEN } from "../../config";

// pages/api/notion.js
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   if (req.method !== "POST") {
  //     return res.status(405).json({ message: "Method Not Allowed" });
  //   }

  try {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Notion-Version": "2022-02-22",
        "content-type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        sorts: [
          {
            timestamp: "created_time",
            direction: "descending",
          },
        ],
        page_size: 100,
      }),
    };

    const notionRes = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      options
    );
    const notionData = await notionRes.json();

    return res.status(200).json({ notionData });
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
