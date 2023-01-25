// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type HelloDataType = {
  data: {
    id: number;
    name: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloDataType>
) {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "apple",
      },
      {
        id: 2,
        name: "orange",
      },
      {
        id: 3,
        name: "grape",
      },
    ],
  });
}
