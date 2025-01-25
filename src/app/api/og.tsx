import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundImage: "url(https://sameerjadav-me.vercel.app/og-bg.png)",
        }}
      >
        <div
          style={{
            color: "white",
            fontFamily: "Kaisei Tokumin",
            fontSize: 48,
            fontWeight: 700,
            fontStyle: "normal",
            marginLeft: 70,
            marginRight: 550,
            paddingTop: 80,
            display: "flex",
            lineHeight: 1.125,
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
