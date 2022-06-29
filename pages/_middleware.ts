import { NextResponse, type NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const dt = new Date().getTime();
  const weddingTime = new Date("June 06 2022 16:15:00 PDT").getTime();

  console.log(dt, weddingTime);

  if (dt < weddingTime) {
    return NextResponse.redirect("https://www.zola.com/wedding/stein-ferrell");
  }

  return NextResponse.next();
};
